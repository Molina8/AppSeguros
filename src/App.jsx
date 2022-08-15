
import React from 'react'

import { Box,Button,Grid,GridItem,Heading, Link} from '@chakra-ui/react'

import { Slider} from './components/slider'
import { Divider } from '@chakra-ui/react'

import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

export function App() {

    const handleClickInstagram = () => {
      window.open('https://www.instagram.com/berganzabazseguros/', '_blank');
    }
    const handleClickFacebook = () => {
      window.open('https://www.facebook.com/profile.php?id=100063753030641', '_blank');
    }
  
  return (
    <>
 
      

      <Box bgGradient="linear(to-l, purple, pink.100)" w='100%' p={1} color='gray.100' >
       
        <Grid templateColumns='repeat(25,1fr)' gap={0} m='1'>
          <GridItem colStart='22' >
           <Link href='https://www.facebook.com/profile.php?id=100063753030641'>
              <Button leftIcon={<AiFillFacebook color='gray.100' />}
                colorScheme='' size='15px'>
              </Button>
           </Link> 
          
          </GridItem>
          <GridItem> 
          <Link href='https://www.instagram.com/berganzabazseguros/'>
              <Button leftIcon={<AiFillInstagram color='gray.100'
              />} colorScheme='' size='15'>
              </Button>
          </Link>
          </GridItem>
          <GridItem>
           
          </GridItem>
        </Grid>
        
        <Divider orientation='horizontal' />
        <Heading size='xl' fontFamily='Times' marginLeft='38%'> Tu Seguro De Vida  </Heading>
      </Box>
      <Slider>  </Slider>
   
    
    </>
  )
}


