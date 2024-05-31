import { useEffect, useRef } from 'react'

import { FieldError, Form, Label, TextField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

import { Button } from 'reactstrap'
import { useAuth } from 'src/auth'
import AppCard from 'src/components/AppCard/AppCard'
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle } from 'src/components/Block/Block'

import LogoDark from 'src/images/logo-dark.png'
import Logo from 'src/images/logo.png'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const emailAddressRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailAddressRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { emailAddress: string }) => {
    const response = await forgotPassword(data.emailAddress)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <Metadata title="Forgot Password" />
      <Toaster />
      <Block className="nk-block-middle nk-auth-body  wide-xs">
        <div className="brand-logo py-5 text-center">
          -APP.LOGO-
        </div>
        <AppCard className="card-bordered" bodyClass="card-inner-lg">
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h5">Reset password</BlockTitle>
              <BlockDes>
                <p>If you forgot your password, well, then we&apos;ll email you instructions to reset your password.</p>
              </BlockDes>
            </BlockContent>
          </BlockHead>
          <Form onSubmit={onSubmit}>
            <div className="form-group">
              <div className="form-label-group">
                <Label
                  name="emailAddress"
                  className="form-label"
                  errorClassName="invalid"
                >
                  Email Address
                </Label>
              </div>
              <TextField
                name="emailAddress"
                className="form-control form-control-lg"
                errorClassName="form-control error"
                ref={emailAddressRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Email Address is required',
                  },
                }}
              />
              <FieldError
                name="emailAddress"
                className="invalid"
              />
            </div>
            <div className="form-group">
              <Button color="primary" size="lg" className="btn-block" type='submit'>
                Send Reset Link
              </Button>
            </div>
          </Form>
          <div className="form-note-s2 text-center pt-4">
            <Link to={routes.login()}>
              <strong>Return to login</strong>
            </Link>
          </div>
        </AppCard>
      </Block>
    </>
  )
}

export default ForgotPasswordPage
