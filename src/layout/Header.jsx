import { Navbar, Nav, Dropdown, Icon } from 'rsuite'

const Header = ({ routes }) => {
  const generateMenuItem = (route) => {
    if (!route.children || !route.children.length) {
      return (
        <Nav.Item icon={route.icon && <Icon icon={route.icon} />}>
          {route.title}
        </Nav.Item>
      )
    }

    const children = route.children.map((item) => (
      <Dropdown.Item icon={route.icon && <Icon icon={route.icon} />}>
        {item.title}
      </Dropdown.Item>
    ))

    return <Dropdown title={route.title}>{children}</Dropdown>
  }

  return (
    <header>
      <Navbar>
        <Navbar.Header>
          <a href='/#' className='navbar-brand logo'>
            DAMIAN PROTOTYPE
          </a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>{routes.map((route) => generateMenuItem(route))}</Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon='cog' />}>Settings</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </header>
  )
}

export default Header
