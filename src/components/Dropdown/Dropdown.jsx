



function Dropdown(props){
    // console.log(props.name);
    return (
        <>
            <select  name={props.name} onChange={(e) => {
                props.changeFunction(e)
            }}>
                <option  value={0} selected disabled>Select...</option>
                <option  value={1}>Income</option>
                <option  value={2}>Expense</option>
            </select>
        </>
    )
}

export default Dropdown;