import { Box, Container, Text, VStack } from "@chakra-ui/react";

const RunDetail = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Box p={4} shadow="md" borderWidth="1px" width="100%">
          <Text fontSize="xl">User 1</Text>
          <Text>Distance: 5 km</Text>
          <Text>Time: 25 mins</Text>
          <Text>Map Preview: [Placeholder]</Text>
          <Text>Comments: [Placeholder]</Text>
          <Text>Likes: [Placeholder]</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default RunDetail;