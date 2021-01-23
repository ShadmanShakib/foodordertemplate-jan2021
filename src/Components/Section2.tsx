import React from 'react';
import {ReactComponent as LocationSVG} from './location-pointer.svg';
import {Box, Flex, Input, InputGroup, InputLeftAddon} from '@chakra-ui/react'

function Section2() {
    return (
        <React.Fragment>
        <Box zIndex='2' position='relative' bgImage='url(img/bg-2.jpg)' pb='100px' >
            <Flex justify='center' align="center" flexDirection='column'>
          
              <InputGroup justifyContent='center' alignContent='center' mb='60px' mt='100px'>
              <InputLeftAddon px={['1px']} bgColor='transparent' borderRadius='0px' borderX='0' borderTopWidth='0' borderBottomWidth="2px"><LocationSVG height='30px' width='30px' color=''/></InputLeftAddon>
              <Input 
              w={['300px', '450px', '600px', '800px']}
             borderX='0px'
             borderTopWidth='0px'
            borderBottomWidth='2px'
            borderRadius='0'
            textColor='gray.100'
            py={['5px']}
            fontSize={['xl']}
            _focus={{}}
              
              >
            </Input>  
              </InputGroup>
             
            <Box  
            bgGradient='linear(to-r,#fc2547, #ff5a00 )' 
            transition='all 0.5s ease'
            cursor='pointer' 
            borderRadius='850px' 
            textColor='white' 
            fontWeight="semibold" 
            fontSize='lg' 
            py={['14px', '18px']} 
            px={['30px', '100px']} 
            _hover={{bgGradient:"linear(to-l,#fc2547  ,#ff5a00    )", textColor:''}}>CHECK FOOD DELIVARY</Box>

            </Flex>
        </Box>
       
        </React.Fragment>
    )
}

export default Section2
