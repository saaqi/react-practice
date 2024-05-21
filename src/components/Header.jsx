export default function Header(props) {
  const style = {
    fontWeight: "400",
    textTransform: 'uppercase',
    fontSize: '2rem'
  }

  return <h1 style={style}>{props.heading}</h1>;
}