import React, { useEffect, useState } from 'react'
import './App.css'
import {
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from '@bootstrap-styled/v4'
import { getCompanies } from './services/companyService'

const App = () => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const { data } = await getCompanies()
        setCompanies(data)
      } catch (error) {}
    }
    fetchCompanies()
  }, [setCompanies])

  const companiesCards = companies.map(
    ({ companyName, logo, specialty, city }) => (
      <Col className="col-sm-4" key={logo} style={{ marginBottom: 30 }}>
        <Card>
          <CardImg
            top
            src="http://placeimg.com/640/360/arch"
            alt="Card image cap"
          />
          <CardBlock>
            <CardTitle>{companyName}</CardTitle>
            <CardSubtitle>{city}</CardSubtitle>
            <CardText>{specialty}</CardText>
            <Button color="primary">Get in touch</Button>
          </CardBlock>
        </Card>
      </Col>
    )
  )

  return <Row>{companiesCards}</Row>
}

export default App
