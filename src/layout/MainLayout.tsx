import { useSelector } from 'react-redux'
import { Container, Content } from 'rsuite'
import routes from 'routes/guest'
import { getVersion } from 'store/app/reducer'
import Header from './Header'
import SpinnerContainer from './SpinnerContainer'

const MainLayout = ({ children }) => {
  const uiVersion = useSelector((state) => getVersion(state))

  return (
    <Container className={`ui-${uiVersion}`}>
      <Header routes={routes} />
      <Content>{children}</Content>
      <SpinnerContainer />
    </Container>
  )
}

export default MainLayout
