import 'bootstrap/dist/css/bootstrap.min.css';
import { RootComponent } from './MainComponet/RootComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllEmp from './Component/AllEmp';
import AddEmp from './Component/AddEmp';
import { AllCom } from './Component/AllCom';
import AddCom from './Component/AddCom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RootComponent/>
      <Routes>
        <Route path="/AllEmp" element={<AllEmp/>}/>
        <Route path="/AddEmp" element={<AddEmp/>}/>
        <Route path="/AllCom" element={<AllCom/>}/>
        <Route path="/AddCom" element={<AddCom/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
