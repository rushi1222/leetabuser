import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopupPage from './pages/popup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a theme instance.
const theme = createTheme({
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <Routes>
          <Route path='/dashboard' element={<h1>Hello from dashboard</h1>} />
          <Route path='*' element={<PopupPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
