import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { notes } from './data/notes.data';


export default function App() {

  // Die App gibt das Grundgerüst der Anwendung vor
  // Hier werden wir später viele Informationen speichern und an Komponenten weitergeben

  return (
    <>
    <Header />
    <NotesList notes = {notes}/>

    </>
  )
}
