import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'

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
      console.log(title, details)
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
        <Radio value='test' />
        <Radio value='test 1' />
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