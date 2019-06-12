import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import { useGetSpecialties } from './useGetSpecialties'

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.3),
  },
}))

export const useSpecialtyFilter = () => {
  const classes = useStyles()
  const [categories, setCategories] = useState(new Set())
  const specialties = useGetSpecialties([])

  const changeFilter = specialty => () => {
    if (categories.has(specialty)) {
      categories.delete(specialty)
    } else {
      categories.add(specialty)
    }
    setCategories(new Set(categories))
  }

  const filterTags = specialties.map(specialty => {
    const color = categories.has(specialty) ? 'primary' : 'default'
    return (
      <Chip
        size="small"
        key={specialty}
        label={specialty}
        onClick={changeFilter(specialty)}
        color={color}
        className={classes.chip}
        variant="outlined"
      />
    )
  })

  return {
    categories,
    filterTags,
  }
}
