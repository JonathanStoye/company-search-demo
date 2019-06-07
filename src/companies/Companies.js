import React from 'react'
import { Row, Col } from '@bootstrap-styled/v4'
import { Company } from './Company'
import { useGetCompanies } from './useGetCompanies'

export const Companies = () => {
  const companies = useGetCompanies()
  const companiesCards = companies.map(({ logo, ...company }) => (
    <Col className="col-sm-4" key={logo} style={{ marginBottom: 30 }}>
      <Company {...company} />
    </Col>
  ))
  return <Row>{companiesCards}</Row>
}
