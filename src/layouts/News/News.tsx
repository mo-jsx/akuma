// MODULES
import React from "react";
import sortByPopularity from "../../utils/sortByPopularity";

// TYPES
import { DataProps } from "types/DataProps";

// COMPONENTS
import Card from "../../components/Card/Card";
import Feed from "../../components/Feed/Feed";

// FILES
import "./news.css";

const News = (props: { data: DataProps[] }) => {
    const { data } = props;

    //Sort by popularity
    const sortedData: DataProps[] = data.sort(sortByPopularity);

    const [head, ...tail] = sortedData;

    //Get today's date
    const today = new Date().toLocaleDateString();

    return (
        <div className="news">
            <h5 className="date">{today}</h5>
            <Card data={head} />
            <Feed data={tail} />
        </div>
    );
};

export default News;