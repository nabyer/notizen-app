import React from 'react';
import './App.css';
import Card from './components/Card';
import { title } from 'process';
import NotesCard from './components/Card';

export default function App() {

  // Die App gibt das Grundgerüst der Anwendung vor
  // Hier werden wir später viele Informationen speichern und an Komponenten weitergeben

  const notes: {
    title: string,
    content: string,
    categories: string[],
    id: number
  }[] = [
      {
        title: 'Überschrift 1',
        content: 'Das ist ein langer Text',
        categories: ['Büro', 'Haushalt'],
        id: 1
      }, {
        title: 'Überschrift 2',
        content: 'Das ist auch ein langer Text',
        categories: ['Büro'],
        id: 2
      }, {
        title: 'Überschrift 3',
        content: 'Das ist ein besonders langer Text',
        categories: ['Haushalt'],
        id: 3
      }, {
        title: 'Überschrift 4',
        content: 'Kurzer Text',
        categories: [],
        id: 4
      }
    ]

  return (
    <>
      {
        notes.map(note => <NotesCard
          key={note.id}
          title={note.title}
          categories={note.categories}
          content={note.content} />)
      }
    </>
  )
}
