import { useState } from 'react';
import MyScreen from './Components/Screen'
import MyDisplay from './Components/Display'
import "./App.css";

let myStack=[]
const my_objects={ '+':0,"-":0,'*':0,"/":0,"=":0};
function App() {
  const [val,setVal]=useState('0')
  const onSaveHandler=(enteredValue)=>{
    const evaluated={
      ...enteredValue,
    }
    if (evaluated.count in my_objects){
      if (myStack.length==0){
        setVal('0')
      }
      else if(myStack.length==1){
        setVal(evaluated.count)
        myStack[1]=evaluated.count
      }
      else{
        if (evaluated.count==='='){
          let calculate=eval((myStack[0])+myStack[1]+(myStack[2]))
          console.log(myStack)
          setVal(calculate.toString())
          myStack=[]
        }
      }


    }
    else{
      setVal(evaluated.count)
      if(myStack.length==0){
        myStack.push(evaluated.count)
      }
      else if (myStack.length==1){
        myStack[0]=evaluated.count
      }
      else if (myStack.length==2){
        myStack.push(evaluated.count)
      }
      else{
        myStack[2]=evaluated.count
      }
    }
   
    
  }
  return (
  <div>
    <MyDisplay data={val}/>
    <MyScreen onSave={onSaveHandler}/>
  
   </div>
  );

}
export default App;
