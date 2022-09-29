import { styled } from "../styles"
// bom diferente do styled component só precisamos colocar styled(da biblioteca styles nao do stitches)
// primeiro parametro -> tipo da tag
//estruturação igual js entao nomeclatura sem -_ só Maiusculo
const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}
