import {useReducer} from "react";

const reducer = (state , action) => {
    switch (action.type){
        case 'increment':
         return state + 1 ;
        case 'decrement':
         return state - 1;
        default:
            throw new Error();
         };
}

function Counter(){
    
    const [count ,dispatch] = useReducer(reducer, 0)
    return(
<div>
    <button onClick={() => dispatch({type:'increment'})}>plus</button>
    <h1>count:{count}</h1>
    <button onClick={() => dispatch({type:'decrement'})}>minus</button>

</div>
    )
}
export default Counter