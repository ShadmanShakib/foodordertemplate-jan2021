import React from 'react';
import {ReactComponent as PizzaSVG} from './pizza.svg';
import {ReactComponent as SentSVG} from './sent.svg';
import {ReactComponent as CupSVG} from './hot-cup.svg';
import {Resturants} from '../Redux/Resturant'
import {Text, Box, Flex, Grid,GridItem, Image, Link } from '@chakra-ui/react'

function Section3() {
    
    return (
        <Box pb='100px'  position='relative' zIndex='3' bgImage='url(img/bg-1.jpg)'>
            <Flex flexDirection={['column', 'column', 'column', 'row']}
             justify={['center', 'center', 'center','center']} 
             align='center'>
            <Box textAlign='center'> 
            <Text  bgGradient='linear(to-r,#fc2547, #ff5a00 )' bgClip='text' fontSize='lg' pt={['80px']}>Basic info about Food</Text>
            <Text textColor='white' fontFamily='fantasy' pt={['20px']} pb={['100px']} fontSize={['3xl']} textAlign='center'>Delicious food is our aim</Text>
            </Box >
            
            <Flex flexDirection={['column', 'column', 'row']}>
              <Flex px={['0',0,'50px', '70px']} flexDirection='column' align='center'>
            <Box _hover={{transform:'translateY(-7px)'}} transition='all 0.4s ease' mb='5px'> <SentSVG  width='50px' height='50px'  /></Box> 
            <Text textColor='gray.400' fontSize={['3xl']}>10934+</Text>
            <Text textColor={['gray.400']} mb={['70px','70px','70px','']}>Online order</Text>
            </Flex>
            <Flex px={['0',0,'50px', '70px']} flexDirection='column' align='center'>
            <Box _hover={{transform:'translateY(-7px)'}} transition='all 0.4s ease' mb='5px'> <PizzaSVG  width='50px' height='50px' /></Box>
            <Text textColor='gray.400' fontSize={['3xl']}>9603+ </Text>
            <Text textColor='gray.400' mb={['70px','70px','70px','0px']}>Satisfied customer</Text>
            </Flex>
            
            <Flex px={['0',0,'50px','70px']} flexDirection='column' align='center'>

            <Box _hover={{transform:'translateY(-7px)'}} transition='all 0.4s ease' mb='5px'><CupSVG width='50px' height='50px'     /></Box>
            <Text textColor='gray.400' fontSize={['3xl']}>9488+</Text>
            <Text textColor='gray.400' mb={['100px','100px','100px','']}>Cup of teas</Text>
            </Flex>
            </Flex>
            </Flex>
            <Grid  templateColumns={['repeat(1,1fr)','repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']} gap={['20px']} align='center' justify='center' >
            {
                Resturants.map((r:any)=>{
                    return(
                       
                            <GridItem className='resturantCard'   key={r.id}>
                            
                              <Link href='/rd'>
                              
                                <Image
                                src={r.img}
                                h={['auto','380px', '320px', '280px']}
                                  w={['auto','510px','450px','350px']}
                                  _hover={{transform:'scale(1.02)'}}
                                  />
                                   
                                  <Box
                                  h='30px'
                                

                                  >
                                  <Text
                                  className='resturantCardText'
                                  fontSize={['2xl']}
                                  fontWeight='semibold' 
                                  textColor='gray.300'>{r.name}</Text>
                                 
                                  </Box>
                                
                                  </Link>
                                </GridItem>
                        
                    )
                })
            }
           </Grid>
        </Box>
    )
}

export default Section3
