import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyled } from './GlobalStyled';
import UserContext from './Context/UserContext';
import PageContext from './Context/PageContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <PageContext>
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </PageContext>
  </React.StrictMode>
);

