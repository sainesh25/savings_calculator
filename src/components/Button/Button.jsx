

function Button(props){
    return (
        <>
            <button onClick={
                () =>{

                    props.changeFunction2()
                }
                
            }>{props.name}</button>
        </>
    )
}

export default Button;