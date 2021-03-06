import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar.js";
import VoxelDog from "../voxel-dog.js";
// import noSsr from "../no-ssr.js";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Adam Junio - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <noSsr>
          <VoxelDog></VoxelDog>
        </noSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
