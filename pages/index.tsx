import Head from 'next/head'
import styled from 'styled-components';
import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/client'
import Registration from '../components/registration';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Container>
      <Head>
        <title>Mint App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!session && <>
        Not signed in <br/>
        <button onClick={() => {signIn()}}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => {signOut()}}>Sign out</button>
        <Registration/>
      </>}

      <span>Mint Registration</span>

    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: blue;
  /* font-family: 'EB Garamond'; */
  /* font-weight: 400; */
  /* font-size: 40px; */
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