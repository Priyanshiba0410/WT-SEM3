import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Loginandsingup from './Loginandsingup';
import Layout from './Layout';
import FeedbackForm from './components/FeedbackForm';
import Home from './componet22/Home';
import RoomBookingForm from './componet22/RoomBookingForm ';
import GetRoomData from './componet22/GetRoomData';
import Services from './componet22/Services';
import { AdminLayout } from './adminsidecomponents/AdminLayout';
import { Menu } from '@mui/icons-material';
import PostFood from './componet22/PostFood';
import GetFood from './componet22/GetFood';
import MainComponent from './adminsidecomponents/MainComponent';
import EmployeeForm from './adminsidecomponents/EmployeeForm';
import Emplist from './adminsidecomponents/Emplist';
import PostFood1 from './adminsidecomponents/PostFood1';
import GetFood1 from './adminsidecomponents/GetFood1';
import FeedbackComponent from './adminsidecomponents/FeedbackComponent';
import Dashboard from './adminsidecomponents/Dashboard';
import RoomList from './componet22/RoomList';
const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginandsingup/>}/>
        <Route path='/home' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/home/room' element={<RoomList/>}/>
          <Route path='/home/roomdata' element={<GetRoomData/>}/>
          <Route path='/home/services' element={<Services/>}/>
          <Route path='/home/food' element={<GetFood/>}></Route>
          <Route path='/home/postfood' element={<PostFood/>}></Route>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
                <Route index element={<Dashboard/>}/>
              <Route path='/admin/room' element={<MainComponent/>}/>
              <Route path='/admin/emp' element={<Emplist/>}/>
              <Route path='/admin/food' element={<PostFood1/>}/>
              <Route path='/admin/foodmenu' element={<GetFood1/>}/>
              <Route path='/admin/userfeedback' element={<FeedbackComponent/>}/>
              <Route path='/admin/addemp' element={<EmployeeForm/>}/>
          </Route>
        <Route path='/feedback' element={<FeedbackForm/>}/>
      </Routes>
      </BrowserRouter>
  
  );
};

export default App;
