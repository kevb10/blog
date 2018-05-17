import Head from './head'
import Nav from './nav'
import Foot from './foot'

const Layout = (props) => (
  <div>
    <Head title="Home" />
    <Nav />
    {props.children}
    <Foot />
  </div>
)

export default Layout
