import React, { useState } from 'react'
import { Row, Col, Input, Button } from '@bootstrap-styled/v4'
import { Company } from './Company'
import { useGetCompanies } from './useGetCompanies'
import { useGetSpecialties } from './useGetSpecialties'

export const Companies = () => {
  const [searchTerm, setSearchTerm] = useState()
  const [categories, setCategories] = useState(new Set())
  const specialties = useGetSpecialties([])
  const companies = useGetCompanies({
    searchTerm,
    categories,
  })
  const setInputValue = e => setSearchTerm(e.target.value)
  const changeFilter = specialty => () => {
    if (categories.has(specialty)) {
      categories.delete(specialty)
    } else {
      categories.add(specialty)
    }
    setCategories(new Set(categories))
  }

  const companiesCards = companies.map(({ logo, ...company }) => (
    <Col className="col-sm-4" key={logo} style={{ marginBottom: 30 }}>
      <Company {...company} />
    </Col>
  ))
  const filterTags = specialties.map(specialty => {
    const buttonColor = categories.has(specialty) ? 'success' : 'secondary'
    return (
      <Button color={buttonColor} onClick={changeFilter(specialty)}>
        {specialty}
      </Button>
    )
  })
  return (
    <>
      <Input onChange={setInputValue} />
      <Row>{filterTags}</Row>
      <Row>{companiesCards}</Row>
    </>
  )
}
