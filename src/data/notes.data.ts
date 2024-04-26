import { Note } from '../types/notes.type'


export const notes: Note[] = [
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