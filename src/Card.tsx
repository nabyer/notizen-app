


export default function Card() {

  const name: string = 'Lucas'
  let paragraph = <p>Das ist ein neuer Text</p>

  if (name === 'Lucas') {
    paragraph = <p>Marc hat den Durchblick</p>
  }

  return (
    <div>
      <p>Liebe Grüße von {name}</p>
      {paragraph}
    </div>
  )
}