import { FieldError, Form, PasswordField, SubmitHandler } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'
import { useEffect, useRef } from 'react'
import { Button, Spinner } from 'reactstrap'
import { useAuth } from 'src/auth'
import AppCard from 'src/components/AppCard/AppCard'
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle } from 'src/components/Block/Block'

type FormValues = {
  token: string
}

const VERIFY_TOKEN_MUTATION = gql`
  mutation VerifyEmailMutation($token: String!) {
    verifyUser: verifyUser(token: $token)
  }
`
// const RESEND_TOKEN_MUTATION = gql`
//   mutation ResendEmailMutation($email: String!) {
//     resendVerification: resendVerification(email: $email)
//   }
// `

const VerifyTokenPage = () => {
  const { isAuthenticated } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])
  // focus on email address box on page load
  const nameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nameRef.current?.focus()
  }, [])
  const [verifyEmail, { loading }] = useMutation(VERIFY_TOKEN_MUTATION, {
    onCompleted: () => {
      toast.success('Email verified successfully')
      navigate(routes.login())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { token } = data
    verifyEmail({ variables: { token } })
  }

  return (
    <>
      <Metadata title="VerifyToken" description="VerifyToken page" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Block className="nk-block-middle nk-auth-body wide-xs">
        <div className="brand-logo py-5 text-center">
          -APP.LOGO-
          {/* <Link to={routes.landing()} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link> */}
        </div>

        <AppCard className="card-bordered" bodyClass="card-inner-lg">
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h4">Verify Email</BlockTitle>
              <BlockDes>
                <p>Login to -APP.NAME-</p>
              </BlockDes>
            </BlockContent>
          </BlockHead>
          <Form className="is-alter" onSubmit={onSubmit}>
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="password">
                  Verification Token
                </label>
              </div>
              <div className="form-control-wrap">
                <PasswordField
                  name="token"
                  className="form-control-lg form-control"
                  errorClassName="form-control error"
                  validation={{
                    required: {
                      value: true,
                      message: 'Verification token is required',
                    },
                  }}
                />
                <FieldError name="password" className="invalid" />
              </div>
            </div>
            <div className="form-group">
              <Button size="lg" className="btn-block" type="submit" color="primary">
                {loading ? <Spinner size="sm" color="light" /> : "Continue"}
              </Button>
            </div>
          </Form>
        </AppCard>
      </Block>
    </>
  )
}

export default VerifyTokenPage
