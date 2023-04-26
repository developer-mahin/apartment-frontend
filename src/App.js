import { Box, CssBaseline } from '@mui/material';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Box className="App">
      <CssBaseline />
      <RouterProvider router={router}>
      </RouterProvider>
    </Box>
  );
}

export default App;
