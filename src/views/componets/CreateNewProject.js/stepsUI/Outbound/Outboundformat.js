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


const Outboundformat = () => {
    const options = [
        { value: 'BGRS', label: 'BGRS' },
        { value: 'I-RMS', label: 'I-RMS' },
        { value: 'Global', label: 'Global' }
      ]
  return (
    <div>  <Select  options={options}  theme={theme}  className="React"/></div>
  )
}

export default Outboundformat