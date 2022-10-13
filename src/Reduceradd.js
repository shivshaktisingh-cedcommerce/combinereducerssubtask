

const initialstate={
    result:''
}
export const reduceraddition=(state=initialstate , action)=>{
    
    
 

    switch(action.type){
       
        case 'SUM' :
            console.log(action.payload)
            return{
               ...state,result:Number(action.payload.t1) + Number(action.payload.t2)
            }
        case 'CLEAR':
            return{
                ...state , result:''
            }
        default:
            return{
                ...state
            }
    }
}