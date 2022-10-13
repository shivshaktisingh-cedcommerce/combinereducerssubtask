
export const additionfun=(t1 , t2 )=>{
    console.log(t1 , t2)
    return {
        type:'SUM' ,
        payload:{t1 , t2}
    }
}
export const subtractionfun=(t1 , t2)=>{
    return {
        type:'SUBTRACT' ,
        payload:{t1 , t2}
    }
}
export const multiplicationfun=(t1 , t2)=>{
    return {
        type:'MULTIPLY' ,
        payload:{t1 , t2}
    }
}
export const divisionfun=(t1 , t2)=>{
    return {
        type:'DIVISION' ,
        payload:{t1 , t2}
    }
}
export const clearfun=()=>{
    return {
        type:'CLEAR' ,
    }
}