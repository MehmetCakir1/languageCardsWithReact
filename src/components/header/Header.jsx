import reactLogo from '../assets/react.svg';
import './header.css';

const Header = () => {
  return (
    <div className="logo-container">
      <div>
        <img className="react-logo" src={reactLogo} alt="react-logo" />
      </div>
    </div>
  );
};

export default Header;
