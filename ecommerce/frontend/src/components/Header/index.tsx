import { useNavigate, Link } from 'react-router-dom';
import * as S from './styles';
import logoPreta from '../../assets/karranka-curta.png';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.Logo 
          src={logoPreta} 
          alt="Karranka Logo" 
          onClick={() => navigate('/')} 
        />
        
        <S.Nav>
          <Link to="/">Home</Link>
          <Link to="/colecoes">Coleções</Link>
          <Link to="/streetwear">Streetwear</Link>
          <Link to="/sobre">Sobre</Link>
        </S.Nav>

        <S.IconsGroup>
          <button title="Pesquisar">
            <FiSearch />
          </button>
          <button title="Minha Conta" onClick={() => navigate('/login')}>
            <FiUser />
          </button>
          <button title="Carrinho" onClick={() => navigate('/cart')}>
            <FiShoppingCart />
          </button>
        </S.IconsGroup>
      </S.Content>
    </S.Container>
  );
};