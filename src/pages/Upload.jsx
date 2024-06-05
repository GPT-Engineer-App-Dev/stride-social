import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const Upload = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4} as="form">
        <FormControl id="distance">
          <FormLabel>Distance</FormLabel>
          <Input type="text" placeholder="Enter distance" />
        </FormControl>
        <FormControl id="time">
          <FormLabel>Time</FormLabel>
          <Input type="text" placeholder="Enter time" />
        </FormControl>
        <FormControl id="map">
          <FormLabel>Upload Map Route</FormLabel>
          <Input type="file" />
        </FormControl>
        <Button colorScheme="teal" type="submit">Upload Run</Button>
      </VStack>
    </Container>
  );
};

export default Upload;