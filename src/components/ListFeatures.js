import { Box, Container, Stack, Heading, Center } from "@chakra-ui/react"
import working from "../assets/working.svg"
import { List, ListItem, ListIcon, SimpleGrid } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"
const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ]
  return (
    <Center>
      <Container maxW="container.8xl" pt="28" pb="10" bg="#f6f3f3">
        <Stack direction={["column-reverse", null, "row"]} sx={{ gap: "2rem" }}>
          <Center>
            <Box>
              <img
                src={working}
                alt="Illustration with a computer on the desk"
                width="400"
                height="295"
              />
            </Box>
            <Box>
              <Heading as="h2">The most useful resource ever created for designers</Heading>


              <List spacing={3} p="6" columns={[2, 2, 2]} >
                {list.map((el, index) => {
                  return <>
                    <ListItem key={index}>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      {el}</ListItem>
                  </>
                })}
              </List>

            </Box>
          </Center>
        </Stack>
      </Container>
    </Center>

  )
}

export default ListFeatures
