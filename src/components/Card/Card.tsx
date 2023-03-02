// MODULES
import React from 'react';

//TYPES
import { DataProps } from "types/DataProps";
import "./card.css";

const Card = (props: {data: DataProps}) => {
    const { data } = props;

  return (
    <div>{data.title}</div>
  )
}

export default Card