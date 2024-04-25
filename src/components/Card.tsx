import Card from "react-bootstrap/Card";

export default function NotesCard() {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Unsere Überschrift</Card.Title>
        <Card.Text>
          Das ist unser Fließtext. Hier kommt der Inhalt unserer Notiz rein.
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">#Thema</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}