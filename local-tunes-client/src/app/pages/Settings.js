import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {HeaderContainer, LocalTunesContext, Player, Navigation} from '../components';
import * as Routes from '../routes';

const Settings = () => {
    const history = useHistory();
    const { removeCookie, setUid, uid } = useContext(LocalTunesContext)
    const [ allowUpload, setAllowUpload]= useState(false);
    const apiUrlRole = `${process.env.REACT_APP_URL}/wp-json/wp/v2/users/me`;
    // const apiUrlRoleAdd = `${process.env.REACT_APP_URL}/wp-json/wp/v2/users/${uid}`;
    const config = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('login')}`,
        },
    }
    const handleLogout = () => {
        console.log("logout");
        removeCookie("login", {
            path: "/"
          });
        history.push(Routes.LOGIN)
        window.location.reload();
    }

     useEffect(()=> {
        axios.get(
            apiUrlRole,
            config
        ).then((res) => {
            setUid(res.data.id);
            if (res.data.roles.includes("contributor")){
                setAllowUpload(true)
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[allowUpload]);
    
    const becomeArtist = () => {
        const data = {
            "roles": ["contributor", "subscriber"]
        }
        axios.post(
            apiUrlRole,
            data,
            config
        ).then((res)=>{
            setAllowUpload(true)
        })
    }
    return (
        <div>
            <HeaderContainer/>
            <Player/>

            <div className="o-settings">
                <div className="row m-settings">
                    {
                        allowUpload &&
                            <Link to={Routes.UPLOAD} className="col-12">
                                <span className="a-settingItem">Upload</span>
                            </Link>
                    }
                    {
                        !allowUpload &&
                        <div  className="col-12" onClick={becomeArtist}>
                            <span className="a-settingItem">Become artist</span>
                        </div>
                    }

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
            <Navigation/>

        </div>

    );
};

export default Settings;