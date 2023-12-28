export const initialState={
    basket:[]
}

export const getBasketTotal=(basket:any)=>basket?.reduce((amount:number,item:any)=>item.price*item.quantity+amount,0)

const reducer=(state:any,action:any)=>{
    console.log("action====",action);

    console.log("state",state)

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
    }
}

export default reducer;