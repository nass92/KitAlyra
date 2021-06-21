import { useState } from "react"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalHeader, FormControl, FormLabel, Input } from "@chakra-ui/react"
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react"
const Form = ({ isOpen, onClose }) => {
  const [sampleRequest, setSampleRequest] = useState(false)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    // get the data
    // do sth with the data
    setSampleRequest(true)
  }
  return (

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Apply for a free sample</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!sampleRequest ? (
            <form onSubmit={handleFormSubmit}>
              <FormControl id="name" mb="4">
                <FormLabel >Your name</FormLabel>
                <input id="name" placeholder="Joe Doe" required />
              </FormControl>
              <FormControl id="email" mb="4">
                <FormLabel >Your email</FormLabel>
                <Input type="email" placeholder="joe@doe.com" required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </form>
          ) : (
              <Alert status="success">
                <AlertIcon />
    Thank you! You will receive your sample soon!
              </Alert>

            )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default Form
