import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Container, Center
} from "@chakra-ui/react"

const Navigation = () => {
  return (

    <Center >
      <Breadcrumb separator=" " fontSize="2xl" position="fixed" mt="6" >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" fontWeight="bold">AlyraKit</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/#sample">Sample</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink href="/#pricing">Pricing</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <BreadcrumbLink href="/#buy-now" fontWeight="bold">Buy now</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Center>

  )
}

export default Navigation
