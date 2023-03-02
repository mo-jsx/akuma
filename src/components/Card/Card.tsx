// MODULES
import React from 'react';

//TYPES
import { DataProps } from "types/DataProps";
import "./card.css";

const Card = (props: DataProps) => {
    const { title } = props;

  return (
    <div>{title}</div>
  )
}

export default Card