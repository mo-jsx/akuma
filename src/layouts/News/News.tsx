// MODULES
import React from 'react';

// TYPES 
import { DataProps } from 'types/DataProps';

// COMPONENTS
import Card from "../../components/Card/Card";

// FILES
import "./news.css";

const News = (props: { data: DataProps[]}) => {
  const { data } = props;

  const head = data[0]

  return (
    <div className="news">
        <Card data={head} />
        <div>Feed</div>
    </div>
  )
}

export default News