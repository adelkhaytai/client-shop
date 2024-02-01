import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import AdminRoute from "./pages/Admin/AdminRoute";
import Profile from "./pages/User/Profile";
import UserList from "./pages/Admin/UserList";

import CategoryList from "./pages/Admin/CategoryList";

import ProductList from "./pages/Admin/ProductList";
import AllProducts from "./pages/Admin/AllProducts";
import ProductUpdate from "./pages/Admin/ProductUpdate";

import Home from "./pages/Home.jsx";
import Favorites from "./pages/Products/Favorites.jsx";
import ProductDetailsSeller from "./pages/Products/sellerProducts/ProductDetailsSeller.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";

import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";

import Shipping from "./pages/Orders/Shipping.jsx";
import PlaceOrder from "./pages/Orders/PlaceOrder.jsx";
import Order from "./pages/Orders/Order.jsx";
import OrderList from "./pages/Admin/OrderList.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import UserOrder from "./pages/User/UserOrder.jsx";
import SellerRoute from "./pages/Seller/SellerRoute.jsx";
import SellerDashboard from "./pages/Seller/SellerDashboard.jsx";
import SellerProductList from "./pages/Seller/SellerProductList.jsx";
import SellerAllProducts from "./pages/Seller/SellerAllProducts.jsx";
import SellerProductUpdate from "./pages/Seller/SellerProductUpdate.jsx";
import SellerOrderList from "./pages/Seller/SellerOrderList.jsx";
import SellerLogin from "./pages/Auth/seller auth/SellerLogin.jsx";
import SellerRegister from "./pages/Auth/seller auth/SellerRegister.jsx";
import PrivateRouteSeller from "./components/PrivateRouteSeller.jsx";
import SellerProfile from "./pages/User/SellerProfile.jsx";
// import OrderSeller from "./pages/Orders/OrderSeller.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route index={true} path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    
      <Route path="/shop" element={<Shop />} />
      <Route path="/SellerLogin" element={<SellerLogin />} />
      <Route path="/SellerRegister" element={<SellerRegister />} />
      {/* seller */}
      <Route path="seller/product/:id" element={<ProductDetailsSeller />} />
      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/user-orders" element={<UserOrder />} />
        <Route path="/order/:id" element={<Order />} />
      </Route>
        {/* Registered seller */}
      <Route path="/" element={<PrivateRouteSeller />}>
        <Route path="/sellerProfile" element={<SellerProfile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/user-orders" element={<UserOrder />} />
        {/* <Route path="/seller-order/:id" element={<OrderSeller />} /> */}
      </Route>
      {/* admin */}
      <Route path="/admin" element={<AdminRoute />}>
        <Route path="userlist" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="allproductslist" element={<AllProducts />} />
        <Route path="productlist/:pageNumber" element={<ProductList />} />
        <Route path="product/update/:_id" element={<ProductUpdate />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route> 
      {/* seller */}
      <Route path="/seller" element={<SellerRoute />}>
        {/* <Route path="userlist" element={< />} /> */}
        {/* <Route path="categorylist" element={<CategoryList />} /> */}
        <Route path="productlist" element={<SellerProductList />} />
        <Route path="allproductslist" element={<SellerAllProducts />} />
        <Route path="productlist/:pageNumber" element={<SellerProductList />} />
        <Route path="product/update/:_id" element={<SellerProductUpdate />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="dashboard" element={<SellerDashboard />} />
      </Route>
    
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PayPalScriptProvider>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>
);
