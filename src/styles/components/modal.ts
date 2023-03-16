import { styled } from "..";

export const BodyModal = styled("div", {
  background: "$gray800",
  border: "none",
  width: "480px",
  height: "100%",
  padding: "15px",
  overflow: "hidden",
});

export const ModalContainer = styled("div", {
  display: "flex",
  position: "absolute",
  zIndex: 2,
  overflow: "auto",
  width: "100%",
  height: "100%",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const HeaderModal = styled("header", {
  display: "flex",
  alignItems: "end",
  justifyContent: "flex-end",

  a: {
    padding: "24px",
    cursor: "pointer",
  },
});

export const Product = styled("div", {
  paddingLeft: 48,
  paddingRight: 48,

  h3: {
    fontWeight: "bold",
    color: "$gray100",
    fontSize: "$xl",
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

export const DetailsProduct = styled("div", {
  display: "flex",
  flexDirection: "Column",
  paddingLeft: "20px",

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

    paddingTop: 16,

    strong: {
      color: "$green500",
      cursor: "pointer",
      fontSize: 16,
      
      "&:hover": {
        color: "$green300",
        cursor: "pointer",
        
        transition: 'all 0.3s ease-in-out',
      }
    },
  },
});

export const BodyProduct = styled("div", {
  display: "flex",
  paddingTop: "2rem",
});

export const OverAll = styled("div", {
  position: 'absolute',
  bottom: '0.25rem',
  right: '0.25rem',
  padding: '3rem',

  display: 'flex',
  flexDirection: "column",

  a: {
    backgroundColor: "$green500",
    color: "$gray100",
    textDecoration: "none",
    padding: "20px 124px ",
    borderRadius: 8,
    marginTop: "50px",

    "&:hover": {
      backgroundColor: "$green300",
      
       transition: 'all 0.2s ease-in-out',
    }
  }

})

export const Values = styled("div", {
  marginTop: 8,
  display: "flex",
  justifyContent: "space-between",
  
  strong: {
    fontWeight: "bold",
    fontSize: "$xl"

  }

})

export const Quantities = styled("div", {
  
  display: "flex",
  justifyContent: "space-between",
  
  strong: {
    fontWeight: "bold",
    fontSize: "$xl"

  }

})
