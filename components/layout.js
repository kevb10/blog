import Head from './head'
import Nav from './nav'

const Layout = (props) => (
  <div>
    <Head title="Home" />
    <Nav />
    {props.children}
    <p>Footer</p>
  </div>
)

export default Layout
