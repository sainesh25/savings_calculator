


import React from 'react'

function Table(props) {
    return (
        <>
            <table className='border-separate border border-slate-100 w-full' border={1}>
                <thead className={props.className} style={{ color: "ghostwhite" }}>

                    <tr key={1}>
                        <th colSpan={3} className='p-2'>{props.tablename}</th>
                    </tr>
                    <tr key={2} className='text-center'>
                        <th className="border border-slate-600 p-2">Sr.No</th>
                        <th className="border border-slate-600 p-2">Item's Description</th>
                        <th className="border border-slate-600 p-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((element, i) => {
                            return (
                                <>
                                    <tr key={i} className='text-center'>
                                        <td className={`border border-slate-700 ${props.bgColor}`}>{element.srNo}</td>
                                        <td className={`border border-slate-700 ${props.bgColor}`}>{element.description}</td>
                                        <td className={`border border-slate-700 ${props.bgColor}`}>{element.amount}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>

    )
}

export default Table;