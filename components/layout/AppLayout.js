import React from 'react'
import AppFooter from './footer'
import AppHeader from './header'

const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
        <main>{children}</main>
      <AppFooter />
    </>
  )
}

export default AppLayout
