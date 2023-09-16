import { AppBar, Container, Grid, ThemeProvider, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react';
import theme from '@ist/styleguide';

const pages = [
  {
    title: "Home",
    link: ""
  },
  {
    title: "Product",
    link: ""
  },
  {
    title: "Account",
    link: ""
  },
  {
    title: "Cart",
    link: ""
  },
]
const Navbar = () => {

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ backgroundColor: theme.palette.purple.light }}>
        <Container>
          <Toolbar>
            <Grid container justifyContent="space-around">
              {
                pages.map((page, index) => {
                  return(
                  <Grid item key={index}>{page.title}</Grid>
                )})
              }
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navbar;