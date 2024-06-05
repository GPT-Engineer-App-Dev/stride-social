import { Box, Container, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Box p={4} shadow="md" borderWidth="1px" width="100%">
          <Text fontSize="xl">User 1</Text>
          <Text>Distance: 5 km</Text>
          <Text>Time: 25 mins</Text>
          <Text>Map Preview: [Placeholder]</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" width="100%">
          <Text fontSize="xl">User 2</Text>
          <Text>Distance: 10 km</Text>
          <Text>Time: 50 mins</Text>
          <Text>Map Preview: [Placeholder]</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;