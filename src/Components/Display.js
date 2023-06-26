import './Display.css'



const MyDisplay=(props)=>{
    return(

        // displays the numbers on the screen 
        <div className='display-items'>
            <h1 value='0'>{props.data}</h1>
        </div>

    );
}
export default MyDisplay;
