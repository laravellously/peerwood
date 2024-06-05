import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Content } from 'src/layouts/_shared/content'

const DashboardPage = () => {
  return (
    <>
      <Metadata title="Dashboard" description="Dashboard page" />

      <Content>
        <p>Dashboard Page</p>
      </Content>
    </>
  )
}

export default DashboardPage
