import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleLogin = () => {
    const userCredentials = {
      email,
      password,
    };
    console.log("Login:", userCredentials);
  };

  // Handle user credentials button
  const handleUserCredentials = () => {
    console.log("User Credentials Button Clicked");
  };

  return (
    <VStack spacing={2} align="stretch">
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
      <Button colorScheme="red" onClick={handleUserCredentials}>
        User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
