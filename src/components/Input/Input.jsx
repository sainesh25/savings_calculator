import './Input.css';

function Input(props){
    return (
        <>
            <input className='rounded border border-gray-500 px-5 mx-5 m-1 focus:outline-none focus:shadow-lg focus:shadow-gray-800' name={props.name} onChange={(e) => {
                props.changeFunction(e)
            }} type={props.type} placeholder={props.placeholder}/>
        </>
    )
}

export default Input;