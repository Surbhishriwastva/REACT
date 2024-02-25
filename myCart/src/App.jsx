

import Footer from "./components/Footer"
import ProductList from "./components/ProductList"
import Title from "./components/Titlebar"
import React, { useState } from "react";
import Additems from "./components/Additem";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 10s Max",
      quantity: 0,

    },
    {
      price: 9999,
      name: "Redmi 10s Max",
      quantity: 0,

    }
  ]
  let [productList, setProductList] = useState(products)
  let [totalAmount, setTotalAmount] = useState(0);
  const incrementQunatity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }

  const decrementQunatity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price
    }
    setTotalAmount(newTotalAmount)
    setProductList(newProductList);
  }

  const resetQuantity = () => {
    let newProductList = [...productList];
    productList.map((products) => {
      products.quantity = 0
    })

    setProductList(newProductList);
    setTotalAmount(0)
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0
    })
    setProductList(newProductList);

  }

  return (
    <>


      <Title></Title>
      <Additems addItem={addItem}></Additems>
      <main className="container mt-5">
        <ProductList productList={productList}
          incrementQunatity={incrementQunatity}
          decrementQunatity={decrementQunatity}
          removeItem={removeItem}
        >

        </ProductList>

      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}></Footer>



    </>
  )
}

export default App
