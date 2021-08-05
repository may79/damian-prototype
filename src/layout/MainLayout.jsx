import React from 'react'
import Header from './Header'
import routes from '../routes/guest'

class MainLayout extends React.Component {
  render() {
    return (
      <>
        <Header routes={routes} />
        {this.props.children}
      </>
    )
  }
}

export default MainLayout