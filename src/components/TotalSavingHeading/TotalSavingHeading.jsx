


function TotalSavingHeading(props){
    
    
    return (
        <>                
            <h1 className="text-4xl font-bold text-center  mt-5">Total Savings : <span style={{color: 
                props.saving < 2000 ? 'red' : 'green' 
            }}> {props.saving} {props.val}</span></h1>
        </>
    )
}

export default TotalSavingHeading;