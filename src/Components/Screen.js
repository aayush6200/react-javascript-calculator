import MyNumbers from './Numbers'
import  './Screen.css'
const MyScreen=(props)=>{
    const onSaveHandler=(enteredValue)=>{
        const evaluated={
            count:enteredValue,
        }
        props.onSave(evaluated)
  }
    return(
        <div className='screen'>
        <div className='screen-calculator-items'>
        // calls the component that handles the numbers and values
        // callback is used
            <MyNumbers onSaveData={onSaveHandler}/>    
        </div>
        </div>

    )
};
export default MyScreen;
