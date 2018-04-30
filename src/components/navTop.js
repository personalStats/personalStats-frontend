import React, {Component} from 'react';

class NavTop extends Component{
    render(){
        return (
            <div class="top_nav">
                <div class="nav_menu">
                <nav>
                    <ul class="nav navbar-nav navbar-right">
                    <li class="">
                        <a href="javascript:;" class="user-profile" data-toggle="dropdown" aria-expanded="false">
                        <span class="flag-icon flag-icon-us flag-icon-squared"></span>
                        </a>
                    </li>
                    <li class="">
                        <a href="javascript:;" class="user-profile" data-toggle="dropdown" aria-expanded="false">
                        <span class="flag-icon flag-icon-br flag-icon-squared"></span>
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