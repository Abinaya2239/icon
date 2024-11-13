
    
function Info(props){
    return(
        <div>
            <button 
            className='text-white bg-red-300  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900'
             onClick={props.buttonclick}
             style={{backgroundColor: props.faviIcon === props.curId ? 'blue':'red'}}>
                {props.name}
                </button>

        </div>
    )
}
export default Info;