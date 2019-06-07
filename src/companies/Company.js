import React from 'react'
import {
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from '@bootstrap-styled/v4'

export const Company = ({ companyName, specialty, city }) => (
  <Card>
    <CardImg top src="http://placeimg.com/640/360/arch" alt="Card image cap" />
    <CardBlock>
      <CardTitle>{companyName}</CardTitle>
      <CardSubtitle>{city}</CardSubtitle>
      <CardText>{specialty}</CardText>
      <Button color="primary">Get in touch</Button>
    </CardBlock>
  </Card>
)
