export function add(...args){
    console.log('add...')
    return args.reduce((v1,v2)=>v1+v2)
}
export function subtract(v1,v2){
    console.log('substract...')
    return v1-v2
}
export function multiply(...args){
    return args.reduce((v1,v2)=>v1 * v2)
}

export function divide(v1,v2){
    return v1/v2
}