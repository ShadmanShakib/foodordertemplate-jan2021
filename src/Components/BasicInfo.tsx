import React from 'react';
import {ReactComponent as IdeaSVG} from './idea.svg'
import {ReactComponent as BikeSVG} from './bike.svg'
import {ReactComponent as LikeSVG} from './like.svg'
import {Box, Flex, Text} from '@chakra-ui/react'



export default function BasicInfo() {
const text3= 'Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.'
const text4='Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.'
    return (
        
           <Box pos='relative' bgImage='url(img/bg-1.jpg)' py={['100px']}  zIndex='2'>
               <Flex flexDirection={['column','column','column', 'row']} 
               justify='center'
               align='center'
               >

               <Box w={['700px']}>
               <Text
               bgClip='text'
               bgGradient='linear(to-r, #fc2547, #ff5a00)'
               fontSize={['lg','xl']}
               textAlign='center'
               mb={['40px']}
               >
                   Basic info about food delivery
                </Text>
                <Text
                textColor='gray.300'
                fontSize={['3xl','4xl' ,'6xl']}
                textAlign={['center']}
                fontFamily='fantasy'
                >
                    We are behind the delicious food delivery
                </Text>
                </Box>
                <Box w={['400px','600px']}
                px={['10px']}
                textAlign={['center','center','center','start']}
                >
                    <Text
                textColor='gray.400'
                
                 py='10px'
                >{text3}</Text>
               <Text 
               textColor='gray.400'>
                   {text4} 
                   </Text>
                </Box>
                </Flex>
                
                
                <Flex justify='center' align='center' mt='100px' flexDirection={['column', 'column', 'column', 'row']}>

                 {/* Idea */}
                <Flex flexDirection='column' justify='center' align='center'>
                     <IdeaSVG className='svgclass' width='100px' height='100px' fill='white'  />
                     <Text mb='40px' mt='20px'  textAlign='center' textColor='gray.300'>We have new idea for your business</Text>
                </Flex>
                

                     {/* delivery */}
                <Flex flexDirection='column' justify='center' align='center' mx={[0,0,0,'80px']}>
                   <BikeSVG className='svgclass' width='100px' height='100px'   fill='white'  />
                  <Text
                   textColor='gray.300'  mt='20px' mb='40px'
                   > Join our amazing delivery staff.</Text>     
                 </Flex>
             {/* Love */}
             <Flex flexDirection='column' justify='center' align='center'>
                   <LikeSVG className='svgclass' width='100px' height=' 100px' fill='white' fillOpacity='1'/>
                   
           <Text 
           textColor='gray.300'
           mt={['20px']}
           mb='40px'
           >We love our valued food customers</Text>
           </Flex>
                </Flex>
              
            </Box> 
      
    )
}
