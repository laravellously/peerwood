import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ReferralsPage = () => {
  return (
    <>
      <Metadata title="Referrals" description="Referrals page" />

      <h1>ReferralsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ReferralsPage/ReferralsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>referrals</code>, link to me with `
        <Link to={routes.referrals()}>Referrals</Link>`
      </p>
    </>
  )
}

export default ReferralsPage
