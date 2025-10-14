import { Grid, GridItem, Text } from "@chakra-ui/react"

function App() {

  return (
    <>
    
   
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg:   `"nav nav" "main main"`,
      xl:   `"nav nav" "main main"`,
    }}>
      <GridItem area="nav" backgroundColor="blue.600"> 
         <Text as="p" textStyle='h1' color='white'>Nav</Text>
  
      </GridItem>
      <GridItem area="main" backgroundColor="chocolate">Main</GridItem>
    </Grid>
      </>
  )
}

export default App
