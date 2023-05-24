import Navbar from  './components/Navbar';
import Result from './components/Result';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Container maxwidth='xl' sx={{mt: 6}}>
     <SliderSelect/>
     <TenureSelect/>
     <Result/>
     </Container>
    </div>
  );
}

export default App;
