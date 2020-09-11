import React from 'react'
import ReactDOM from 'react-dom'

function render(){
    ReactDOM.render(
        <App/>,document.querySelector('#root')
    )
}

//easy useState useEffect

let state;
function useState(initValue){
    state = state || initValue
    function setState(newState){
        state = newState
        render()
    }
    return [state,setState]
}

let oldDeps;
function useEffect(callback,deps){
    const hasChangeDeps = oldDeps? !deps.every((el,i)=>el===oldDeps[i]):true;
    if(!deps || hasChangeDeps){
        callback()
        oldDeps = deps
    }
}


function App(){
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log('update',count)
    },[count])

    return (
        <div className="App">
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Add count</button>
        </div>
    )
}

export default App