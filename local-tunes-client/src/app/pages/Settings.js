import React from 'react';
import {HeaderContainer, Player} from '../components';


const Settings = () => {

    return (
        <div>
            <HeaderContainer/>
            <Player/>

            <div className="o-settings">
                <div className="row m-settings">
                    <div className="col-12">
                        <span className="a-settingItem">Upload</span>
                    </div>
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