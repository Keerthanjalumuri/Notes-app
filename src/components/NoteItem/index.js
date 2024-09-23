import {NoteListItem, Title, Notes} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, noteText} = noteDetails
  return (
    <NoteListItem>
      <Title>{title}</Title>
      <Notes>{noteText}</Notes>
    </NoteListItem>
  )
}

export default NoteItem
