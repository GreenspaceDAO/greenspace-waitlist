import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { Form, useFormik } from "formik";
import { HiOutlineMail } from "react-icons/hi";
export default function WaitListForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values, formikHelpers) => {
      try {
        formikHelpers.setSubmitting(true);

        await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        formikHelpers.setSubmitting(false);
        setTimeout(() => {
          formik.resetForm();
        }, 600);
      } catch (error) {
        formikHelpers.setSubmitting(false);
      }
    },
  });
  return (
    <Box id="waitlist-form" mx={"auto"} maxW={"704"} my={16} px={4}>
      <Stack textAlign={"center"}>
        <Heading fontWeight={600}>Join Waitlist</Heading>
        <Text fontSize={"18px"}>Be the first to know when we launch</Text>
        <Box as="form" mt={5} onSubmit={formik.handleSubmit}>
          <HStack
            wrap={{ base: "wrap", md: "nowrap" }}
            pos={"relative"}
            bg={"black"}
            gap={"14px"}
            px={2}
            h={{ md: "62px", base: "auto" }}
            py={"6px"}
            borderColor={"gs-gray.500"}
            borderWidth={"1px"}
            rounded={"12px"}
          >
            <HStack gap={2} flex={1} minW={250}>
              <Icon
                ml={2}
                flexShrink={0}
                fontSize={24}
                as={HiOutlineMail}
                color="gs-gray.500"
              />
              <Input
                pl={2}
                transition={"0.35s ease-in-out"}
                rounded={"none"}
                _focus={{
                  borderBottom: "2px",
                  boxShadow: "none",
                  borderBottomColor: "gs-yellow.400",
                }}
                border={"0"}
                type="email"
                _placeholder={{ color: "gs-gray.500" }}
                placeholder="Email Address"
              />
            </HStack>
            <Button
              isLoading={formik.isSubmitting}
              flexShrink={0}
              rounded={"10px"}
              size={{ base: "sm", md: "md" }}
              h={{ md: "full", base: "42px" }}
            >
              Join the waitlist
            </Button>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
}
