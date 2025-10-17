import { Box, Flex, Grid, IconButton, useDisclosure, VStack, Image, HStack, Text, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from "@chakra-ui/react";
import { NavLink} from "react-router-dom";
import {  HamburgerIcon } from "@chakra-ui/icons";
import Logo from '../assets/shared/logo.svg';

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps ) => {

  const {isOpen, onOpen, onClose} = useDisclosure();
   const MotionVStack = motion(VStack);
 

  const navLinks =[
    { id: "00", label: 'Home', path:'/'},
    { id: "01", label: 'Destination', path:'/destination'},
    { id: "02", label: 'Crew', path:'/crew'},
    { id: "03", label: 'Technology', path:'/technology'}
  ]

  return (
    <Flex direction='column' minH='100vh'  color='white'> 
     {/* <Flex direction='column' minH='100vh'  color='white'>  */}
    {/* i'd get back to the first flex,lets work on the navbar */}

        {/* NavBar */}
        <Flex 
        as='nav'
        align='center'
        justify='space-between'
        px={[4,8,16]}
        py={4}
        zIndex={'10'}
        position={'absolute'}
        top={'0'}
        w={'100%'}
        >

            {/* left side LOGO */}
           <Box  fontWeight='bold' fontSize='lg'>
             <Image src={Logo} alt="space logo" boxSize={'25px'}/>
            </Box>

            {/* Center Divider Line */}
            <Box 
            display={['none','none', 'block']}
            w='40%'
            h='1px'
            bg='gray.600'
            position={"relative"}
            left={'7%'}
            />
             
            {/*Right side -  NavLinks */}
            <Flex
            bg={"rgba(255, 255, 255, 0.04)"}
            px={10}
            py={4}
            display={{base: 'none', md:'flex'}} 
            gap={10} 
            backdropBlur={'blur(40px)'}
            // borderRadius={"xl"}
            >
               {navLinks.map(({ id, label, path }) => (
                <NavLink 
                to={path}
                key={label}
                style={({isActive}) => ({
                borderBottom: isActive ? "3px solid white": "3px solid gray.800",
                paddingBottom:'6px'
                })}
                >
                  <HStack textTransform='uppercase' spacing={2}
                  _hover={{color: 'gray.600'}}> 
                   <Text fontWeight={'bold'}>{id}</Text> 
                   <Text fontWeight={'normal'} letterSpacing={'2px'}>{label}</Text>
                  </HStack>
                </NavLink>
               )) }
            </Flex>  
                
                {/* Mobile Menu Button */}

            {/* <IconButton aria-label="Menu" display={{base: 'flex', md: "none"}}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose: onOpen}
            variant='ghost'
            color='white'
            /> */}
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="ghost"
          color="white"
          _hover={{ bg: "rgba(255,255,255,0.1)" }}
        />
      
        </Flex> 

        {/* Mobile menu links */}

        {/* {isOpen && (
          <VStack 
          bg='gray.800' 
          fontSize='sm'
          textTransform={"uppercase"}
          py={6}
          spacing={4}
          display={{base: 'flex', md: 'none'}}>
              {navLinks.map(({ id, label, path }) => (
                <NavLink 
                to={path}
                key={label}
                style={({isActive}) => ({
                borderBottom: isActive ? "3px solid white": "3px solid gray.800",
                paddingBottom:'6px'
                })}
                >
                  <HStack textTransform='uppercase' spacing={2}
                  _hover={{color: 'gray.600'}}> 
                   <Text fontWeight={'bold'}>{id}</Text> 
                   <Text fontWeight={'normal'} letterSpacing={'2px'}>{label}</Text>
                  </HStack>
                </NavLink>
               )) }
          </VStack>
        )} */}
        <Drawer isOpen={isOpen}  placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg='rgba(11,13,23,0.95)' backdropFilter='blur(10px)'>
           <DrawerCloseButton color={'white'} />
           <DrawerBody>
              <MotionVStack
              fontFamily={'subheading'}
               spacing={6} mt={10}
              align={'flex-start'}
              initial={{x:100, opacity:0}}
              animate={{x:0 , opacity:1}}
              transition={{ duration: 0.5,ease: "easeOut" }}
              onClick={onClose}
              >
                  {navLinks.map(({ id, label, path }) => (
                <NavLink 
               
                to={path}
                key={label}
                style={({isActive}) => ({
                borderBottom: isActive ? "2px solid white": "2px solid gray.800",
                paddingBottom:'6px'
                })}
                >
                  <HStack textTransform='uppercase' spacing={2}
                  _hover={{color: 'gray.600'}}> 
                   <Text as={'span'} mr={2} fontWeight={'bold'}>{id}</Text> 
                   <Text fontWeight={'normal'} letterSpacing={'2px'}>{label}</Text>
                  </HStack>
                </NavLink>
               ))}
              </MotionVStack>
                
           </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Main Content */}
        <Grid 
        flex='1'
        templateColumns={{ base: '1fr', md: '1fr'}}
        // px={{base: 4, md: 16 }}
        // py={8}
        >
          {children}
        </Grid>

        {/* Footer */}
        <Box as="footer" textAlign='center' py='4' opacity={0.6}>
           © 2025 Space Tourism Project
         </Box> 
    </Flex>
  );
}

export default Layout;
