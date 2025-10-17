
// import Layout from '../components/Layout';
import {  Text, Flex, VStack, Heading, Box, Button} from '@chakra-ui/react';
import deskHomeImg from '../assets/home/background-home-desktop.jpg';
import TabHomeImg from '../assets/home/background-home-tablet.jpg';
import MobileHomeImg from '../assets/home/background-home-mobile.jpg';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';


const Home = () => {
  const MotionBox = motion(Box);
  return (
    <Layout>
      <Flex 
      as={'section'} 
      bgImage={{
         base: `url(${MobileHomeImg})`,
          md: `url(${TabHomeImg})`,
        lg: `url(${deskHomeImg})`
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
        
        {/* left content */}
         <VStack
         
         py={{base: '12',md: '24', lg:'32'}}
         align={{base:'center', md:'flex-start'}}
         spacing={4}
         textAlign={{base:'center', md: 'center',lg:'left'}}
         maxW={{base:'sm', md: 'lg'}}
         >
          <Text 
          fontFamily={'subheading'}
          letterSpacing={'4px'}
          color={'lightBlue'}
          fontSize={{ sm:'sm', md:'md',lg:'subheading2'}}
          textTransform={'uppercase'}
          >
                 So, you want to travel to
          </Text>

            <Heading
             as={'h1'}
             fontFamily={'heading'}
             fontWeight={'normal'}
             textTransform={'uppercase'}
             fontSize={{ base: '80px', sm: '100px', md:'120px', lg: '150px'}}
             lineHeight={'1.1'}
            >Space</Heading>

            <Text
            color={'lightBlue'}
            fontFamily={'body'}
             fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              maxW={{ base: '300px', md: '450px', lg: '500px' }}
            lineHeight={'tall'}>
              
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space
                and not hover kind of on the edge of it. Well, sit back and relax because we’ll give you a
                truly out-of-this-world experience!

            </Text>

         </VStack>
           {/* explore Button */}

           <MotionBox
           whileHover={{scale:1.1}}
           whileTap={{scale: 0.95}}
           transition={{duration: 0.3}}
           mt={{base:16, md:0}}
           >
             <Button 
             borderRadius={'full'}
             bg={'white'}
             color={'dark'}
             h={{ base: "120px",sm:'140px', md: "200px" }}
          w={{ base:  "120px",sm:'140px',md: "200px" }}
          fontFamily="heading"
          fontSize={{ base:"!20px", sm: "xl", md: "3xl" }}
          textTransform="uppercase"
          _hover={{
            boxShadow: "0 0 50px 15px rgba(255, 255, 255, 0.2)",
          }}

             >Explore </Button>
           </MotionBox>
      </Flex>
    </Layout>
  );
}

export default Home;
