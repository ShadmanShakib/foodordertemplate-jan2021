import React from 'react';
import {Image, Box,Flex, Text} from '@chakra-ui/react'

function Appdownload() {
    return (
       
            <Box pos='relative' bgImage='url(img/bg-2.jpg)' zIndex='2' textAlign='center'>
               <Text
                bgClip='text' 
                bgGradient='linear(to-r,#fc2447,#ff5a00)'
                fontSize={['lg']}
                pt={['60px']}
                >Better experience on mobile ordering.
                </Text> 
             <Text textColor='gray.300' py={['100px']} fontFamily='fantasy' fontSize={['3xl']}>download our latest app from mobile stores.</Text>
                <Flex py={['100px']} flexDirection={['column', 'column', 'row']} justify='center' align='center'>
                <Box textAlign='center'
                transition='all 0.5s ease' 
                textColor='gray.100'
                 mx={['0',0,'80px']}
                _hover={{bgClip:'text', bgGradient:'linear(to-r,#fc2547, #ff5a00)' }}
                >
                <Image   
                transition='all 0.5s ease' 
                 _hover={{transform:'translateY(-10px)',}}  
                  w={['200px']} h={['200px']} mb={['35px']} 
                  src='appstore.png'/>
                <Text   
                fontSize={['lg']}
                mb='100px'
                >
                    IOS App store
                    </Text>
                </Box>
                <Box textAlign='center'
                transition='all 0.5s ease' 
                textColor='gray.100'
                 mx={['0',0,'80px']}
                _hover={{bgClip:'text', bgGradient:'linear(to-r,#fc2547, #ff5a00)' }}>
                <Image w={['200px']} h={['200px']}  transition='all 0.5s ease'  _hover={{transform:'translateY(-10px)',}}   mb={['35px']} src='playstore.png'/>
                <Text   fontSize={['lg']}
                mb='100px'
                >Google Play Store</Text>
                </Box>
              
                </Flex>
               
            </Box>
    )
}

export default Appdownload
