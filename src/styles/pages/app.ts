import { styled } from "..";


export const Container = styled('div', {
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'flex-start',
 justifyContent: 'center',
 minHeight: '100vh',
})

export const Header = styled('header' , {
 padding: '2rem 0',
 width: '100%',
 maxWidth: 1180,
 margin: '0 auto',
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",

 button: {
  padding: 12,
  borderRadius: 12,
  backgroundColor: "$gray800",

  '&:hover': {
   cursor: "pointer",
   transition: 'all 0.3s',
  }
 }
})


export const headerModal = styled('div', {
  
})