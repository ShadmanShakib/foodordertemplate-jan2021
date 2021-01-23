import React,{useState, useContext} from 'react'
import {Box,  Text, Button} from '@chakra-ui/react'
import {FoodMenu} from '../FoodItemArray'
import  { MainContext } from '../Redux/MainContext';

function HomeView() {
    const [newFoodMenu, setNewFoodMenu]=useState(FoodMenu);
    const {handleOrder}:any=useContext(MainContext)
    //filtering according to category
    const handleFilter=(category:string)=>{
    const updateMenu=[...FoodMenu]
     setNewFoodMenu(updateMenu.filter(item=>item.category===category))
    }
    return (
        <React.Fragment>
           
     
            <Box>
                <Button >All items</Button>
                <Button bgColor='pink.300' _hover={{bgColor:'pink.500'}} _focus={{bgColor:'pink.400'}} onClick={()=>handleFilter('stater')}>Stater</Button>
                <Button onClick={()=>handleFilter('main course')} m='3'>Main Course</Button>
                <Button onClick={()=>handleFilter('dessert')}>Dessert</Button></Box>

{newFoodMenu
.map((item:any)=>{
    return(
       
            <div key={item.id}>
            <Box >
            {item.price}
            <Text >{item.name}</Text> 
            {item.category}
            <Button  m='3' _focus={{}} onClick={()=>handleOrder(item)} >Order</Button>
            <Button  _focus={{}} >Cancel</Button>
                </Box>
            </div>
            )})}
        
        </React.Fragment>
    )
}

export default HomeView
