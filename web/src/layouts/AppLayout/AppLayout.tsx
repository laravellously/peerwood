import Footer from "../_shared/footer"
import Header from "../_shared/header"
import Sidebar from "../_shared/sidebar"
import { AppRoot, AppMain, AppWrap } from "../_shared/wrapper"

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppRoot>
      <AppMain>
        <Sidebar fixed className={''} />
        <AppWrap>
          <Header fixed className={''} />
          {children}
          <Footer />
        </AppWrap>
      </AppMain>
    </AppRoot>
  )
}

export default AppLayout
