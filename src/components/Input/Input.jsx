import './Input.css';

function Input(props){
    return (
        <>
            <input name={props.name} onChange={(e) => {
                props.changeFunction(e)
            }} type={props.type} placeholder={props.placeholder}/>
        </>
    )
}

export default Input;