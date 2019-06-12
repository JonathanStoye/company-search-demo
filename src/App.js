import React from 'react'
import './App.css'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Companies } from './Companies'

const App = () => (
  <Container maxWidth="lg">
    <Typography variant="h2" component="h1">
      Company Search Demo
    </Typography>
    <br />
    <Companies />
  </Container>
)

export default App
