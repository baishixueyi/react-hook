//useEffect的使用
import React,{useState,useEffect} from 'react'

function Counter(){
    const [count,setCount] = useState(0)
    const [age,setAge] = useState(20)

    //相当于 componentDidMount 和componentDidUpdate
    // useEffect(()=>{
    //     console.log(`you num is ${count} times`)
    // })//监控所有state

    useEffect(()=>{
        console.log('首次挂载和更新count执行')
        return ()=>{
            console.log('状态更新和卸载组件时执行')
        }
    },[count])//只监控count 状态

    // useEffect(()=>{
    //     console.log('首次挂载时执行')
    //     return ()=>{
    //         console.log('卸载时执行')
    //     }
    // },[])//都不监控，只在第一次挂载时和卸载时执行

    return (
        <div className="App">
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Add count</button>
            <p>you clicked {age} times</p>
            <button onClick={()=>setAge(age+1)}>Add age</button>
        </div>
    )
}

function App(){
    const [isShow,setShow] = useState(true)

    return (
        <div className="App">
            <button onClick={()=>setShow(!isShow)}>显示/隐藏Counter</button>
            {isShow && <Counter/>}
        </div>
    )
}

export default App