import React from 'react'
import { Header as RHeader, Navbar, Nav, Dropdown, Icon, SelectPicker } from 'rsuite'
import { useDispatch, useSelector } from 'react-redux'
import { getVersion } from 'store/app/reducer'
import { changeVersion } from 'store/app/actions'

type Props = {
  routes: Array<Path>
}

const availableUI = [
  {
    label: 'Version 1.0',
    value: 'v1',
  },
  {
    label: 'Version 2.0',
    value: 'v2',
  },
]

const Header: React.FC<Props> = ({ routes }) => {
  const dispatch = useDispatch()
  const selectedVersion = useSelector((state) => getVersion(state))

  const generateMenuItem = (route: Path) => {
    if (!route.children || !route.children.length) {
      return (
        <Nav.Item
          key={route.title}
          icon={route.icon && <Icon icon={route.icon} />}
        >
          {route.title}
        </Nav.Item>
      )
    }

    const children = route.children.map((item) => (
      <Dropdown.Item icon={route.icon && <Icon icon={route.icon} />}>
        {item.title}
      </Dropdown.Item>
    ))

    return (
      <Dropdown key={route.title} title={route.title}>
        {children}
      </Dropdown>
    )
  }

  const onChangeVersion = (version) => {
    dispatch(changeVersion(version))
  }

  return (
    <RHeader>
      <Navbar>
        <Navbar.Header>
          <a href='/#' className='navbar-brand logo'>
            DAMIAN PROTOTYPE
          </a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>{routes.map((route) => generateMenuItem(route))}</Nav>
          <Nav pullRight>
            <Nav.Item>
              UI:&nbsp;
              <SelectPicker
                defaultValue={selectedVersion}
                onChange={onChangeVersion}
                data={availableUI}
                style={{ width: 150 }}
              />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </RHeader>
  )
}

export default Header
