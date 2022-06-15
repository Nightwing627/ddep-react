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
        { value: 'BGRS', label: 'BGRS' },
        { value: 'I-RMS', label: 'I-RMS' },
        { value: 'Global', label: 'Global' },
        { value: 'xml', label: 'XMl'}
      ]
 
      return (
    <div>
      <Select  disabled={props?.disabled}   options={options}  theme={theme}  className="React" value= {options && options?.find((op) => { return op.value === props?.apiData?.inbound_setting?.inbound_format })
    }/>
    </div>
  )
}

export default InboundFormat