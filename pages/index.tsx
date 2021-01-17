import Head from 'next/head'
import styled from 'styled-components';
import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/client'
import Registration from '../components/registration';
import Button from "@material-ui/core/Button";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Container>
      <Head>
        <title>Mint App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session && <>
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
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <Button onClick={() => {signOut()}}>Sign out</Button>
        <Registration/>
      </>}

    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
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
  margin-bottom: 20px;
`;

// const Wrapper = styled.div`
//   @font-face {
//     font-family: 'LeagueSpartan';
//     font-style: normal;
//     font-weight: 400;
//     font-display: swap;
//     src: local('LeagueSpartan-Bold'), url(/fonts/LeagueSpartan-Bold.otf) format('otf');
//   }
// `;