import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { FormControlLabel, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles();

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(title, details, category)
    }
  }
  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
        gutterBottom
      >
        Create a new note
      </Typography>

      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete='off'
      >
        <TextField
          onChange={(e) => { setTitle(e.target.value) }}
          className={classes.field}
          label='Note Title'
          variant='outlined'
          color='secondary'
          value={title}
          fullWidth
          error={titleError}
          required
        />
        <TextField
          onChange={(e) => { setDetails(e.target.value) }}
          className={classes.field}
          label='Details'
          variant='outlined'
          color='secondary'
          value={details}
          multiline
          minRows={4}
          fullWidth
          error={detailsError}
          required
        />
        <FormControl className={classes.field}>
          <FormLabel>Select Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              control={<Radio />}
              label='Money'
              value='money'
            />
            <FormControlLabel
              control={<Radio />}
              label='Todos'
              value='todos'
            />
            <FormControlLabel
              control={<Radio />}
              label='Reminders'
              value='reminders'
            />
            <FormControlLabel
              control={<Radio />}
              label='Work'
              value='work'
            />
          </RadioGroup>
        </FormControl>
        <Button
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>

    </Container>
  )
}