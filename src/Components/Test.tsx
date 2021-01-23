import React,{useState} from 'react';
import {FoodMenu} from '../FoodItemArray'
import {Box,Flex, Button} from '@chakra-ui/react'


function Test() {
    const [card, setCard]=useState([{id:"yfdfh", name:'', img:'', category:'', price:0, available:false, units:0}])


      const cardView=card
      .map((item:any)=>{
          return(
              <Box key={item.price}>
                  {item.name}
                  {item.units}
              </Box>
          )})
    const handlePush=(item:any)=>{
        const newCard=[...card]
        if(card.some(x=>x.id===item.id)){
            const findIndex=newCard.findIndex(x=>x.id===item.id)
              newCard[findIndex].units=newCard[findIndex].units+1
              setCard(newCard)
          }else if(!card.some(x=>x.id===item.id)){
              newCard.push({...item, units:1})
              setCard(newCard)
          }}
    return (
        <React.Fragment>
       {cardView}
       {FoodMenu.map((item:any)=>{
           return(
               <Box key={item.id}>
                   {item.price}
                   <Button onClick={()=>handlePush(item)}>Order</Button>
               </Box>
           )
       })}
      </React.Fragment>
    )
} 

export default Test
