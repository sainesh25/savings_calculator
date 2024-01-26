


import React from 'react'

function Table(props) {
  return (
    <div>
        <table className='border-separate border border-slate-500 ' border={1}>
            <thead className={props.className} style={{color: "ghostwhite"}}>

            <tr key={1}>
                <th colSpan={3}>{props.tablename}</th>
            </tr>
            <tr key={2}>
                <th className="border border-slate-600">Sr.No</th>
                <th className="border border-slate-600">Item's Description</th>
                <th className="border border-slate-600">Amount</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.data.map((element, i) => {
                        return(
                            <>
                                <tr key={i}>
                                    <td className="border border-slate-700">{element.srNo}</td>
                                    <td className="border border-slate-700">{element.description}</td>
                                    <td className="border border-slate-700">{element.amount}</td>
                                </tr>
                            </>
                            )  
                        })
                    }    
            </tbody>
        </table>
    </div>
  )
}

export default Table;