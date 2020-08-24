import React from 'react';
import { Redirect } from 'react-router-dom';

const Redirector = ({ location }) => {
    
    const {pathname, hash} = location;
    const urlToBeRedirected = pathname.indexOf("dl/") > -1 ? pathname.replace("/dl/", "/") : pathname;
    
    return (
        <Redirect
            to={{
              pathname: urlToBeRedirected,
              state: { hash }
            }}
          />
    );
};

export default Redirector;