import React, { useEffect } from "react";

const Api = () => {
  useEffect(async () => {
    const data = await fetch(
      "https://692d25d5e5f67cd80a4a4694.mockapi.io/api/v1/todo"
    );
    const jsonData = await data.json();
    console.log(jsonData);
  }, []);
  return <div>this is api class</div>;
};

export default Api;
