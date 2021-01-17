import Head from 'next/head'
import styled from 'styled-components';
import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/client'
import Registration from '../components/registration';
import Button from '../components/button';
import { CircularSpinner } from '../components/progress';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Container>
      <Head>
        <title>Mint App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* LOADING */}
      {!loading && 
      <LoginWrapper>
        <CircularSpinner/>
      </LoginWrapper>}

      {/* LOGGED OUT */}
      {!loading && !session &&
      <LoginWrapper>
        <LoginPanel>
          <div>
            <CenteredHeader>DeMentha 2021</CenteredHeader>
            <p>🍃 Minty 🍃 oasis of mojitos 🍹, music 🎧 and mayhem at Burning Man.</p>
            <p>Let's go back to Burning Man this year :).</p>
          </div>
          <LoginButtonDiv>
            <Button onClick={() => {signIn()}}>Login / Register</Button>
          </LoginButtonDiv>
        </LoginPanel>
      </LoginWrapper>}

      {/* LOGGED IN */}
      {session &&
        <SignedInWrapper>
          <Button onClick={() => {signOut()}}>Sign out</Button>
          <Registration/>
        </SignedInWrapper>}

    </Container>
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

const SignedInWrapper = styled.div`
  min-height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
