

const initialstate={

    result:''
   
}
export const reducermultiplication=(state=initialstate , action)=>{
    switch(action.type){
        
        case 'MULTIPLY' :
            return{
                result:Number(action.payload.t1) * Number(action.payload.t2)
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