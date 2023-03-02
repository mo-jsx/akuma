// MODULES
import React from 'react';
import sortByPopularity from "../../utils/sortByPopularity";
// TYPES 
import { DataProps } from 'types/DataProps';

// COMPONENTS
import Card from "../../components/Card/Card";

// FILES
import "./news.css";

const News = (props: { data: DataProps[]}) => {
  const { data } = props;

    //Sort by popularity
    const sortedData:DataProps[] = data.sort(sortByPopularity)

    const [head, ...tail] = sortedData;
  return (
    <div className="news">
        <Card data={head} />
        <div>Feed</div>
    </div>
  )
}

export default News