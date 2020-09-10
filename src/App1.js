//useState 的使用
import React,{useState} from 'react'

function App(){
  const [num ,setNum] = useState(1)
  const [age ,setAge]  = useState(30)
  return (
    <div>
      <p>you number is {num}</p>
      <button onClick={()=>setNum(num+1)}>添加数字</button>
      <p>you age is {age}</p>
      <button onClick={()=>setAge(age+1)}>添加年龄</button>
    </div>
  )
}

export default App