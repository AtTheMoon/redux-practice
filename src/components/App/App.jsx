import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, dicrement, plusFive, minusFive, resetFunc } from '../../redux/countSlice'

export const App = () => {
  const {count, name} = useSelector((state)=> (state.counter))
  const dispatch = useDispatch()

  const [number, setNumber] = useState(0)
  

  return (
    <>
        <input 
          type="text" 
          value={number} 
          onChange={(e)=>{setNumber(e.target.value)}}/>
        <h1>
          {/* <button disabled={count == 50 && true} onClick={()=>{dispatch(minusFive())}}>-5</button>
          <button  disabled={count == 0 && true}  onClick={()=>{dispatch(dicrement())}}>-</button> */}
          {count}, {name} 
          <button disabled={count == 50 && true} onClick={()=>{dispatch(increment(number))}}>+</button>
          {/* <button disabled={count >= 46 && true} onClick={()=>{dispatch(plusFive())}}>+5</button>
          <button onClick={()=>{dispatch(resetFunc())}}>Reset</button> */}
        </h1>
    </>
  )
}
