import React, {useState} from 'react'

export const MainContext=React.createContext({})
export function MainContextProvider(props:any){
    const [card, setCard] =useState([{id:"yfdfh", name:'', img:'', category:'', price:0, available:false, units:0}])
    const handleOrder=(item:any)=>{
        const newCard=[...card]
        if(card.some(x=>x.id===item.id)){
            const findIndex=newCard.findIndex(x=>x.id===item.id)
              newCard[findIndex].units=newCard[findIndex].units+1
              setCard(newCard)
          }else if(!card.some(x=>x.id===item.id)){
              newCard.push({...item, units:1})
              setCard(newCard)
          }}
        
    return(
<MainContext.Provider value={{card, handleOrder}}>
    {props.children}
</MainContext.Provider>
    )
}

