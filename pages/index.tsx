import Head from 'next/head'
import styled from 'styled-components';
import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/client'
import Registration from '../components/registration';
import { FullWidthButton, LinkButton } from '../components/button';
import { CircularSpinner } from '../components/progress';
import { Link } from '@material-ui/core';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { Button } from '@chakra-ui/button';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Flex height="100vh" align="center" justifyContent="center">
      <Head>
        <title>DeMentha Family</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* LOADING */}
      {loading &&
        <Spinner color="brand.600" size="xl" thickness="5px"/>
      }

      {/* LOGGED OUT */}
      {!loading && !session &&
        <Flex maxW="500px" m={6} direction="column" background="gray.100" p={[4, 6, 12]} rounded={6}>
          <Heading align="center" mb={6}>DeMentha Registration</Heading>
          <Text align="center" mb={3}>🍃 Minty 🍃 oasis of mojitos 🍹, music 🎧 and mayhem at Burning Man.</Text>
          <Text align="center" mb={6}>Let's go back to Burning Man in 2022 :).</Text>
          <Button colorScheme="brand" onClick={() => {signIn()}}>Log in / Register</Button>
        </Flex>
      }

      {/* LOGGED IN */}
      {session &&
        <>
        <AccountHeader>
          <div>
            {session.user.email} (<LinkButton onClick={() => signOut()}>Sign Out</LinkButton>)
            {/* <UnstyledButton onClick={() => signOut()}>Sign Out</UnstyledButton> */}
          </div>
        </AccountHeader>
        <Registration/>
      </>}

    </Flex>
  )
}


const Container = styled.div`
  min-height: 95vh;
  max-width: 100vw;
  font-family: Roboto;
`;

const LoginWrapper = styled.div`
  min-height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginPanel = styled.div`
  width: 375px;
  height: 320px;
  border: 2px solid #EBEBEB;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CenteredHeader = styled.h1`
  text-align: center;
  width: 100%;
`;

const LoginButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// Signed In

const AccountHeader = styled.div`
  width: 100vw;
  padding: 8px 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #EBEBEB;
  box-sizing: border-box;
  font-size: 14px;
`;

// const SignedInWrapper = styled.div`
//   min-height: 95vh;
//   width: 100%;
//   /* display: flex; */
//   /* flex-direction: column; */
//   /* align-items: center; */
// `;
