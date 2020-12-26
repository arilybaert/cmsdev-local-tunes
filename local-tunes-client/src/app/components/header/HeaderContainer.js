import React, {useState, useEffect} from 'react';
import HomeContent from './HomeContent';
import SearchContent from './SearchContent';
import * as Routes from '../../routes';


const HeaderContainer = () => {

    // eslint-disable-next-line
    const [header, setHeader] = useState(window.location.pathname);

    useEffect(() => {
        console.log(header);
    }, [header]);
    return (
        <div>
            {header && header=== Routes.HOME ? <HomeContent/> : ''}
            {header && header=== Routes.SEARCH ? <SearchContent/> : ''}
        </div>
    )
}

export default HeaderContainer;