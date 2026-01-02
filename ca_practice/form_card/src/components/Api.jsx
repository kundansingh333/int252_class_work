import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Api = () => {
  // const [fetchData, setFetchData] = useState();
  // const [data, setData] = useState([]);
  // fetch("https://692d25d5e5f67cd80a4a4694.mockapi.io/api/v1/todo").then((d) => {
  //   d.json().then((dd) => setFetchData(dd));
  // });

  // console.log(fetchData);

  // useEffect(async () => {
  //   const data = await fetch(
  //     "https://692d25d5e5f67cd80a4a4694.mockapi.io/api/v1/todo"
  //   ).then((d) => {
  //     d.json();
  //   });

  //   console.log(data);
  // }, []);
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios
      .get("https://692d25d5e5f67cd80a4a4694.mockapi.io/api/v1/todo")
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        return [];
      });
  }, []);

  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.password}</p>
            <p>{item.id}</p>
          </div>
        ))}
    </div>
  );
};

export default Api;
