import "./Dropdown.css";



function Dropdown(props){
    // console.log(props.name);
    return (
        <>
            <select className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" name={props.name} onChange={(e) => {
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