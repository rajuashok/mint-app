import Head from 'next/head'
import styled from 'styled-components';
import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession();
  return (
    <Container>
      <Head>
        <title>Mint App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      {!session && <>
        Not signed in <br/>
        <button onClick={() => {signIn()}}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => {signOut()}}>Sign out</button>
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
  color: green;
  font-family: 'EB Garamond';
  font-weight: 400;
  font-size: 40px;
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