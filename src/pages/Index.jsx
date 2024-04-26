import { Box, Button, Flex, Heading, Image, Input, Stack, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaLock, FaSun, FaMoon, FaUserShield } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Admin Dashboard</Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1474377207190-a7d8b3334068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZG1pbnxlbnwwfHx8fDE3MTQxMzMxNzB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Admin Image" mb={4} />
        <Text mb={2} fontSize="lg" align="center">
          Sign in to your account
        </Text>
        <Input placeholder="Username" variant="filled" mb={3} type="text" />
        <Input placeholder="Password" variant="filled" mb={6} type="password" />
        <Button leftIcon={<FaLock />} colorScheme="red" mb={6}>
          Login
        </Button>
        <Button leftIcon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <VStack spacing={2} align="stretch" mt={4}>
          <Button leftIcon={<FaUserShield />} colorScheme="red">
            Manage Roles
          </Button>
          <Button leftIcon={<FaUserShield />} colorScheme="red">
            Manage Users
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Index;
