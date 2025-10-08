import { Grid, GridItem } from "@chakra-ui/react"


function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg:   `"nav nav" "main main"`,
      xl:   `"nav nav" "main main"`,
    }} >
      <GridItem area="nav" bg="blue.600">Nav</GridItem>
      <GridItem area="main" bg="chocolate">Main</GridItem>
    </Grid>
  )
}

export default App
