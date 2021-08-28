import React from "react";
import Parent from "../class/Parent";
import Product from "../class/Product";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
        
      {/* 
      
      <Blog
        tanggal="28 Agustus 2021"
        judul="Cara Menggunakan Props"
        summary="Seru banget euyy reactjs"
      />

      <Blog
        tanggal="28 Agustus 2021"
        judul="Cara Menggunakan Props"
        summary="Seru banget euyy reactjs"
      />

      <Blog
        tanggal="28 Agustus 2021"
        judul="Cara Menggunakan Props"
        summary="Seru banget euyy reactjs"
      />

      <Blog
        tanggal="28 Agustus 2021"
        judul="Cara Menggunakan Props"
        summary="Seru banget euyy reactjs"
      /> */}


      {/* <div>
        <Product nama="Macbook Pro 2020" stock="10" harga="30.000.000"/>
        <Product nama="Macbook Pro 2020" stock="120" harga="50.000.000"/>
        <Product nama="Macbook Pro 2020" stock="1210" harga="60.000.000"/>
        <Product nama="Macbook Pro 2020" stock="3310" harga="70.000.000"/>
        <Product nama="Macbook Pro 2020" stock="2210" harga="90.000.000"/>
      </div> */}

      <Parent/>
    </div>
  );
};

export default Home;
