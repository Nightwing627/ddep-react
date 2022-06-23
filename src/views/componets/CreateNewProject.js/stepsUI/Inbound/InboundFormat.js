import React from 'react'
import Select from "react-select"
const theme = theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#bcdb9c",
      primary: "#8DC454"
    }
  })
const InboundFormat = (props) => {
    const options = [
        { value: 'CSV', label: 'CSV' },
        { value: 'Excel', label: 'Excel' },
        { value: 'JSON', label: 'JSON' },
        { value: 'xml', label: 'XMl'}
      ]
 
      return (
    <div>
      <Select  isDisabled={props?.disabled}   options={options}  theme={theme}  className="React" value= {options && options?.find((op) => { return op.value === props?.apiData?.inbound_setting?.inbound_format })
    }/>
    </div>
  )
}

export default InboundFormat