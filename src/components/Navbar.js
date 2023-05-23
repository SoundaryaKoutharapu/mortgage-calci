import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ color: 'yellowgreen' }}>
            Bank of React
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar 