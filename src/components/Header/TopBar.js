import classNames from 'classnames';
import styles from './TopBar.module.css';

const leftNavigation = classNames({
    "nav-left": "foobar"
})

const Top_Bar = () => {
    return (
        <header>
            <nav>

                <div className={leftNavigation}>
                    <img src="images/market-logo.jpg" alt="logo.png" />

                    <ul>
                        <li>
                            <img src="images/market.png" alt="market.png" />
                            <a href="/catalog">Market</a>
                            
                        </li>

                        <li>
                            {/* Logged-in users */}
                            <div id="user">

                                <a href="/create">Create offer</a>
                                <a href="/logout">Logout</a>

                            </div>
                        </li>

                    </ul>

                </div>
                <div className='nav-right'>

                    <ul>
                        <li>

                            {/* Guest users */}
                            <div id="guest">
                                <a href="/login">Login</a>
                                <a href="/register">Register</a>

                            </div>

                        </li>
                    </ul>


                </div>

            </nav>
        </header>
    );
};

export default Top_Bar;