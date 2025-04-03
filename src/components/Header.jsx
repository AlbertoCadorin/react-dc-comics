import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
    return <header>
        <div>
            <Logo />
        </div>
        <nav>
            <Menu />
        </nav>
    </header>
}

export default Header;