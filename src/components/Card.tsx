import Card from "react-bootstrap/Card";

type Props = {
  title: string,
  content: string,
  categories: string[]
}

export default function NotesCard(props: Props) {

  const categories = props.categories.map(c => '#' + c).join(' ')

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{
          categories
        }</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}