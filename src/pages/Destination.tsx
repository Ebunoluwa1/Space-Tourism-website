
import { Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import MobileDestImg from '../assets/destination/background-destination-mobile.jpg'
import TabDestImg from '../assets/destination/background-destination-tablet.jpg'
import deskDestImg from '../assets/destination/background-destination-desktop.jpg'

const Destination = () => {
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
               <Text 
                       fontFamily={'subheading'}
                       letterSpacing={'4px'}
                       color={'lightBlue'}
                       fontSize={{ sm:'sm', md:'md',lg:'subheading2'}}
                       textTransform={'uppercase'}
                       >
                              So, you want to travel to
                       </Text>
       </Flex>
    </Layout>
  );
}

export default Destination;
