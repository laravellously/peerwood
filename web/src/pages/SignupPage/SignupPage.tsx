import { useEffect, useRef, useState } from 'react'

import {
  CheckboxField,
  FieldError,
  Form,
  PasswordField,
  TextField
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

import { Button, Spinner } from 'reactstrap'
import { useAuth } from 'src/auth'
import AppCard from 'src/components/AppCard/AppCard'
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle } from 'src/components/Block/Block'

import LogoDark from 'src/images/logo-dark.png'
import Logo from 'src/images/logo.png'

const SignupPage = () => {
  const { isAuthenticated, signUp, loading } = useAuth()
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  // focus on email address box on page load
  const emailAddressRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailAddressRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.emailAddress,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
      navigate(routes.dashboard())
    }
  }

  return (
    <>
      <Metadata title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <Block className="nk-block-middle nk-auth-body wide-xs">
          <div className="brand-logo py-3 text-center">
            -APP.LOGO-
            {/* <Link to={routes.home()} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link> */}
          </div>

          <AppCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Sign Up</BlockTitle>
                <BlockDes>
                  <p>Register a new -APP.NAME- account</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>
            <Form className="is-alter" onSubmit={onSubmit}>
              <div className="form-group">
                <div className="form-label-group">
                  <label className="form-label" htmlFor="default-01">
                    Email Address
                  </label>
                </div>
                <div className="form-control-wrap">
                  <TextField
                    name="emailAddress"
                    className="form-control-lg form-control"
                    errorClassName="form-control error"
                    ref={emailAddressRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Email address is required',
                      },
                    }}
                  />
                  <FieldError name="emailAddress" className="invalid" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="form-control-wrap">
                  <PasswordField
                    name="password"
                    className="form-control-lg form-control"
                    errorClassName="form-control error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="invalid" />
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <CheckboxField className='custom-control-input' validation={{ required: { value: true, message: 'You must accept terms to continue' } }} name={'terms'} />
                  <label className="custom-control-label" htmlFor="terms">
                    I accept terms
                  </label>
                  <FieldError name="terms" className="invalid" />
                </div>
              </div>
              <div className="form-group">
                <Button size="lg" className="btn-block" type="submit" color="primary">
                  {loading ? <Spinner size="sm" color="light" /> : "Sign Up"}
                </Button>
              </div>
            </Form>
            <div className="form-note-s2 text-center pt-4">
              Already have an account? <Link to={routes.login()}>Login</Link>
            </div>
          </AppCard>
        </Block>
      </main>
    </>
  )
}

export default SignupPage