import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function HeroArea() {
  return (
    <Flex
      borderBottom={"1px"}
      borderBottomColor={"gs-gray.700"}
      wrap={{ base: "wrap-reverse", md: "nowrap" }}
      px={{ base: 4, md: 12 }}
      align={"center"}
      mt={12}
      mb={4}
      gap={5}
      pb={8}
    >
      <Stack maxW={600}>
        <Heading mb={6} size={"3xl"}>
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
        <Text lineHeight={"taller"} maxW={500}>
          We&apos;re building healthy communities focused on longevity all
          around the world, we want to help people live longer, better through
          community inclusive programs that improve productivity, make people
          live happier lives with a sense of purpose and belonging in their
          community
        </Text>
      </Stack>

      <Box>
        <Box
          as="video"
          muted
          loop
          autoPlay
          src="/assets/group-video.mp4"
          minH={{ base: 350, sm: 450 }}
          rounded={"20px"}
          objectFit={"cover"}
        >
          <span>Video not supported</span>
        </Box>
      </Box>
    </Flex>
  );
}
