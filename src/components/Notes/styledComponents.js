import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 40px;
  gap: 20px;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-size: 32px;
  font-family: 'Bree Serif';
  margin-bottom: 30px;
`
export const FormContainer = styled.form`
  box-shadow: 0px 4px 14px #aab8c8;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  border-radius: 5px;
  width: 80%;
`
export const InputElement = styled.input`
  border: none;
  outline: none;
  color: #475569;
`

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  line-height: 1.5;
  color: #475569;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  padding: 8px;
  align-self: flex-end;
  color: #ffffff;
  border: none;
  cusor: pointer;
  width: 80px;
  margin-top: 20px;
  border-radius: 4px;
`
export const EmptyContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EmptyImage = styled.img`
  height: 150px;
`

export const EmptyViewHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 22px;
`

export const EmptyViewLine = styled.p`
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
`
export const NotesContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  width: 80%;
  padding: 0px;
`
