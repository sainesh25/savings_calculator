import './Button.css'

function Button(props){
    return (
        <>
            <button className='' onClick={
                () =>{

                    props.changeFunction2()
                }
                
            }>{props.name}</button>
        </>
    )
}

export default Button;