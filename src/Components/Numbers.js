import { useState } from 'react';
import './Numbers.css'
let val=''
const my_objects={ '+':0,"-":0,'*':0,"/":0,"=":0};
const MyNumbers=(props)=>{
    const [count, setCount]=useState('')
    const evaluate=(n)=>{
        if (n in my_objects){
            props.onSaveData(n)
            val=''

        }
        else{
            val+=n
            props.onSaveData(val)

        }
        
        
        
    };


    return(
        <div className="calculator-items">
            
            <div className="calculator-items-first-row">
                <div className='cal-first'><button className='btn-hover'type='submit' onClick={()=>evaluate(1)} >1</button></div>
                <div className='cal-first'><button className='btn-hover' type="submit"onClick={()=>evaluate(2)} >2</button></div>
                <div className='cal-first'><button className='btn-hover' type="submit" onClick={()=>evaluate(3)} >3</button></div>
            </div>
            <div className="calculator-items-second-row">
                <div className='cal-first'><button className='btn-hover' type="submit" onClick={()=>evaluate(4)} >4</button></div>
                <div className='cal-first'><button className='btn-hover' type="submit" onClick={()=>evaluate(5)} >5</button></div>
                <div className='cal-first'><button className='btn-hover' type="submit" onClick={()=>evaluate(6)}>6</button></div>     
            </div>
            <div className="calculator-items-third-row">
                    <div className='cal-first'><button className='btn-hover' type="submit" onClick={()=>evaluate(7)} >7</button></div>
                    <div className='cal-first'><button className='btn-hover' type="submit" onClick={()=>evaluate(8)} >8</button></div>
                    <div className='cal-first'><button className='btn-hover' type="submit" onClick={()=>evaluate(9)} >9</button></div>
                    <div className='cal-first'><button className='btn-hover' type="submit" onClick={()=>evaluate(10)} >0</button></div>
            </div>
            <div className="calculator-items__operators">
                    <div className='cal-first'><button type="submit" className='btn-hover color-2' onClick={()=>evaluate('-')} >-</button></div>
                    <div className='cal-first'><button type="submit" className='btn-hover color-2'onClick={()=>evaluate('+')} >+</button></div>
                    <div className='cal-first'><button type="submit" className='btn-hover color-2'onClick={()=>evaluate('*')} >*</button></div>
                    <div className='cal-first'><button type="submit" className='btn-hover color-2'onClick={()=>evaluate('/')} >/</button></div>       
                    <div className='cal-first'><button type="submit" className='btn-hover color-2'onClick={()=>evaluate('=')} >=</button></div>       
            </div>
            
        </div>

    );
}
export default  MyNumbers;