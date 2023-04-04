import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import NextImage from "./NextImage";

export default function Starter() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Next.js & Chakra UI
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Starter Template
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Starter Template for Next.js and Chakra UI Projects
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Create Project
            </Button>
            <Button rounded={"full"}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Box sx={{ img: { objectFit: "cover", height: "100%" } }}>
          <NextImage
            width={1000}
            height={1000}
            alt={"Login Image"}
            src="/assets/images/placeholder.png"
          />
        </Box>
      </Flex>
    </Stack>
  );
}
