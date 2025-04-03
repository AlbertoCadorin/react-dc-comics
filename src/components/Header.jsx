import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
    return <header>
        <div className="container-header mg">
            <div>
                <Logo />
            </div>
            <nav>
                <Menu />
            </nav>
        </div>

    </header>
}

export default Header;