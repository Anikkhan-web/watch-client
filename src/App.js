
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import SingleProduct from './pages/Home/Products/SingleProduct/SingleProduct';
import About from './pages/Home/About/About';
import Reviews from './pages/Home/Reviews/Reviews/Reviews';

import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './pages/../contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import PayLink from './pages/Dashboard/PayLink/PayLink';
import MyOrderAlls from './pages/Dashboard/MyOrders/MyOrdersAlls/MyOrderAlls';
import ReviewSite from './pages/Dashboard/ReviewSite/ReviewSite';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import AllProducts from './pages/Home/Products/AllProducts/AllProducts';

import ShowAllOrders from './pages/Dashboard/ShowOrder/ShowAllOrders/ShowAllOrders';


function App()
{
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Navigation></Navigation>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>

                        </Route>
                        <Route path="/products">
                            <AllProducts></AllProducts>

                        </Route>
                        <Route path="/allProducts">
                            <AllProducts></AllProducts>

                        </Route>

                        <PrivateRoute path="/product/:productId">
                            <SingleProduct></SingleProduct>

                        </PrivateRoute>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            < Register></Register>

                        </Route>
                        <Route path="/review">
                            <Reviews></Reviews>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard></Dashboard>
                        </Route>
                        <Route path="/paylink">
                            <PayLink></PayLink>
                        </Route>
                        <Route path="/orders">
                            <MyOrderAlls></MyOrderAlls>
                        </Route>
                        <Route path="/reviewSite">
                            <ReviewSite></ReviewSite>
                        </Route>
                        <Route path="/adminMake">
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path="/addProduct">
                            <AddProduct></AddProduct>
                        </Route>

                        <Route path="/showOrder">
                            <ShowAllOrders></ShowAllOrders>
                        </Route>






                    </Switch>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>

        </div >
    );
}

export default App;
