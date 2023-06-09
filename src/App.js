import { useState } from 'react';
import Navbar from './components/Navbar';
import Result from './components/Result';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import { Container, Grid } from '@mui/material';

function App() {

  const [data, setData] = useState(
    {
      homeValue: 3000,
      downPayment: 3000,
      loanAmount: 3000,
      loanTerm: 3000
    }
  );





  return (
    <div className="App">
      <Navbar />
      <Container maxwidth='xl' sx={{ marginTop: 6 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
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
