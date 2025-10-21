
import { Flex, Heading, VStack, Text, Image, Tabs, TabList, Tab, TabPanels, TabPanel, HStack } from '@chakra-ui/react';
import Layout from '../components/Layout';
import MobileDestImg from '../assets/destination/background-destination-mobile.jpg'
import TabDestImg from '../assets/destination/background-destination-tablet.jpg'
import deskDestImg from '../assets/destination/background-destination-desktop.jpg'
import data from '../data/data.json'
import { useState } from 'react';
import { motion } from 'framer-motion';

const Destination = () => {
  const destinations = data.destinations;
  const [activeIndex, setActiveIndex] = useState(0);

  const active = destinations[activeIndex];

  const MotionImage=motion(Image)

  return (
    <Layout>
       <Flex
        as={'section'} 
             bgImage={{
                base: `url(${MobileDestImg})`,
                 md: `url(${TabDestImg})`,
               lg: `url(${deskDestImg})`
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
             <VStack flex='1' spacing={8}>
                <Heading
                 as='h2'
                 color="white"
                textTransform="uppercase"

                 fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                letterSpacing="2px"
                 >
                   <Text 
                   as='span' 
                   color='gray.500'
                    mr='4px'>
                      01
                    </Text> 
                    Pick your destination
                 </Heading>

                 <MotionImage 
                  src={active.images.png.replace('./', '/')}
                  alt={active.name}
                  boxSize={{base: '200px', md: '300px',lg:'400px'}}
                  objectFit={'contain'}
                  mx={'auto'}
                    initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  />
             </VStack>

             {/* Right content */}
             <VStack  
             flex="1"
              align={{ base: "center", lg: "flex-start" }}
              spacing={6}
              textAlign={{ base: "center", lg: "left" }}
              mt={{ base: 5, lg: 0 }} >
               <Tabs variant={'unstyled'}  onChange={(index) => setActiveIndex(index)} >
                <TabList justifyContent={{base: 'center', lg:'flex-start'}}>
                 {destinations.map((dest) => (
                  <Tab key={dest.name}
                  _selected={{
                    color:'white',
                    borderBottom: '3px solid white'
                  }}
                  color={'lightBlue'}
                  textTransform={'uppercase'}
                  fontFamily={'subheading'}
                  fontSize={{base: 'sm', md: 'md'}}
                  mx={2}
                  >{dest.name}
                  </Tab>
                 ))}
                </TabList>

                 <TabPanels>
                  {destinations.map((dest) => (
                    <TabPanel key={dest.name}>
                      <Heading
                      as='h1'
                      textTransform={'uppercase'}
                      fontFamily={'heading'}
                      fontWeight={'normal'}
                      fontSize={{ base: '5xl', md:'6xl', lg:'7xl'}}
                      >{dest.name}
                      </Heading>

                      <Text
                       color={'lightBlue'}
                       fontFamily={'body'}
                       maxW={{ base: 'sm',md:'lg'}}
                       mt={4}>
                        {dest.description}
                      </Text>

                      <HStack
                       justify={{ base: 'center', lg: 'flex-start'}}
                       spacing={10}
                       mt={8}
                       pt={6}
                       borderTop={'1px solid rgba(255,255,255,0.2)'}
                       >
                          <VStack spacing={1}>
                             <Text color={'lightBlue'}
                             textTransform={'uppercase'} 
                             fontSize={'sm'} >
                               Avg. Distance
                             </Text>

                             <Text 
                             color='white'
                             fontFamily={'heading'}
                             fontSize={{ base: '2xl', md: '3xl'}}
                             textTransform={'uppercase'}
                             >
                              {dest.distance}
                             </Text>
                          </VStack>

                          <VStack spacing={1}>
                            <Text color="lightBlue" textTransform="uppercase" fontSize="sm">
                              Est. Travel Time
                            </Text>
                              <Text
                                color="white"
                                fontFamily="heading"
                                fontSize={{ base: "2xl", lg: "3xl" }}
                                textTransform="uppercase"
                              >
                                {dest.travel}
                              </Text>

                          </VStack>
                      </HStack>

                    </TabPanel>
                  ))}
                 </TabPanels>

               </Tabs>
             </VStack>
       </Flex>
    </Layout>
  );
}

export default Destination;
