import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import style from '../styles/ashea.module.css'
import { Link, useParams } from 'react-router-dom';
const Ashea = () => {
    const {id}=useParams()
    const[ashea,setAshea]=useState([])
    useEffect(()=>{
axios.get(`https://localhost:7189/api/visitRadiology/${id}`)
.then((res) => {
    setAshea(res.data);
    
  })
  .catch((err) => console.log(err));
    },[])
    return (
        <div className={`${style.ashea}`}>
        <table class="table table-striped table-hover" style={{direction:"ltr",minWidth:"600px"}}>
<thead>
<tr className='text-center'>
    <th>#</th>
    <th>name</th>
    <th>Date</th>
    <th>Time</th>
    <th>Result</th>
</tr>
</thead>
<tbody>
{ashea&&Array.isArray(ashea)&&ashea.map((el,index)=>{
    return(
        <tr key={index} className='text-center'>
            <td>{index +1}</td>
            <td>{el.name}</td>
            <td>{el.date}</td>
            <td>{el.time}</td>
            
            <td><Link to={el.xray}>result</Link></td>
        </tr>
    )
})}
</tbody>
</table>
    </div>
    );
};

export default Ashea;