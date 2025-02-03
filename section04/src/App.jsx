import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button"

function App() {

  const buttonProps = {
      text:'메일',
      color: 'green',
      a: 1,
      b: 1,
      c: 1
  }
  return (


    <>
      <Button text={"메일"} color={"red"}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}/>
      <Button {...buttonProps}/>
      <Button />

      <Button text={"블로그"}>
        <div> 자식요소</div>
      </Button>

      {/* 컴포넌트의 자식요소는 자동으로 children으로 전달된다. */}
    </>
  )
}

export default App
