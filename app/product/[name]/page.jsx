import React from "react";

const page = ({ params }) => {
  console.log(params);
  return <div>{params.id}</div>;
};

export default page;
