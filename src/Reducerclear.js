

const initialstate={
    result:''
}
export const reducerclearfun=(state=initialstate , action)=>{
    
    
 

    switch(action.type){
       
       
        case 'CLEAR1':
            return{
                ...state , result:''
            }
        default:
            return{
                ...state
            }
    }
}