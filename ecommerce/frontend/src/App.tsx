import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';
import { HomePage } from './pages/Home'; // Usando a HomePage real
import { LoginPage } from './pages/Login';

// Placeholders para as próximas telas
const Cart = () => <h1 style={{ padding: '120px 20px' }}>Meu Carrinho</h1>;
const Checkout = () => <h1 style={{ padding: '120px 20px' }}>Finalizar Compra</h1>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      
      <div className="App">
        {/* O Header fica fora das Routes para aparecer em todas as páginas */}
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;