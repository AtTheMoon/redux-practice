import React from 'react'
import { useSelector } from 'react-redux'

export const App = () => {
  const data = useSelector((value)=> value )
  console.log(data);
  return (
    <>
        <h1>{data.counter.count}</h1>
        <h1>{data.counter.name}</h1>
    </>
  )
}
