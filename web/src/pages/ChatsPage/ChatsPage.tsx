import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Content } from 'src/layouts/_shared/content'

const ChatsPage = () => {
  return (
    <>
      <Metadata title="Chats" description="Chats page" />

      <Content>
        <p>Chat Page</p>
      </Content>
    </>
  )
}

export default ChatsPage
