import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  Heading,
  FormContainer,
  InputElement,
  TextArea,
  AddButton,
  EmptyContainer,
  EmptyImage,
  EmptyViewHeading,
  EmptyViewLine,
  NotesContainer,
} from './styledComponents'


const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNoteText = event => {
    setNoteText(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      noteText,
    }
    setNotesList(prevNoteList => [...prevNoteList, newNotes])
    setTitle('')
    setNoteText('')
  }

  const renderEmptyView = () => {
    return (
      <EmptyContainer>
        <EmptyImage
          alt="notes empty"
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        />
        <EmptyViewHeading>No Notes Yet</EmptyViewHeading>
        <EmptyViewLine>Notes you add will appear here</EmptyViewLine>
      </EmptyContainer>
    )
  }

  const renderNotesView = () => {
    return (
      <NotesContainer>
        {notesList.map(eachNotes => (
          <NoteItem key={eachNotes.id} noteDetails={eachNotes} />
        ))}
      </NotesContainer>
    )
  }

  const isDisplay = notesList.length > 0

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onSubmitForm}>
        <InputElement
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <TextArea
          cols="50"
          rows="4"
          placeholder="Take a Note..."
          value={noteText}
          onChange={onChangeNoteText}
        ></TextArea>
        <AddButton type="submit">Add</AddButton>
      </FormContainer>
      {isDisplay ? renderNotesView() : renderEmptyView()}
    </AppContainer>
  )
}

export default Notes
