import React from 'react';
import {ReactComponent as MenuSVG} from './menu.svg'
import {ReactComponent as User} from './user.svg'
import {ReactComponent as Card} from './shopping-bag.svg'
import {Box, Flex, Text, Image, Menu, MenuItem, MenuButton, MenuList, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react'

function HeaderRD() {
    return (
        <Box h={['70vh']} w='full' bgImage='url(img/bg-1.jpg)'>

       <Image  position='absolute' h={[150,150,200,230]} left='-30px' top={[   '28vh','28vh']}  src='img/slider-ele1.png'></Image>  
       <Image position='absolute'  h={[150, 200,200, 200]} right={[0]}  top={['35vh']}   src='img/slider-ele3.png'/>

              <Flex pt={[4]} flexDirection={['row']} justifyContent='space-between' align='center'>
              
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
                     <MenuButton mr='10px   '>

                  <MenuSVG/>
                     </MenuButton>
                     <MenuList>
                         <MenuItem>Home</MenuItem>
                     </MenuList>
                 </Menu>
                  
                  
                  </Box>
           </Box>
      </Flex>
      <Flex h='full' justify='center' align='center' flexDirection='column'>

      

            <Text 
            fontFamily={['fantasy']}
            fontSize={['4xl', '6xl']}
            bgClip='text' bgGradient='linear(to-r, rgb(252, 37, 71) , rgb(255, 90, 0))'>Resturant Details</Text>
        <Breadcrumb textColor='gray.100'>
        <BreadcrumbItem >
        <BreadcrumbLink _hover={{textColor:'pink.400'}} fontSize='lg' href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
        <BreadcrumbLink href='/rd'>Resturant Detail</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
        
        
        </Flex>
        </Box >
    )
}

export default HeaderRD
