import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery, useSellerGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { useState } from "react";
import Slider from "../components/slider/Slider";

const Home = () => {
  const { keyword } = useParams();
  // const { data, isLoading, isError } = useGetProductsQuery({ keyword })
  const { data, isLoading, isError } = useGetProductsQuery({ keyword })
    return (
    <>
    <NavBar/>
      <Slider/>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="ml-[10rem] mt-[10rem] text-[3rem]">
               New Products
            </h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem]" >
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
             
            </div>
          </div>
        </>
      )}
      <Footer/>
    </>
  );
};

export default Home;
