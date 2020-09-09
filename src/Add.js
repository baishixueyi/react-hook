import React from 'react'
import {add} from './math'

export default function(){
    return <h1>3 + 5 +7 = {add(3,5,7)}</h1>
}