import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { Avatar, makeStyles } from '@material-ui/core'
import { red, blue, yellow, green } from '@material-ui/core/colors'

const useStyles = makeStyles({
  cardBg: {
    background: (note) => {
      switch (note.category) {
        case 'work':
          return blue[300]
        case 'todos':
          return red[300]
        case 'reminders':
          return yellow[300]
        case 'money':
          return green[300]
        default:
          break;
      }
    }
  },
  avatar: {
    background: (note) => {
      switch (note.category) {
        case 'work':
          return blue[700]
        case 'todos':
          return red[700]
        case 'reminders':
          return yellow[700]
        case 'money':
          return green[700]
        default:
          break;
      }
    }
  }
})

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note)
  return (
    <div>
      <Card elevation={3} className={classes.cardBg}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}