//单个useState
// import React,{useState} from 'react';

// export default function App(){
//   const [count,setCount] = useState(0)
//   return (
//     <div>
//       <p>you clicked {count} times</p>
//       <button onClick={()=>setCount(count+1)}>click me</button>
//     </div>
//   )
// }

//多个useState
// import React,{useState} from 'react'
// function App(){
//   const [count, setCount]  = useState(0)
//   const [age, setAge]  = useState(20)
//   return (
//     <div className="App">
//       <p>you clicked {count} times</p>
//       <button onClick={()=>setCount(count+1)}>add count</button>
//   <p>you age is {age}</p>
//   <button onClick={()=>setAge(age-1)}> change age</button>
//     </div>
//   )
// }

// export default App

//单个useEffect
import React,{useState,useEffect} from 'react'

function Counter(){
  const [count,setCount] = useState(0)
  const [age,setAge] = useState(20)
  //相当于componentDidMount 和 componentDidUpdate
  // useEffect(()=>{
  //   console.log(`You clicked ${count} times`)
  // });

  // useEffect(()=>{
  //   console.log('挂载和状态更新时执行')
  //   return ()=>{
  //     console.log('状态更新和卸载组件时执行')
  //   }
  // },[count])//只监控count状态
  useEffect(()=>{
    console.log('挂载和状态更新时执行')
    return ()=>{
      console.log('状态更新和卸载组件时执行')
    }
  },[])//只监控count状态
  return (
    <div className="App">
      <p>you clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>add count</button>
      <p>you age {age} times</p>
      <button onClick={()=>setAge(age+1)}>add age</button>~
    </div>
  )
}

export default Counter