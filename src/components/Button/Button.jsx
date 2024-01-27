// import './Button.css'

function Button(props){
    return (
        <>
            <button className='rounded bg-blue-600 px-12 py-3 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:outline-none hover:shadow-blue-800 hover:shadow hover:bg-blue-700' onClick={
                () =>{

                    props.changeFunction2()
                }
                
            }>{props.name}</button>
        </>
    )
}

export default Button;