// import React from 'react';

import styled from "styled-components";
import { FaRegAddressCard } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import load from "../assets/load.gif"

const url = "https://jsonplaceholder.typicode.com";

const Info_Card = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getUsersInfo = async () => {
      try {
        const res = await axios.get(`${url}/users/${id}`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsersInfo();
  }, [id]);

  // Conditional Rendering for Loading State
  if (!data) {
    return <Image>
        <img src={load} alt="" style={{height:"350px"}}/>
    </Image>;
  }

  const initials =
    data.name.charAt(0) +
    (data.name.split(" ")[1] ? data.name.split(" ")[1].charAt(0) : "");

  return (
    <Container>
      <ProfileH>
        <Circle>{initials}</Circle>
        <Texts>
          <h4>{data.username}</h4>
          <h2>{data.name}</h2>
          <Small>
            <CiPhone size={19} />
            <p>{data.phone}</p>
          </Small>
        </Texts>
      </ProfileH>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vel?
        Nesciunt quasi quaerat inventore libero aut, recusandae architecto amet,
        veniam unde dolor omnis id obcaecati! Quisquam voluptates nisi optio
        culpa?
      </p>
      <Detailsbtn>
        <Add>
          <FaRegAddressCard size={22} />
          <p>{data.address.city}</p>
        </Add>
      </Detailsbtn>
    </Container>
  );
};

export default Info_Card;

// Styled Components
const Container = styled.div`
  border: 1px solid #dddddd;
  border-radius: 15px;
  padding: 24px;
`;

const ProfileH = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  width:100%;
  height:90vh;
  display:flex;
  align-items:center;
  justify-content:center
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`;

const Detailsbtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 120px;
    height: 40px;
    background: #8075f4;
    color: white;
    border: none;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
  }
`;

const Add = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Texts = styled.div`
  margin-left: 10px;

  h4 {
    margin: 0;
    font-size: 15px;
    font-weight: bold;
    color: #5f5f5f;
  }

  h2 {
    margin: 0;
  }
`;

const Small = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 30px;
  color: #8075f4;

  p {
    margin: 0;
  }
`;
