import React from 'react'
import ReactDOM from 'react-dom'

let memoizedState = [] //hooks存放这这个数组
let cursor = 0 //当前momoizedState 下标

function render() {
    cursor = 0;
    ReactDOM.render(
        <App />,
        document.querySelector('#root')
    )
}
function useState(initialValue) {
    memoizedState[cursor] = memoizedState[cursor] || initialValue
    const currentCursor = cursor
    function setState(newState) {
        memoizedState[currentCursor] = newState;
        render()
    }
    return [memoizedState[cursor++], setState]
}

function useEffect(callback, depArray) {
    const hasNoDeps = !depArray;
    const deps = memoizedState[cursor]
    const hasChangeDeps = deps ? !depArray.every((el, i) => el === deps[i]) : true;
    if (hasNoDeps || hasChangeDeps) {
        callback();
        memoizedState[cursor] = depArray
    }
    cursor++;
}

function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('test')

    useEffect(() => {
        console.log('upate', count)
    }, [count,name])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Add count</button>
            <p>You name is {name}</p>
            <button onClick={() => setName(name + '!')}> Set name</button>
        </div>
    )
}

export default App