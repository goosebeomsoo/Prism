import {useState} from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/icon/logo.svg';

const Header = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const lists = [
        { 
            link : "/work", 
            name : "WORK"
        },
        { 
            link : "/client", 
            name : "CLIENT"
        },
        { 
            link : "/process", 
            name : "PROCESS"
        },
        { 
            link : "/contact", 
            name : "CONTACT"
        }
    ]

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    }

    const tabLists = lists.map((list, index) => 
        <Link to={list.link} key={list.name}>
            <li
                className= {currentTab === index ? "tab  tab-selected" : "tab"}
                onClick={()=> selectMenuHandler(index)}
            >{list.name}
            </li>
        </Link>
    );

    return (
        <header className="header">
            <div className="header-container container">
                <div className="header-logo-content">
                    <Link to="/">
                        <img src={logo} alt="brand logo"/>
                    </Link>
                </div>
                <ul>
                    {tabLists}
                </ul>
            </div>
        </header>
    )
}

export default Header;