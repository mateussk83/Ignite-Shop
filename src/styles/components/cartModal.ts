import { styled } from "..";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: 0,
  background: "rgba(0,0,0,0.75)",
});

export const Content = styled(Dialog.Content, {
  minHeight: "100vh",
  width: "500px",
  background: "$gray900",
  float: "right",
  padding: "0 3rem"
});

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  background: "transparent",
  color: "$gray100",
  border: 0,
  top: "1.5rem",
  right: "1.5rem",
  lineHeight: 0,
  cursor: "pointer",
});

export const Title = styled(Dialog.Title, {
  paddingTop: "4.5rem",
});

export const Product = styled("div", {
  display: "flex",
  paddingTop: "2rem",
  gap: "20px",
});

export const ContentProduct = styled("div", {
  display: "flex",
  flexDirection: "column",
  span: {
    fontSize: "$md",
    color: "$gray300",
  },
  strong: {
    paddingTop: 2,
    fontSize: "$md",
    color: "$gray100",
  },
  a: {
    textDecoration: "none",
    paddingTop: 16,
    color: "$green500",
    cursor: "pointer",
    fontSize: 16,

    "&:hover": {
        color: "$green300",
        cursor: "pointer",

        transition: "all 0.3s ease-in-out",
      },
  },
});

export const ImageProduct = styled("a", {
  display: "flex",
  width: "101px",
  height: "93px",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  border: "none",
  borderRadius: 8,
});

export const OverAll = styled('div', {
 paddingLeft: '1.85rem',
 position: 'absolute',
  bottom: '0.25rem',
  paddingBottom: "3rem",
  display: 'flex',
  flexDirection: "column",

  button: {
   backgroundColor: "$green500",
    color: "$gray100",
    textDecoration: "none",
    padding: "20px 124px ",
    borderRadius: 8,
    marginTop: "50px",

  }
})

export const Quantities = styled('div', {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "$md"
})

export const Values = styled('div', {
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 marginTop: 8,
 
 strong: {
   fontWeight: "bold",
   fontSize: "$xl"

 }
})