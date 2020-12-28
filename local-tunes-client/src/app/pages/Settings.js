import React from 'react';
import {Link} from 'react-router-dom';
import {HeaderContainer, Player} from '../components';
import * as Routes from '../routes';

const Settings = () => {

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
                
                <div className="row m-settings">
                    <div className="col-12">
                        <span className="a-settingItem">Change password</span>
                    </div>
                </div>

                <div className="row m-settings">
                    <div className="col-12">
                        <span className="a-settingItem">Logout</span>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Settings;