import Logo from "./Logo";
import Menu from "./Menu";

const MenuList = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Collectibles', 'Videos', 'Fans', 'News', 'Shop']

function Header() {
    return <header>
        <div className="container-header mg d-flex d-sb">
            <div>
                <Logo />
            </div>
            <nav>
                <Menu list={MenuList} />
            </nav>
        </div>

    </header>
}

export default Header;