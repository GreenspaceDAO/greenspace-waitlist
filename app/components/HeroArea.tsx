import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function HeroArea() {
  return (
    <Flex my={10} px={{ base: 4, md: 12 }}>
      <Stack maxW={600}>
        <Heading mb={6}>
          Want to Live{" "}
          <Text as={"span"} color={"gs-green.500"}>
            Healthier
          </Text>{" "}
          and
          <Text as={"span"} color={"gs-yellow.400"}>
            {" "}
            Longer?
          </Text>
        </Heading>
        <Text color={"gs-gray.200"}>
          We&apos;re building healthy communities focused on longevity all
          around the world, we want to help people live longer, better through
          community inclusive programs that improve productivity, make people
          live happier lives with a sense of purpose and belonging in their
          community
        </Text>
      </Stack>

      <Box></Box>
    </Flex>
  );
}
