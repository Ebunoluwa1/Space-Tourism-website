import { Box, Flex, Grid, IconButton, useDisclosure, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps ) => {

  const {isOpen, onOpen, onClose} = useDisclosure();

  const navLinks =[
    {label: 'Home', path:'/'},
    {label: 'Destination', path:'/destination'},
    {label: 'Crew', path:'/crew'},
    {label: 'Technology', path:'/technology'}
  ]

  return (
    <Flex direction='column' minH='100vh' bg='black' color='white'>
        {/* NavBar */}
        <Flex as='nav' align='center'
        justify='space-between'
        px={{base: 4, md:12}}
        py={4}
        borderBottom='1px solid rgba(255,255,255,0.1)'>
           <Box  fontWeight='bold' fontSize='lg'>
             SPACE TOURISM
            </Box>

            <Flex display={{base: 'none', md:'flex'}} gap={8}>
               {navLinks.map((link) => (
                <Link 
                as={RouterLink}
                to={link.path}
                key={link.path}
                _hover={{ color: 'gray.400'}}
                >
                   {link.label}
                </Link>
               )) }
            </Flex>  

            <IconButton aria-label="Menu" display={{base: 'flex', md: "none"}}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose: onOpen}
            variant='ghost'
            color='white'
            />
        </Flex> 

        {/* Mobile menu */}

        {isOpen && (
          <VStack 
          bg='gray.800' 
          py={6}
          spacing={4}
          display={{base: 'flex', md: 'none'}}>
             {navLinks.map((link) => (
              <Link as={RouterLink} to={link.path} key={link.path}onClick={onClose}>
                {link.label}
              </Link>
             ))}
          </VStack>
        )}

        {/* Main Content */}
        <Grid 
        flex='1'
        templateColumns={{ base: '1fr', md: '1fr'}}
        px={{base: 4, md: 16 }}
        py={8}
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
