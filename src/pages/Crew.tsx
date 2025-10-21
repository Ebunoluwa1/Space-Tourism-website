
    import { Flex, Text, Heading, VStack,Image, Box, HStack, Circle } from '@chakra-ui/react';
    import MobileCrewImg from '../assets/crew/background-crew-mobile.jpg'
    import TabCrewImg from '../assets/crew/background-crew-tablet.jpg'
    import DeskCrewImg from '../assets/crew/background-crew-desktop.jpg'
    import Layout from '../components/Layout';
    import { useState } from 'react';
    import data from '../data/data.json'
     import { motion } from 'framer-motion';

    const Crew = () => {

    const crews = data.crew;
    const [crewIndex, setCrewIndex] = useState(0);
    const active = crews[crewIndex];

    const MotionBox = motion(Box);
     const MotionImage = motion(Image);
    
    return (
    <Layout>
        <Flex
        as={'section'} 
        bgImage={{
        base: `url(${MobileCrewImg})`,
        md: `url(${TabCrewImg})`,
        lg: `url(${DeskCrewImg})`
        }}
        bgSize={'cover'}
        bgPos={'center'}
        align={'center'}
        justify={'space-between'}
        direction={{base: 'column', lg:'row'}}
        textAlign= {{base: 'center', md: 'center', lg:'left'}}
        overflow={'hidden'}
        position={'relative'}
        px={{base: '6',md:'16', lg: '24'}}
        py={{base: '8',md: '20', lg:'28'}}
        >
        {/* Left content */}
        <VStack
              align={{ base: "center", lg: "flex-start" }}
              textAlign={{ base: "center", lg: "left" }}
              flex='1'
              spacing={8}>
                <Heading
                as='h2'
                color="white"
                textTransform="uppercase"

                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                letterSpacing="2px"
                >
                <Text 
                as={'span'}
                color='gray.500'
                mr='4px'>
                02
                </Text> 
                Meet your Crew
                </Heading>

              {/* left content content */}

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
                        {active.role}
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
                        {active.bio}
                      </Text>
              </MotionBox>


        {/* dot navigation */}
              <HStack 
              spacing={4}
              pt={{base: 4, lg: 6}}
              justify={{base: 'center', lg: 'flex-start' }}>

            {crews.map ((_,idx) => (
              <Circle 
              key={idx}
              size={{base: '10px', md: '12px'}}
              bg={idx === crewIndex ? 'white' : 'gray.500'}
              cursor='pointer'
              transition = 'all 0.3s ease'
              _hover={{ opacity:0.8}}
              opacity={idx === crewIndex ? 1 : 0.5}
              onClick={() => setCrewIndex(idx)}
              />
            
            ))}
            </HStack>
      </VStack>

        {/* Right content */}
          <MotionImage 
            key={active.name}
                    src={active.images.png.replace("./", "/")}
                    alt={active.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    w={{ base: "250px", md: "350px", lg: "450px" }}
                    alignSelf={{ base: "center", lg: "flex-end" }}s
          />

        </Flex>
    </Layout>
    );
    }

    export default Crew;
