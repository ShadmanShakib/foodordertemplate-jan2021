import React from 'react';
import {ReactComponent as FacebookSVG} from './facebook.svg';
import {ReactComponent as InstagramSVG} from './instagram.svg';
import {ReactComponent as LinkedInSVG} from './linkedin.svg'
import {ReactComponent as TwitterSVG} from './Twitter.svg'
import {Flex, Box,  Link, Center } from '@chakra-ui/react'

function Footer() {
    return (
        <Box overflowX='hidden' w='full' pos='relative' bottom='0'  py={['100px']}   bgAttachment='fixed' bgImg='url(img/bg-2.jpg)' >
            <Flex pos='fixed' bottom='50px' left={['22vw','35vw','40vw']} zIndex='1' justify='center' >
                <Link  px='7px' py='7px' borderRadius='20px'    bgPos='0'
                   _hover={{bgGradient:'linear(to-r,#fc2547, #ff5a00)',bgPos:'100'}}>
                      <FacebookSVG height='22px' width='25px' fill='white' />
                       </Link>
                <Link
                mx='20px' px='6px' py='6px' borderRadius='20px'
                _hover={{bgGradient:'linear(to-r,#fc2547, #ff5a00)',bgPos:'100'}}
                >
                <InstagramSVG height='25px' width='25px' fill='white'/>
                </Link>
                <Link
                  px='8px' py='7px' borderRadius='20px'
                 _hover={{bgGradient:'linear(to-r,#fc2547, #ff5a00)',bgPos:'100'}}
                >
                <LinkedInSVG height='20px' width='20px' fill='white'/>
                </Link>
                <Link
                href='https://twitter.com/ShadmanShakib_'
                  px='8px' py='7px' borderRadius='20px' mx={['10px  ']}
                 _hover={{bgGradient:'linear(to-r,#fc2547, #ff5a00)',bgPos:'100'}}
                >
                    <Center>

                <TwitterSVG height='20px' width='20px' fill='white'/>
                    </Center>
                </Link>

            </Flex>
    
        </Box >
    )
}

export default Footer
