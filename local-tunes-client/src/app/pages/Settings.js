import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {HeaderContainer, Player} from '../components';
import * as Routes from '../routes';

const Settings = () => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.setItem( 'login', '' );

        history.push(Routes.LOGIN);
        window.location.reload();
    }
    return (
        <div>
            <HeaderContainer/>
            <Player/>

            <div className="o-settings">
                <div className="row m-settings">
                    <Link to={Routes.UPLOAD} className="col-12">
                        <span className="a-settingItem">Upload</span>
                    </Link>
                </div>
                
                <Link to={Routes.CHANGEPASS} className="row m-settings">
                    <div className="col-12">
                        <span className="a-settingItem">Change password</span>
                    </div>
                </Link>

                <div className="row m-settings" onClick={handleLogout}>
                    <div className="col-12">
                        <span className="a-settingItem">Logout</span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Settings;