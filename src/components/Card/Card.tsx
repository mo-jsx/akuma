// MODULES
import React from 'react';

//TYPES
import { DataProps } from "types/DataProps";
import "./card.css";

const Card = (props: {data: DataProps}) => {
    const { data } = props;
    const { title } = data;

  return (
    <div className="card" data-testid="title">
            <img src={"https://picsum.photos/id/12/2500/1667"} alt={"Hello there!"} />
            <div className="overlay"></div>
            <a href={"#"}>
                {
                    title.length > 30
                    ? <h1>{title.slice(0, 30)}... <span className="readmore">Read more</span></h1>
                    : <h1>{title}</h1>
                }
            </a>
    </div>
  )
}

export default Card