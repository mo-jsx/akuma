// MODULES
import React from 'react';

//TYPES
import { DataProps } from "types/DataProps";
import "./card.css";

const Card = (props: {data: DataProps}) => {
    const { data } = props;
    const { title } = data;

  return (
    <div data-testId="title">{title}</div>
  )
}

export default Card