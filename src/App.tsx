import { Route, Routes } from 'react-router-dom';

import { Toaster } from '@/components/ui/toaster';
import AuthLayout from './_auth/AuthLayout';
import Signinform from './_auth/forms/SigninForm';
import Signupform from './_auth/forms/SignupForm';
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
      <Toaster />
  </main>
  )
}

export default App;