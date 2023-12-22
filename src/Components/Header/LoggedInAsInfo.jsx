import React from 'react';

function LoggedInAsInfo({userInfo}){
   return(
    <span className="logged-in-as">Tester: {userInfo}</span>
   )
};

export default LoggedInAsInfo;