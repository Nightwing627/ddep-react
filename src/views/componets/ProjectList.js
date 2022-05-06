import React from 'react'

import ODataStore from 'devextreme/data/odata/store'

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Button,
  Paging,
  SearchPanel, Toolbar, Item, ColumnChooser
} from 'devextreme-react/data-grid'
import './ProjectList.scss'
import SelectBox from 'devextreme-react/select-box'
import { customers } from './data.js'

const columns = ['COMPANY', 'PROJECTCODE', 'LASTRUNSTATUS', 'LASTRUNDATE', 'Action']

const pageSizes = [10, 25, 50, 100]

const dataSourceOptions = {
  store: new ODataStore({
    url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
    key: 'Id',
    beforeSend(request) {
      request.params.startDate = '2020-05-10'
      request.params.endDate = '2020-05-15'
    }
  })
}

class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          collapsed: false
        }
        this.onContentReady = this.onContentReady.bind(this)
      }
    
      
      render() {
        const addButtonOptions = {
            icon: 'plus',
            onClick: () => {
              notify('Add button has been clicked!')
            }
          }
          
          const importButtonOptions = {
            text: 'Import',
            icon: 'import',
            onClick: () => {
              notify('Save option has been clicked!')
            }
          }
          
          const exportButtonOptions = {
            text: 'Export',
            icon: "export",
            onClick: () => {
              notify('Print option has been clicked!')
            }
          }
          
          const createNewProjectButtonOptions = {
            text: 'Create New Project ',
            type: "success",
            icon: "plus",
            stylingMode: "contained",
            onClick: () => {
              notify('Settings option has been clicked!')
            }
          }
        
        return (
          <DataGrid
            dataSource={customers}
            allowColumnReordering={true}
            rowAlternationEnabled={true}
            showBorders={true}
            defaultColumns={columns}
            onContentReady={this.onContentReady}
          >
               <ColumnChooser enabled={true} />
            <GroupPanel visible={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Grouping autoExpandAll={false} />
    
            {/* <Column dataField="Product" groupIndex={0} />
            <Column
              dataField="Amount"
              caption="Sale Amount"
              dataType="number"
              format="currency"
              alignment="right"
            />
            <Column
              dataField="Discount"
              caption="Discount %"
              dataType="number"
              format="percent"
              alignment="right"
              allowGrouping={false}
              
              cssClass="bullet"
            />
            <Column dataField="SaleDate" dataType="date" />
            <Column dataField="Region" dataType="string" />
            <Column dataField="Sector" dataType="string" />
            <Column dataField="Channel" dataType="string" />
            <Column dataField="Customer" dataType="string" width={150} /> */}
            
            <Toolbar>
          <Item location="before"
            widget="dxButton"
             />
          <Item location="before"
            widget="dxButton"
            />
          
          <Item location="after"
            locateInMenu="auto"
            widget="dxSelectBox"
            
            options={importButtonOptions}>
             
            </Item>
            
            <Item location="after"
            locateInMenu="auto"
            widget="dxButton"
            options={exportButtonOptions}>
             
            </Item>
            <Item location="after"
            locateInMenu="auto"
            widget="dxButton"
            
            options={createNewProjectButtonOptions}>
             
            </Item>
          
        </Toolbar>
            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
            <Paging defaultPageSize={10} />
          </DataGrid>
        )
      }
    
      onContentReady(e) {
        if (!this.state.collapsed) {
          e.component.expandRow(['EnviroCare'])
          this.setState({
            collapsed: true
          })
        }
      }
    }

export default ProjectList