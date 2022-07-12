import './App.css';
import styled from 'styled-components';

import Header from './components/header/header';
import Add from './components/add/add'
import List from './components/list/list';
import Status from './components/status/status';


function App() {
  return (
    <DivBody>
      <Header/>
      <List/>
      <Add/>
      <Status/>
    </DivBody> 
  );
}

export default App;

const DivBody = styled.div`
height: 100vh;
min-width: 350px;
background: linear-gradient(45deg, #a6c7f3, #b3addf);
`
