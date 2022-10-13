import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { additionfun, clearfun, divisionfun,  multiplicationfun,  subtractionfun,  } from './Action'

const Component1 = () => {
    const[obj1 ,setObj1]=useState({
        a:'',
        b:'',
    })
    const[flag , setFlag]=useState(0)


    const mystate1= useSelector((state)=>state.reduceraddition)
    const mystate2= useSelector((state)=>state.reducermultiplication)
    const mystate3= useSelector((state)=>state.reducersubtraction)  
    const mystate4= useSelector((state)=>state.reducerdivision)
    const dispatch=useDispatch()
  
    const handler=(event)=>{
        setObj1({...obj1, [event.target.name]:event.target.value})
    }
    const handler1=(d)=>{
        if(d===1){
            dispatch(additionfun(obj1.a , obj1.b))
            setFlag(1)
        }
        if(d===2){
            dispatch(multiplicationfun(obj1.a , obj1.b))
            setFlag(2)

        }
        if(d===3){
            dispatch(subtractionfun(obj1.a , obj1.b))
            setFlag(3)

        }
        if(d===4){
            dispatch(divisionfun(obj1.a , obj1.b))
            setFlag(4)
        }
        if(d===5){
            dispatch(clearfun())
            setFlag(0)
        }

    }
  return (
    <div>
        <p><input type="number" value={obj1.a} name="a" onChange={handler}/></p>
        <p><input type="number" value={obj1.b} name="b" onChange={handler}/></p>
        <div className="contain_all_buttons_div_class">
        <button onClick={()=>handler1(1)}>ADD</button>
        <button onClick={()=>handler1(2)}>MULTIPLY</button> 
        <button onClick={()=>handler1(3)}>SUBTRACTION</button>
        <button onClick={()=>handler1(4)}>DIVISION</button>
        <button onClick={()=>handler1(5)}>CLEAR</button>
        </div>
        <p>
            {flag===1?mystate1.result:flag===2?mystate2.result:flag===3?mystate3.result:flag===4?mystate4.result:''}

        </p>
    </div>
  )
}

export default Component1