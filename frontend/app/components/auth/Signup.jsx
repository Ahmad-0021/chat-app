import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";

const Signup = () => {
  // State for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  // Handle form submission
  const handleSubmit = () => {
    const formData = {
      name,
      email,
      password,
      confirmPassword,
      profilePic,
    };
    console.log(formData);
  };

  return (
    <VStack spacing={2} align="stretch">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

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

      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Profile Picture</FormLabel>
        <Input type="file" onChange={(e) => setProfilePic(e.target.files[0])} />
      </FormControl>

      <Button colorScheme="teal" onClick={handleSubmit}>
        Sign up
      </Button>
    </VStack>
  );
};

export default Signup;
