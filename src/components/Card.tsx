// import React from 'react'

import styled from "styled-components";
import { FaRegAddressCard } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import load from "../assets/load.gif"


const url= "https://jsonplaceholder.typicode.com"


const Card = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
         const getusersInfo = async ()=>{
            try {
             const res =  await axios.get(`${url}/users`)
         
             console.log(res.data)
             setData(res.data)
            } catch (error) {
             console.log(error)
            }
         }

         getusersInfo()
    })

    if (data.length === 0) {
        return <Image>
        <img src={load} alt="" style={{height:"350px"}}/>
    </Image>;
      }
  return (
   <>
   {
    data?.map((props:any)=>(
        <Container id = {props.key}>
        <ProfileH>
            <Circle>{props.name.charAt(0)+ props.name.split(" ")[1].charAt(0)}</Circle>
            <Texts>
                <h4 style={{margin:0,fontSize:"15px",fontWeight:"bold",color:"#5F5F5F"}}>{props.username}</h4>
                <h2 style={{margin:0}}>{props.name}</h2>
                <Small>
                    <CiPhone size={19}/>
                    <p>{props.phone}</p>
                </Small>
            </Texts>
        </ProfileH>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vel? Nesciunt quasi quaerat inventore libero aut, recusandae architecto amet, veniam unde dolor omnis id obcaecati! Quisquam voluptates nisi optio culpa?</p>
        <Detailsbtn>
        <Add>
            <FaRegAddressCard size={22}/>
            <p>{props.address.city}</p>
        </Add>
        <Link to = {`/users/${props.id}`}>
        <button>View Details</button>
        </Link>
        </Detailsbtn>
    </Container>
    ))
   }
   </>
  )
}

export default Card;

const Container = styled.div`
    border:1px solid #dddddd;
    // background:gold;
    border-radius:15px;
    padding:24px
`
const ProfileH = styled.div`
   display:flex;
   align-items:center
`
const Circle = styled.div`
   width:50px;
   height:50px;
   background:red;
   border-radius:50%;
   display:flex;
   align-items:center;
   justify-content:center;
   color:white;
   font-size:20px
`
const Detailsbtn = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;

button{
    width:120px;
    height:40px;
    background:#8075F4;
    color:white;
    border:none;
    font-size:14px;
    font-weight:bold;
    border-radius:5px
}
`
const Add = styled.div`
display:flex;
align-items:center;
gap:10px
`
const Texts = styled.div`
/* background:red; */
margin-left:10px;
   h4{
    margin:0;
   }
   h2:{
    margin:0
   }
`

const Small = styled.div`
display:flex;
align-items:center;
/* justify-content:center; */
gap:15px;
height:30px;
color:#8075F4
`

const Image = styled.div`
  width:90vw;
  height:90vh;
  display:flex;
  align-items:center;
  justify-content:center;
  /* background:red */
`;