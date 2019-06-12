import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useSpecialtyFilter } from './useSpecialtyFilter'
import { useSearchTermFilter } from './useSearchTermFilter'
import { Company } from './Company'
import { useGetCompanies } from './useGetCompanies'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  inputWrapper: {},
  input: {
    marginRight: 25,
  },
}))

export const Companies = () => {
  const classes = useStyles()
  const { categories, filterTags } = useSpecialtyFilter()
  const { searchTerm, searchTermInput } = useSearchTermFilter()
  const companies = useGetCompanies({
    searchTerm,
    categories,
  })

  const companiesCards = companies.map(({ logo, ...company }) => (
    <Grid key={logo} item xs={12} sm={6} md={4} lg={3}>
      <Company {...company} />
    </Grid>
  ))

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h6">
          Filter by Company Name or Specialty
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.inputWrapper}>
        {searchTermInput}
        <br />
        {filterTags}
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {companiesCards}
        </Grid>
      </Grid>
    </Grid>
  )
}
