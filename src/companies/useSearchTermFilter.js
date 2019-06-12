import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles(theme => ({
  input: {
    marginBottom: 20,
  },
}))

export const useSearchTermFilter = () => {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState()
  const setInputValue = e => setSearchTerm(e.target.value)
  const searchTermInput = (
    <FormControl>
      <InputLabel htmlFor="companyName">
        {searchTerm || 'Search by Name'}
      </InputLabel>
      <TextField
        id="companyName"
        onChange={setInputValue}
        margin="normal"
        className={classes.input}
      />
    </FormControl>
  )

  return {
    searchTermInput,
    searchTerm,
  }
}
