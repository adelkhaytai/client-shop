import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import Message from "../../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mb-4 lg:block xl:block md:block">
      {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Slider
          {...settings}
          className="xl:w-[40rem]  lg:w-[30rem] md:w-[56rem] sm:w-[20rem] sm:block"
        >
          {products.map(
            ({
              image,
              _id,
              name,
              price,
              description,
              brand,
              createdAt,
              numReviews,
              rating,
              quantity,
              countInStock,
            }) => (
              <div key={_id}>
                <img
                  src={image}
                  alt={name}
                  className="w-[30-rem] rounded-lg object-cover h-[30rem]"
                />

                <div className="mt-4 flex justify-between">
                  <div className="one">
                    <h2>{name}</h2>
                    <p> $ {price}</p> <br /> <br />
                    <p className="w-[25rem] "style={{color:"gray"}} >
                      {description.substring(0, 170)} ...
                    </p>
                  </div>

                  <div className="flex justify-between w-[20rem]">
                    <div className="one">
                      <h6 className="flex items-center mb-10" style={{fontSize:"13px"}}>
                        <FaStore className="mr-2 text-black" /> Brand: {brand}
                      </h6>
                      <h6 className="flex items-center mb-10" style={{fontSize:"13px"}}>
                        <FaClock className="mr-2 text-black" /> Added:{" "}
                        {moment(createdAt).fromNow()}
                      </h6>
                      <h6 className="flex items-center mb-10" style={{fontSize:"13px"}}>
                        <FaStar className="mr-2 text-black" /> Reviews:
                        {numReviews}
                      </h6>
                    </div>

                    <div className="two">
                      <h6 className="flex items-center mb-10" style={{fontSize:"13px"}}>
                        <FaStar className="mr-2 text-black" /> Ratings:{" "}
                        {Math.round(rating)}
                      </h6>
                      <h6 className="flex items-center mb-10" style={{fontSize:"13px"}}>
                        <FaShoppingCart className="mr-2 text-black" /> Quantity:{" "}
                        {quantity}
                      </h6>
                      <h6 className="flex items-center mb-10" style={{fontSize:"13px"}}>
                        <FaBox className="mr-2 text-black" /> In Stock:{" "}
                        {countInStock}black
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      )}
    </div>
  );
};

export default ProductCarousel;
