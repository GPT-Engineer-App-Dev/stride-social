import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Strava-like App
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }}>
            Home
          </Link>
          <Link as={NavLink} to="/upload" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }}>
            Upload
          </Link>
          <Link as={NavLink} to="/profile" p={2} color="white" _hover={{ textDecoration: "none", bg: "teal.600" }}>
            Profile
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;