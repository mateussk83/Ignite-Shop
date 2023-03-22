import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog';


export const Overlay = styled(Dialog.Overlay, {
 position: "fixed",
 width: "100vw",
 height: "100vh",
 inset: 0,
 background: "rgba(0,0,0,0.75)",
})

export const Content = styled(Dialog.Content, {
 minHeight:"100vh",
 width: "500px",
 background: "$gray900",
 float:"right",
 
})

export const CloseButton = styled(Dialog.Close, {
 position: "absolute",
 background: "transparent",
 color: "$gray100",
 border: 0,
 top: "1.5rem",
 right: "1.5rem",
 lineHeight: 0,
 cursor: "pointer",
})

export const Title = styled(Dialog.Title, {
 paddingTop: '4.5rem',
 paddingLeft: '3rem'
})