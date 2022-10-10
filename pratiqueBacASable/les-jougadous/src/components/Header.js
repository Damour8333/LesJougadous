import '../styles/Header.css'
import logo from '../assets/logo.png'
function Header() {

    return <div className="ljHeader">
    <img src={logo} alt="logo" className="logo"/>
    <h1>Les jougadous</h1>
    </div>
}
export default Header