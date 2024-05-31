import { useEffect, useRef, useState } from 'react'

import {
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

const LoginPage = () => {
  const { isAuthenticated, logIn, loading } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const emailAddressRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailAddressRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.emailAddress,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
      navigate(routes.dashboard())
    }
  }

  return (
    <>
      <Metadata title="Login" />

      <main>
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
                <BlockTitle tag="h4">Sign-In</BlockTitle>
                <BlockDes>
                  <p>Login to -APP.NAME-</p>
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
                        message: 'Email Address is required',
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
                  <Link className="link link-primary link-sm" to={routes.forgotPassword()}>
                    Forgot Password?
                  </Link>
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
                <Button size="lg" className="btn-block" type="submit" color="primary">
                  {loading ? <Spinner size="sm" color="light" /> : "Sign in"}
                </Button>
              </div>
            </Form>
            <div className="form-note-s2 text-center pt-4">
              Need an account? <Link to={routes.signup()}>Create an account</Link>
            </div>
          </AppCard>
        </Block>
      </main>
    </>
  )
}

export default LoginPage
