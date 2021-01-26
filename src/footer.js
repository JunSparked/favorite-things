import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './CGH_logo-01.svg';

function Footer() {
  return (
      <footer class="mt-4">
          <a class="logo" href="mailto:hitzlerc1@mymail.nku.edu" target="_blank">
            <img src={logo} alt="" class="logo"/>
          </a>
      </footer>
  );
}
export default Footer;
