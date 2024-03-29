import Head from "next/head";

import { Box, Button } from "@chakra-ui/react";
import PageLoader from "@/components/PageLoader";
import { HeaderNav } from "@/components/HeaderNav";
import WaitListForm from "@/components/WaitListForm";
import HeroArea from "@/components/HeroArea";
import CommunityArea from "@/components/CommunityArea";
import CoachArea from "@/components/CoachArea";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenspaceDAO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <PageLoader isLoading={false}>
        <Box
          maxW={"1350"}
          mx={"auto"}
          as="main"
          bgRepeat={"no-repeat"}
          bgGradient={"linear(236deg,#DCDDDB 0%,, #329648 0%, black 100%)"}
          minH={"100vh"}
          pos={"relative"}
        >
          <Box
            pb={8}
            h={"full"}
            bg={"rgba(41, 41, 41,0.44)"}
            backdropFilter={"blur(30px)"}
          >
            <HeaderNav />

            <HeroArea />
            <WaitListForm />
            <CommunityArea />
            <CoachArea />
          </Box>
        </Box>
      </PageLoader>
    </>
  );
}
