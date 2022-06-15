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


const Outboundformat = (props) => {
    const options = [
        { value: 'BGRS', label: 'BGRS' },
        { value: 'I-RMS', label: 'I-RMS' },
        { value: 'Global', label: 'Global' },
        { value: 'json', label: 'json'}
      ]
     
  return (
    <div>
    <Select  disabled={props?.disable} options={options}  theme={theme}  className="React" value= {options && options?.find((op) => { return op.value === props?.apiData?.outbound_setting?.outbound_format })
  }/>
  </div>
  )
}

export default Outboundformat
