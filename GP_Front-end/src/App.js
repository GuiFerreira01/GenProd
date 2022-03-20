import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import { Home } from './pages/dashboard/Home';
import { MaterialList } from './pages/dashboard/materialList';
import { ProdEdit } from './pages/dashboard/prodEdit';
import { DeleteMaterial } from './pages/dashboard/deleteMaterial';
import { DeleteProduct } from './pages/dashboard/deleteProduct';
import { AddProduct } from './pages/dashboard/AddProduct';
import { AddMaterial } from './pages/dashboard/AddMaterial';
import { MatEdit } from './pages/dashboard/MatEdit';
import Footer from './pages/dashboard/components/Footer';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/seeMaterials" component={MaterialList}/>
          <Route path="/saveproduct" component={AddProduct}/>
          <Route path="/savematerial" component={AddMaterial}/>
          <Route path="/editproduct/:id" component={ProdEdit}/>
          <Route path="/editmaterial/:id" component={MatEdit}/>
          <Route path="/deletematerial/:id" component={DeleteMaterial}/>
          <Route path="/deleteproduct/:id" component={DeleteProduct}/>
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
