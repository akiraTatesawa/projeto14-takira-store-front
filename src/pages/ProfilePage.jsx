import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import NavBar from "../components/NavBar";

import { UserContext } from "../contexts/UserContext";

import {
  ProfileMainContainer,
  ProfileOrderHistory,
  Username,
} from "../assets/styles/profilePageStyles";
import Order from "../components/OrderContainer";

export default function ProfilePage() {
  const { userDatas } = useContext(UserContext);
  const [userPurchases, setUserPurchases] = useState(null);

  const navigate = useNavigate();

  function handleGetPurchasesError(err) {
    const { status } = err.response;

    if (status === 401) {
      localStorage.removeItem("userDatas");
      return navigate("/");
    }
    if (status === 404) {
      return setUserPurchases(null);
    }
    return navigate("/home");
  }

  useEffect(() => {
    const { token } = userDatas;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = `${process.env.REACT_APP_API_BASE_URL}/purchases`;

    const promise = axios.get(URL, config);

    promise
      .then((res) => setUserPurchases(res.data))
      .catch(handleGetPurchasesError);
  }, []);

  function renderOrderHistory() {
    if (userPurchases) {
      const reversedPurchases = [...userPurchases].reverse();
      return reversedPurchases.map((purchase, index) => (
        <Order
          names={purchase.productsInfo}
          total={purchase.total}
          date={purchase.date}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        />
      ));
    }
    return <p>Você não possui pedidos</p>;
  }

  const orderHistory = renderOrderHistory();

  return (
    <>
      <NavBar />
      <ProfileMainContainer>
        <Avatar
          sx={{
            bgcolor: "#64849E",
            width: "2em",
            height: "2em",
            fontSize: "3em",
          }}
        >
          {userDatas.name.charAt(0)}
        </Avatar>

        <Username>{userDatas.name}</Username>

        <ProfileOrderHistory>
          <h2>Meus pedidos</h2>
          {orderHistory}
        </ProfileOrderHistory>
      </ProfileMainContainer>
    </>
  );
}
