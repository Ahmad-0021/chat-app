import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/auth/login";
import Signup from "../components/auth/signUp";
const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        fontSize={20}
        justifyContent={"center"}
        bg={"white"}
        p={2}
        borderRadius={"20px"}
        w={"100%"}
        m={3}
      >
        <Text textColor={"black"} textAlign={"center"}>
          Chat App
        </Text>
      </Box>
      <Box
        fontSize={20}
        justifyContent={"center"}
        bg={"white"}
        borderRadius={"20px"}
        w={"100%"}
        p={2}
      >
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab w={"50%"}>Login</Tab>
            <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
