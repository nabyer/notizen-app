import NotesCard from "./Card";
import { Note } from "../types/notes.type";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
    notes: Note[]
}


function NotesList(props: Props){

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    {
                        props.notes.map(note => <NotesCard
                        id={note.id}
                        title={note.title}
                        categories={note.categories}
                        content={note.content} />)
                    }
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default NotesList;