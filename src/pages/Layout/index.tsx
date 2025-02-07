import { Outlet } from 'react-router-dom'
import { Main } from './styles'
import { ComponentFooter} from '../../components'

export const Layout = () => {
  return (
    <>

      <Main>
        <Outlet />
      </Main>
      <ComponentFooter />
    </>
  )
}
