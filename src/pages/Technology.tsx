
  import Layout from '../components/Layout';
  import { Flex, Text, Heading, VStack, Image, Box, Circle, HStack, useBreakpointValue } from '@chakra-ui/react';
  import MobileTechImg from '../assets/technology/background-technology-mobile.jpg'
  import TabTechImg from '../assets/technology/background-technology-tablet.jpg'
  import DeskTechImg from '../assets/technology/background-technology-desktop.jpg'
  import { useState } from 'react';
  import data from '../data/data.json'
  import { motion } from 'framer-motion';


  const Technology = () => {
  const techs = data.technology;
  const [techIndex, setTechIndex] = useState(0);
  const active = techs[techIndex];

  const MotionBox = motion(Box);
  const MotionImage = motion(Image);

  //Switch between landscape (mobile/tablet) and portrait (desktop)
  const currentImg = useBreakpointValue({
  base: active.images.landscape.replace("./","/"),
  lg: active.images.portrait.replace("./","/"),
  });

  return (
  <Layout>
    <Flex
    as={'section'} 
    bgImage={{
    base: `url(${MobileTechImg})`,
    md: `url(${TabTechImg})`,
    lg: `url(${DeskTechImg})`
    }}
    bgSize={'cover'}
    bgPos={'center'}
    align={'center'}
    justify={'space-between'}
  direction  ={{base: 'column', lg:'row'}}
    textAlign= {{base: 'center', md: 'center', lg:'left'}}
    overflow={'hidden'}
    position={'relative'}
    px={{base: '6',md:'16', lg: '24'}}
    py={{base: '8',md: '20', lg:'28'}}
    gap={{ base: 10, lg: 20 }}
    >
    {/* Left content */}
    <VStack
    align={{ base: "center", lg: "flex-start" }}
    textAlign={{ base: "center", lg: "left" }}
    flex='1'
    spacing={8}>
        <Heading
        as='h2'
        color={{base:'gray.100', lg: "white"}}
        textTransform="uppercase"

        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
        letterSpacing="2px"
        >
        <Text 
        as={'span'}
        color='gray.500'
        mr='4px'>
        03
        </Text> 
        Space Launch 101
        </Heading>
        
        {/* Right content */}
            <MotionImage 
                   display={{ base: "block", lg: "none" }} 
                    key={active.name}
                      src={currentImg}
                      alt={active.name}
                      w={{ base:"100%", md: "", lg: '40%'}}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      // boxSize={{base: '100%', md: '80%',lg:'50%'}}
                    objectFit={'cover'}
                      alignSelf={{ base: "center", lg: "flex-end" }}
            />
           
        <Flex 
        direction={{base: 'column', lg: 'row'}}
        align={{ base: "center", lg: "flex-start" }}
        gap={{base: 8, lg:16}}>

        {/* dot navigation */}
                        <HStack 
                        spacing={8}
                          justify={'center'}
                          display={{ base:'flex', lg:'none'}}
                        // pt={{base: 4, lg: 6}}
                      >
          
                              {techs.map ((_,idx) => (
                                <Circle 
                                key={idx}
                                size={{base: '32px', lg: '48px'}}
                                bg={idx === techIndex ? 'white' : 'gray.500'}
                                cursor='pointer'
                                color={idx === techIndex ? 'dark': 'white'}
                                transition = 'all 0.3s ease'
                                _hover={{ opacity:0.8}}
                                opacity={idx === techIndex ? 1 : 0.5}
                                onClick={() => setTechIndex(idx)}
                                >
                                  {idx + 1}
                              </Circle>
                              ))}
                      </HStack>
                  
          {/* dot navigation for desktop*/}
                        <VStack 
                         spacing={8}
                          justify={'center'}
                          display={{ base:'none', lg:'flex'}}
                        // pt={{base: 4, lg: 6}}
                      >
          
                              {techs.map ((_,idx) => (
                                <Circle 
                                key={idx}
                                size={{base: '32px', lg: '48px'}}
                                bg={idx === techIndex ? 'white' : 'gray.500'}
                                cursor='pointer'
                                color={idx === techIndex ? 'dark': 'white'}
                                transition = 'all 0.3s ease'
                                _hover={{ opacity:0.8}}
                                opacity={idx === techIndex ? 1 : 0.5}
                                onClick={() => setTechIndex(idx)}
                                >
                                  {idx + 1}
                              </Circle>
                              ))}
                      </VStack>        
              {/* left section content */}

              <MotionBox
                  key={active.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}>

                      
                      <Text
                      fontFamily={'h3'}
                        fontSize={{ base: "md", md: "lg", lg: "xl" }}
                        color="gray.500"
                        textTransform="uppercase"
                      >
                        THE TERMINOLOGY...
                      </Text>

                      <Heading
                        as="h1"
                        fontFamily="heading"
                        fontWeight="normal"
                        textTransform="uppercase"
                        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                        mb={4}
                      >
                        {active.name}
                      </Heading>

                        <Text
                        color="gray.300"
                        fontFamily="body"
                        lineHeight="tall"
                        maxW="400px"
                        mx={{ base: "auto", lg: "0" }}
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        {active.description}
                      </Text>
              </MotionBox>
        </Flex>
  </VStack>


        
    
           
  {/* IMAGE (hidden on mobile, shown on desktop) */}
  <>
    <MotionImage
     display={{ base: "none", lg: "block" }} 
      key={active.name}
      src={currentImg}
      alt={active.name}
      w="40%"
      objectFit="cover"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    />
  </>

    </Flex>
  </Layout>
  );
  }

  export default Technology;
