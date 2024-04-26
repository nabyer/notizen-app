import NotesCard from "./Card";
import { Note } from "../types/notes.type";
import { Container } from "react-bootstrap";

type Props = {
    notes: Note[]
}


function NotesList(props: Props){

    return (
        <>
            <Container>
            {
                props.notes.map(note => <NotesCard
                id={note.id}
                title={note.title}
                categories={note.categories}
                content={note.content} />)
            }
            </Container>
        </>
    )

}

export default NotesList;