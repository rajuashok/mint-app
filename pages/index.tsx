import Head from 'next/head'
import styled from 'styled-components';
import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/client'
import Registration from '../components/registration';
import { DefaultButton as Button, FullWidthButton, LinkButton } from '../components/button';
import { CircularSpinner } from '../components/progress';
import { Link } from '@material-ui/core';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Container>
      <Head>
        <title>Mint App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* LOADING */}
      {loading && 
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
            <FullWidthButton onClick={() => {signIn()}}>Login / Register</FullWidthButton>
          </LoginButtonDiv>
        </LoginPanel>
      </LoginWrapper>}

      {/* LOGGED IN */}
      {session &&
        <SignedInWrapper>
          <AccountHeader>
            <div>
              {session.user.email} (<LinkButton onClick={() => signOut()}>Sign Out</LinkButton>)
              {/* <UnstyledButton onClick={() => signOut()}>Sign Out</UnstyledButton> */}
            </div>
          </AccountHeader>
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