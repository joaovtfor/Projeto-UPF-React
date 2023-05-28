import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';
import logoc from '../Assets/IMAGEM/logoc.jpg';

const Navbar = () => {

  const {user} = useAuthValue();
  const {logout} = useAuthentication();

  return (
    <div className={styles.primary_header}>
      <nav className={styles.navbar}>
      <NavLink to="/"><img src={logoc} alt="logo" className={styles.logo}/></NavLink>
        <ul className={styles.nav_list}>
          <li><NavLink to="/" className={styles.nav_link}>Home</NavLink></li>
          <li><NavLink to="/about" className={styles.nav_link}>Sobre</NavLink></li>
          {user && (
            <>
              <li>
                <NavLink to="/dashboard" className={styles.nav_link}>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/posts/create" className={styles.nav_link}>Novo Post</NavLink>
              </li>
            </>
          )}
          {!user && (
          <>
            <li>
              <NavLink to="/login" className={styles.nav_link}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={styles.nav_link}>Cadastrar</NavLink>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={logout} className={styles.nav_link}>Sair</button>
          </li>
        )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
