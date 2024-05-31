import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ChatsPage = () => {
  return (
    <>
      <Metadata title="Chats" description="Chats page" />

      <h1>ChatsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ChatsPage/ChatsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>chats</code>, link to me with `
        <Link to={routes.chats()}>Chats</Link>`
      </p>
    </>
  )
}

export default ChatsPage
