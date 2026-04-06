import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { LoginPage } from './pages/Login';

function App() {
  return (
   <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      <div className="App">
        <LoginPage />
      </div>
    </ThemeProvider>
  );
}

export default App;