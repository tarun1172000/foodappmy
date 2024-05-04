import React, { useEffect, useState } from 'react'

import axios from "axios";
function Shop() {
    const [datas,setData]= useState([]);
    console.log("data",datas)
    useEffect(()=>{
         function fatchdata(){
            axios.get("http://localhost:5003/api/products").then((response)=>{
                console.log("response",response.data)
                setData(response.data);
            })
         }
         fatchdata();
    } ,[])
  return (
    <div>Shop</div>
  )
}

export default Shop