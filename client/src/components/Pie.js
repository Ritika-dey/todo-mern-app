import React from 'react'
import * as d3 from 'd3';  
 

const Arc = ({arcdata}) =>{
    const arc = d3.arc()
              .innerRadius(35)
              .outerRadius(200)   
    return <path d={arc(arcdata)} fill={d3.schemeDark2[arcdata.index + 2]} />

}

export default function Pie(props) {
    const pie = d3.pie().sort(null)(props.data);
    return (
        <>
             <g transform={`translate(${props.x}, ${props.y})`}>
                {
                    pie.map(d => { 
                        return <Arc arcdata = {d} key={d.index}/>
                    })
                }
             </g>
        </>
    )
}
