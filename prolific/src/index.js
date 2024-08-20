import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Form from './Components/Form';
import ThankYou from './Components/ThankYou';
import OnBoarding from './Components/OnBoarding';
import ContactUs from './Components/ContactUs';
import Dashboard from './Components/Dashboard';
import OptionInnerPage from './Components/OptionInnerPage';
import Downloadable from './Components/Downloadable';
import OptionInnerPage2 from './Components/OptionInnerPage2';
import DynamicScript from './Components/DynamicScript';
import Dashboard2 from './Components/Dashboard2';
import OptionInnerPageAs from './Components/OptionInnerPageAs';
import UserDashboard from './Components/UserDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
{/* <LendingPage/> */}


<BrowserRouter>
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/SignUp' element={<SignUp/>} />
<Route exact path='/SignIn' element={<SignIn/>} />
<Route exact path='/form' element={<Form/>} />
<Route exact path='/thank-you' element={<ThankYou/>} />
<Route exact path='/Boarding' element={<OnBoarding/>} />
<Route exact path='/ContactUs' element={<ContactUs/>} />
<Route exact path='/Dashboard' element={<Dashboard/>} />
<Route exact path='/OptionInnerPage/*' element={<OptionInnerPage/>} />
<Route exact path='/Downloadable*' element={<Downloadable/>} />
<Route exact path='/OptionInnerPage2/*' element={<OptionInnerPage2/>} />
{/* <Route exact path='/OptionInnerPage3/*' element={<OptionInnerPage3/>} /> */}
<Route exact path='/DynamicScript/*' element={<DynamicScript/>} />
<Route exact path='Dashboard2' element={<Dashboard2/>} />

<Route exact path='/OptionInnerPageAs/*' element={<OptionInnerPageAs/>} />
<Route exact path='/UserDashboard' element={<UserDashboard/>} />

</Routes>

</BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
