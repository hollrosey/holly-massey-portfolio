import "../globals.css";

export default function Navbar() {
  return (
    <ul className="navUl">
      <li className="navLi">
        <a className="navAtag" href="">Contact</a>
      </li>
      <li className="navLi">
        <a className="navAtag" href="">Projects</a>
      </li>
      <li className="navLi">
        <a className="navAtag" href="">About</a>
      </li>
      <li className="navLi">
        <a className="navAtag" href="">Home</a>
      </li>
    </ul>
  );
}
