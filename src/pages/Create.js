import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

export default function Create() {
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
      <Button
        type='submit'
        color='secondary'
        variant='contained'
        onClick={() => alert('clicked !')}
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>
    </Container>
  )
}