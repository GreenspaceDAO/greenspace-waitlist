import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  useBreakpoint,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
export function HeaderNav() {
  const breakpoint = useBreakpoint();
  // const u=useResi
  const isMobileOrTablet = breakpoint === "md";
  const linkStyles = {
    fontSize: "16px",
    textTransform: "capitalize" as any,
    _hover: {
      textDecoration: "none",
      color: "gs-yellow.400",
    },
  };
  return (
    <>
      <HStack
        pl={5}
        // px={5}
        bg={"blackAlpha.300"}
        justify={"space-between"}
        backdropFilter={"blur(5px)"}
      >
        <Heading>
          <Image
            src={"/logo-with-text.png"}
            alt={"Greenspace Logo"}
            width={"200px"}
            //   height={"100px"}
          />
        </Heading>

        <HStack
          clipPath={"polygon(14% 0, 100% 0%, 100% 100%, 0% 100%);"}
          bg={"gs-yellow.400"}
          w={{ base: 250, lg: 350 }}
          py={2}
          justify={"center"}
        >
          <Button
            textDecor={"none!important"}
            as={"a"}
            href={"#waitlist-form"}
            rounded={{ base: "8px", md: "12px" }}
            size={{ base: "md", md: "lg" }}
            layerStyle={"with-shadow"}
          >
            Join waitlist
          </Button>
        </HStack>
      </HStack>
    </>
  );
}
