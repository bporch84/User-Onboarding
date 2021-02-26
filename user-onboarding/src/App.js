import './App.css';
import Form from "./components/Form"
import styled from "styled-components"

const StyledPage = styled.div`
h1 {
  margin: 15px 0;
  font-size: 100px;
  color: yellow;
  text-shadow: 10px 10px 5px red;
  transform: rotate(-10deg);
}
`

function App() {
  return (
    <StyledPage className="App">
      {/* <h1>X-MEN</h1> */}
      <Form />
    </StyledPage>
  );
}

export default App;
