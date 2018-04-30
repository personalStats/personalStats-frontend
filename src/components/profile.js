import React, {Component} from 'react';

class Profile extends Component{
    render(){
        return (
            <div class="profile clearfix">
                <div class="profile_pic">
                <img src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" class="img-circle profile_img" />
                </div>
                <div class="profile_info">
                <span>Welcome,</span>
                <h2>John Doe</h2>
                </div>
            </div>
        )
    }
}

export default Profile;