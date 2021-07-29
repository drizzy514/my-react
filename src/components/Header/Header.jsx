import "./Header.css";
const Header = () =>{
    return (
        <>
        <header className="header">
            <div className="container">


    <nav className="navigation ">
    <a href="#" className="main-link">Drizzy</a>
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#home" className="navigation__item-link">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a href="#about" className="navigation__item-link">
            About
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__item-link">
            Skills
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__item-link">
            Services
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__item-link">
            Work
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__item-link">
            Contact
          </a>
        </li>
      </ul>


      <input type="text" className="search-input"  placeholder="search.."/>
      <button type="button" className="search-btn">Search</button>
    </nav>



            </div>
  </header>
  </>
    )
}
export default Header;