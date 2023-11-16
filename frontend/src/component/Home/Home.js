import React, { Fragment, useEffect  } from "react";
/*react-icons/all module removed in 4.9.0*/
//import CgMouse from "react-icons/all";
import { CgMouse } from "react-icons/cg";
import "./Home.css"
import ProductCard from "./Product.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";

//2023.11.14 - Yu Kwan Wong:React-alert is not working and something wrong with react-alert-es6
//import { useAlert } from "react-alert-es6";
//import Product from "./Product.js"
import Header from "../layout/Header/Header.js";

// const product ={
//     name: "",
//     images: [{url: ""}],
//     price:"",
//     _id:"",

// };

const Home = () => {
    //related to react-alert-es6.
    //const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
      dispatch(getProduct());
    }, [dispatch, error /*related to react-alert-es6*/ /*, alert*/]);
  
    return (
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title="ECOMMERCE" />
            <Header />
            
  
            <div className="banner">
              <p>Welcome to Ecommerce</p>
              <h1>FIND AMAZING PRODUCTS BELOW</h1>
  
              <a href="#container">
                <button>
                  Scroll <CgMouse />
                </button>
              </a>
            </div>
  
            <h2 className="homeHeading">Featured Products</h2>
  
            <div className="container" id="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  };
  
  export default Home;