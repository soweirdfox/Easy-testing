import React from 'react'
import SecondaryRoutes from '../../Components/SecondaryRoute/SecondaryRoutes'
import { Outlet } from 'react-router'

function SmokeTestPage() {
  return (
    <div>
      <SecondaryRoutes/>
      <Outlet />
    </div>
    
  )
};

export default SmokeTestPage;
