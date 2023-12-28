
import React,{createContext,useContext,useReducer} from 'react';

type CartContextType={
    cartTotalQty:any
}

export const StateContext:any=createContext<CartContextType|null>(null)

export const StateProvider=({reducer,initialState,children}:any)=>{
    const value:any = useReducer(reducer,initialState);
    return (
    <StateContext.Provider value={value}>
        {children}
    </StateContext.Provider>
    )
}
export const useStateValue=()=>useContext(StateContext);