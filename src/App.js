import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";

function App() {
  const [prod, setProd] = useState([]);

  const [data, setData] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const clickme = async () => {
    let data = await fetch("https://assessment-edvora.herokuapp.com/");
    let jsondat = await data.json();

    setData(jsondat);
  };
  const selectme = () => {
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    data.map((currentval, index) => {
      arr = [...arr, currentval.product_name];
      arr1 = [...arr1, currentval.address.state];
      arr2 = [...arr2, currentval.address.city];
    });
    const setprod = new Set(arr);
    const setstate = new Set(arr1);
    const setcity = new Set(arr2);
    // console.log(setprod.values());
    arr = [...setprod];
    arr1 = [...setstate];
    arr2 = [...setcity];
    setProd(arr);
    setCity(arr2);
    setState(arr1);
  };
  const fetchdata = (val) => {
    console.log("button selected");
    console.log(val);

    let arr = [];
    data.filter((currentval, index) => {
      if (currentval.product_name === val) {
        arr = [...arr, currentval];
      } else if (currentval.address.state === val) {
        arr = [...arr, currentval];
      } else if (currentval.address.city === val) {
        arr = [...arr, currentval];
      }
      setData(arr);
    });
  };
  useEffect(() => {
    clickme();
  }, []);
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2 my-4">
          <div className="container position-sticky ">
            <div className="row">
              <div className="col-12 m-2">
                <select
                  name="products"
                  id="product"
                  className="w-50"
                  onClick={selectme}
                  onChange={(e) => {
                    fetchdata(e.target.value);
                  }}
                >
                  <option className="fw-bold">select product..</option>
                  {prod.map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-12 m-2">
                <select
                  name="products"
                  id="product"
                  className="w-50"
                  onClick={selectme}
                  onChange={(e) => {
                    fetchdata(e.target.value);
                  }}
                >
                  <option className="fw-bold">select state</option>
                  {state.map((value, index) => {
                    return <option key={index}>{value}</option>;
                  })}
                </select>
              </div>
              <div className="col-12 m-2">
                <select
                  name="products"
                  id="product"
                  className="w-50"
                  onClick={selectme}
                  onChange={(e) => {
                    fetchdata(e.target.value);
                  }}
                >
                  <option className="fw-bold">select city</option>
                  {city.map((value, index) => {
                    return <option key={index}>{value}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="containermy-4 col-10 ">
          <div className="row">
            
          {data.map((currentval, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 my-3 ">
              <div class="col-3">
                <Card
                  img={currentval.image}
                  loc={currentval.address.state}
                  city={currentval.address.city}
                  date={() => {
                    let date1 = new Date(currentval.date);
                    console.log(date1);
                    return date1.toLocaleString();
                  }}
                  brdname={currentval.brand_name}
                  prdname={currentval.product_name}
                  desc={currentval.discription}
                  price={currentval.price}
                  key={index}
                />
              </div>
              </div>
            );
          })}
        
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
