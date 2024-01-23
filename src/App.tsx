import { Route, Routes } from 'react-router-dom';

import AuthLayout from './_auth/AuthLayout';
import Signinform from './_auth/forms/Signinform';
import Signupform from './_auth/forms/Signupform';
import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages';
import './globals.css';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public route */}
            <Route element={<AuthLayout />}>
            <Route path='/sign-in'element={<Signinform />}/>
            <Route path='/sign-up'element={<Signupform />}/>
            </Route>


            {/* private route */}
            <Route element={<RootLayout />}>
          <Route index element={<Home />}/>
          
      </Route>
      </Routes>
  </main>
  )
}

export default App;