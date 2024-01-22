


import React from 'react'

function Table(props) {
  return (
    <div>
        <table border={1}>
            <thead>

            <tr>
                <th colSpan={3}>{props.tablename}</th>
            </tr>
            <tr>
                <th>Sr.No</th>
                <th>Item's Description</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.data.map((element, i) => {
                        return(
                            <>
                                <tr key={i}>
                                    <td>{element.srNo}</td>
                                    <td>{element.description}</td>
                                    <td>{element.amount}</td>
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