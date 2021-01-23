import React, {useContext} from 'react'
import {Box} from '@chakra-ui/react'
import { MainContext } from '../Redux/MainContext'

function CardView() {
    const {card}:any=useContext(MainContext)
    return (
        <div>
            {
              card
              .filter((item:any)=>item.units!==0)
              .map((item:any)=>{
                  return(
                      <Box key={item.price}>
                          {item.name}
                          {item.units}
                      </Box>
                  )
              })
            }
        </div>
    )
}

export default CardView
