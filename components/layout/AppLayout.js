import React from 'react'
import AppFooter from './footer'
import AppHeader from './header'

const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
        {children}
      <AppFooter />
    </>
  )
}

export default AppLayout
