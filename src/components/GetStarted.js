import { Container, Badge, Button, Text, Center, Heading } from "@chakra-ui/react"

const GetStarted = () => {
  return (


    <Container id="sample" p="10" bg="#1d494e" maxW="container.8xl" color="white" >

      <Center p="10"> <Badge>Get Started</Badge> </Center>
      <Heading as="h1" fontFamily="Bodoni" pt="6" > <Center>Get AlyraKit and save your time </Center></Heading>
      <Text fontSize="xl" mb="6" textAlign="center" p="10">
        Stop wasting time trying to do it the "right way" and build a site from
        scratch. AlyraKit is faster, easier, and you still have complete
        control.
      </Text>
      <Center>
        <Button colorScheme="teal" size="lg"  >Buy now</Button>
      </Center>

    </Container>
  )
}

export default GetStarted
