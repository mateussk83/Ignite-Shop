import { styled } from "..";

export const Container = styled('div', {  
  width: '100%',
maxWidth: '1120px',
margin: '0 auto',
padding: '3rem 1.5rem',
})
export const HeaderContainer = styled("div", {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: "center",
});

export const OpenCartButton = styled("button", {
    border: 0,
    color: "$gray100",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "$gray800",
  
    '&:hover': {
     cursor: "pointer",
     transition: 'all 0.3s',
    },

    span: {
      color: "$gray100",
      padding: '0.25rem',
      position: "fixed",
      background: "$green500",
      borderRadius: 999,
      paddingLeft: "0.50rem",
      paddingRight: "0.50rem",
      marginTop: "-0.75rem"
    }

});

export const HeaderContainerSuccess = styled('div', {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "-4rem"
}) 