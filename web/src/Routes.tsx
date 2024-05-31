// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import { useAuth } from './auth'
import LandingLayout from './layouts/LandingLayout/LandingLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import AppLayout from './layouts/AppLayout/AppLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <PrivateSet unauthenticated={'login'} wrap={AppLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/chats" page={ChatsPage} name="chats" />
        <Route path="/referrals" page={ReferralsPage} name="referrals" />
        <Route path="/transactions" page={TransactionsPage} name="transactions" />
        <Route path="/offers" page={OffersPage} name="offers" />
        <Route path="/account" page={AccountPage} name="account" />
      </PrivateSet>
      <Set wrap={LandingLayout}>
        <Route path="/" page={LandingPage} name="landing" />
      </Set>
      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
