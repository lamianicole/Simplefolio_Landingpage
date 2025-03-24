import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-left">
        <p>LN.</p>
      </div>
      <div className="anchors-right">
        <a href="#">projects</a>
        <a href="#">skills</a>
        <a href="#">contact</a>
        <a href="#">dark/light mode</a>
      </div>
    </nav>
  );
};

export default Header;
