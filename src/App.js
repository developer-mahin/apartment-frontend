import { Box } from '@mui/material';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {
  return (
    <Box className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </Box>
  );
}

export default App;
