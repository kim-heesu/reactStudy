// const Button = (props) => {
//   return (
//     <button style={{color:props.color}}>
//       {props.text} - {props.color}
//     </button>
//   )
// }

const Button = ({text,color,children})=> {
  const onClickButton = (e) => {
    console.log(e)
  }
  return (
    <button 
    onClick={onClickButton}
    style={{color: color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}


Button.defaultProps = {
  color:"black",
  text:"Button",
  children: <span>안녕</span>
}


export default Button;


