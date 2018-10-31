import React, {Component} from 'react';

class NavTop extends Component{
    render(){
        return (
            <div className="top_nav">
                <div className="nav_menu">
                <nav>
                    <ul className="nav navbar-nav navbar-right">
                    <li className="">
                        <a href="javascript:;" className="user-profile" data-toggle="dropdown" aria-expanded="false">
                        <span className="flag-icon flag-icon-us flag-icon-squared"></span>
                        </a>
                    </li>
                    <li className="">
                        <a href="javascript:;" className="user-profile" data-toggle="dropdown" aria-expanded="false">
                        <span className="flag-icon flag-icon-br flag-icon-squared"></span>
                        </a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
        )
    }
}

export default NavTop;