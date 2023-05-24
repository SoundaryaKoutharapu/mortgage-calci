import Navbar from './components/Navbar';
import Result from './components/Result';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxwidth='xl' sx={{ marginTop: 6 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <SliderSelect />
            <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}

export default App;
