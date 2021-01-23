import React,{} from 'react';
import {FoodItems} from '../Redux/FoodItems'
import {ReactComponent as BreakfastSVG} from './icons/breakfast.svg';
import {ReactComponent as LunchSVG} from './icons/waiting.svg';
import {ReactComponent as DinnerSVG} from './icons/restaurant.svg';
import {ReactComponent as GiftSVG} from './icons/gift.svg'
import {Box, Flex, Text, SimpleGrid} from '@chakra-ui/react'

function Section2RD() {
    return (
        <Box pos='relative' zIndex='3' bgImage='url(img/bg-2.jpg)' px={['100px']} py={['100px']}>

            <SimpleGrid justify='end' columns={[2, 2, 4]} row={[2,2,1]} gap='6'>
                <Flex
                rounded='sm'
                flexDirection='column'
                justify='center'
               
                align='center'
                maxW={['400px']}
                minW={['170px']}
                bgColor='gray.800'
                h={['74px', '90px','100px','110px']} p={['10px']}
                 _hover={{bgGradient:'linear(to-r,#fc2547, #ff5a00 )'}}
                
                 >
                     <BreakfastSVG height='70px' width='70px' fill='white'/>
                    <Text
                    
                    textColor='white'
                    fontWeight='semibold'
                    >BreakFast</Text>
                </Flex>
                <Flex
                rounded='sm'
                flexDirection='column'
                justify='center'
                align='center'
                maxW={['400px']}
                minW={['170px']}
                bgColor='gray.800'
                h={['74px','90px','100px','110px']} p={['10px']}
                 _hover={{bgGradient:'linear(to-r,#fc2547, #ff5a00 )'}} >
                     <LunchSVG height='70px' width='70px' fill='white'/>
                    <Text
                    
                    textColor='white'
                    fontWeight='semibold'
                    >Lunch</Text>
                </Flex>
                <Flex
                rounded='sm'
                flexDirection='column'
                justify='center'
                align='center'
                maxW={['400px']}
                minW={['170px']}
                bgColor='gray.800'
                h={['74px','90px','100px','110px']} p={['10px']}
                 _hover={{bgGradient:'linear(to-r,#fc2547, #ff5a00 )'}} >
                     <DinnerSVG height='70px' width='70px' fill='white'/>
                    <Text
                    
                    textColor='white'
                    fontWeight='semibold'
                    >Dinner</Text>
                </Flex>
                <Flex
                rounded='sm'
                flexDirection='column'
                justify='center'
                align='center'
                maxW={['400px']}
                minW={['170px']}
                bgColor='gray.800'
                h={['74px','90px','100px','110px']} p={['10px']}
                 _hover={{bgGradient:'linear(to-r,#fc2547, #ff5a00 )'}} >
                     <GiftSVG height='70px' width='70px' fill='white'/>
                    <Text
                    
                    textColor='white'
                    fontWeight='semibold'
                    >Offer</Text>
                </Flex>
            </SimpleGrid>
           

           <SimpleGrid columns={[1,1,2]} py='100px' spacingX='20px' spacingY='15px'>
               {
                   FoodItems.map((item:any)=>{
                       return(
                           
              <Box 
              key={item.id}
              minH={['128px']}
              w={['full']}
              bg='#2d2d2d'
              rounded='sm'
               display='flex'
               justify='center'
              flexDirection='row'
               pos='relative'
               py='6px'
                   px={['6px']}
                   className='myClass1'
              >
                  <Box
                   left='0'
                   top='0'
                   right='100%'
                   bottom='0'
                   pos='absolute'
                   
                   transition='all 0.8s ease'
                   bgGradient='linear(to-r, #fc2547, #ff5a00)'
                   className='myClass2'
                  >
                       </Box>
                  <Box w={['80%']} pos='relative' zIndex='1'>

                  
                  <Text

                  textColor='gray.200'
                  fontSize='xl'
                  >{item.name}</Text>
                <Text
                  textColor='gray.300'
                  fontSize='lg'
                  
                >
                    {item.details}
                </Text>
                </Box>
                <Flex
                align='center'
                justify='center'
                pos='relative' zIndex='1'
                >
                <Text
                textColor='gray.200'
                fontSize='3xl'
                >
                  ${item.price}
                </Text>
                </Flex>
               
               
                </Box> 

                       )
                   })
               }
           </SimpleGrid>


        </Box >
    )
}

export default Section2RD
