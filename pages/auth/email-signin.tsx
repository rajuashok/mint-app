import { csrfToken, signIn } from 'next-auth/client'
import { Form } from 'react-final-form'
import { DefaultButton } from '../../components/button'
import { Field, Label } from '../../components/form'

export default function SignIn({ csrfToken }) {
  return (
    // <form method='post' action='/api/auth/signin/email'>
    //   <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>
    //   <label>
    //     Email address
    //     <input type='text' id='email' name='email'/>
    //   </label>
    //   <button type='submit'>Sign in with Email</button>
    // </form>
    <Form
        onSubmit={(values) => {
            console.log(values);
            signIn('email', {email: values.email});
        }}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <Label>DeMentha Email Address</Label>
                <Field name="email" component="input" placeholder="rodhogan@dementha.com" />
                <DefaultButton type="submit">Sign In</DefaultButton>
            </form>
        )}>
    </Form>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context)
  }
}