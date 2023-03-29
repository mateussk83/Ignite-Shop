import { styled } from ".."



export const SuccessContainer = styled('main', {
 display: 'flex',
 flexDirection: "column",
 alignItems: "center",
 margin: '0 auto',
 height: 656,

 h1: {
  fontSize: '$2xl',
  color: '$gray100',
  paddingTop: '48px'
 },
 
 p: {
  fontSize: '$xl',
  color: '$gray300',
  maxWidth: 560,
  textAlign: 'center',
  marginTop: '2rem',
  lineHeight: 1.4
 },

 a: {
  display: 'block',
  marginTop: '5rem',
  fontSize: '$lg',
  color: '$green500',
  textDecoration: "none",
  fontWeight: 'bold',


  '&:hover': {
   color: '$green300'
  }
 }

})

export const ImageContainer = styled('div', {

 paddingTop: '5rem',

 img: {

  objectFit: 'cover',
  width: '100%',
  maxWidth: 130,
  height: 132,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 999,
  padding: '0.25rem',
 
  display: "inline",
  // "&:hover"
  '&:nth-child(n + 2)': {
   marginLeft: '-2rem',
   boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
 }


})