import React from 'react';
import {ReactComponent as MenuSVG} from './menu.svg'
import {ReactComponent as User} from './user.svg'
import {ReactComponent as Card} from './shopping-bag.svg'
import {Box, Flex, Image, Text, Menu, MenuButton, MenuList,MenuItem} from '@chakra-ui/react'

function MainsectionHP() {
    return (
        <Box pos='relative' zIndex='3' w='full'  h={['100vh',]} overflowY='hidden'  overflowX='hidden' bgImage="url(img/bg-1.jpg)">
            {/* Fry pan */}
             <Image className='frypan' position='absolute' h={[0,0,200,230]} left={[0,0,'5vh','15vh']} top={[0,0,'28vh','28vh']} visibility={['hidden','hidden','visible']} src='img/slider-ele1.png'></Image>  
                <Image position='absolute'  h={[150, 200,250, 300]} right={[0]}  top={['70vh','60vh','55vh' ,'35vh']}   src='img/slider-ele3.png'/>
                <Image position='absolute' h={[200,]} left='-2'  top={['75vh','70vh']}   src='img/slider-ele4.png'/>
                {/* Leaf image */}
                <Image  position='absolute' right={['25vw','40vw','20vw']}  top={['23vh','20vh']}  src='img/slider-ele5.png'/>
            
            <Flex pt={[4]} flexDirection={['row']} justify={['center','space-around']}  align={['center','center', 'center']}>
              
                    <Text fontSize={['sm','xl','3xl']} px={[4]} fontWeight='' fontFamily={'sans-serif'} textColor='pink.600'>Shadman Shakib</Text>
                <Text
                textColor='gray.200'
               
                borderColor='green.300'
                transition='all 0.2s ease'
               fontSize='lg'
               fontWeight='semibold'
               visibility={['hidden','hidden','hidden','visible']}
               _hover={{textColor:'pink.600'}}
                >
                    Browse Food</Text>
                <Text
                textColor='gray.200'
                fontSize='lg'
                fontWeight='semibold'
                _hover={{textColor:'pink.600'}}
                visibility={['hidden','hidden','hidden','visible']}
                >Download App</Text>
                <Text
                textColor='gray.200'
                fontSize={['lg']}
                fontWeight='semibold'
                _hover={{textColor:'pink.600'}}
                visibility={['hidden','hidden','hidden','visible']}
                >About Us</Text>
               
                <Box display='flex' flexDirection='row'>
                <Box className='cardClass'>
                <Card  />
                <Box w={['80px']} className='cardContent'>
                    <Text 
                    textColor='gray.100'
                    bgColor='gray.800'
                    py='4px'
                    fontSize='2xl'
                    _hover={{textColor:'pink.500', bgColor:'gray.900'}}
                    >Item 1</Text>
                    <Text
                    textColor='gray.100'
                    bgColor='gray.800'
                    fontSize='lg'
                    
                    >Item 2 </Text>
                    <Text
                    textColor='gray.100'
                    bgColor='gray.800'
                    _hover={{textColor:'pink.500', bgColor:'gray.900'}}
                    >Item 3</Text>
                </Box>
                </Box>
              
              
                <Menu >
                           <MenuButton mx={['10px']}>

                           <User />
                           </MenuButton>
                           <MenuList >
                               <MenuItem fontSize={['lg']} fontWeight={['semibold']}  _hover={{bgGradient:'linear(to-r, #fc2547, #ff5a00)', 
                            textColor:'white',

                            }}
                            >Register</MenuItem>
                               <MenuItem fontSize={['lg']} fontWeight={['semibold']} _hover={{bgGradient:'linear(to-r, #fc2547, #ff5a00)', 
                            textColor:'white',

                            }}>Log In</MenuItem>
                               <MenuItem fontSize={['lg']} fontWeight={['semibold']} _hover={{bgGradient:'linear(to-r, #fc2547, #ff5a00)', 
                            textColor:'white',

                            }}>Account</MenuItem>
                               <MenuItem fontSize={['lg']} fontWeight={['semibold']} _hover={{bgGradient:'linear(to-r, #fc2547, #ff5a00)', 
                            textColor:'white',

                            }}>Log out</MenuItem>
                           </MenuList>
                       </Menu>
                    
                   
                   <Box visibility={['visible','visible','hidden','hidden']}>
                       <Menu>
                           <MenuButton >

                        <MenuSVG/>
                           </MenuButton>
                           <MenuList>
                               <MenuItem>Home</MenuItem>
                           </MenuList>
                       </Menu>
                        
                        
                        </Box>
                 </Box>
            </Flex>
            <Flex h={['80vh']} align={['center']} flexDirection={["column"]} justify={['center']}>
            <Box mt='250px' mb="180px"><Text noOfLines={2} fontFamily="cursive"   textAlign={'center'} textColor='white' fontSize={['3xl','4xl','5xl' ,'5xl']}>Delicious Food at <br/> your door step</Text></Box>
           
               </Flex>
          
        </Box>
    )
}

export default MainsectionHP
