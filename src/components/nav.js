import React, { Component } from "react"
import { Anchor, Box, Header, Nav as Navigation, Menu, ResponsiveContext } from "grommet"
import { navLinks } from "../config"
import Logo from "../components/logo"

const getNavItems = () => {
  let navItems = []
  navLinks.map(({ url, name }, i) => navItems.push({ label: name, href: url }))
}

const getMenuItems = () => {
  let navItems = []
  navLinks.map(({ url, name }, i) => navItems.push({ label: name, onClick: () => {console.log(url)} }))
}

const Nav = () => {
  const navItems = getNavItems()
  const menuItems = getMenuItems()
  const size = React.useContext(ResponsiveContext);
  const isMenu = size === "xsmall" || size === "small"

  return (
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small" width="60px" height="0">
        <Logo />
      </Box>
      <ResponsiveContext.Consumer>
        {size =>
          isMenu ? (
            <Menu label="Menu" items={menuItems} />
          ) : (
            <Navigation direction="row">
              {navLinks.map(item => (
                <Anchor href={item.url} label={item.name} key={item.name} />
              ))}
            </Navigation>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  )
}

export default Nav
