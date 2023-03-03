// MODULES
import React from "react";

// COMPONENTS
import {Card, Feed} from "../../components/";

// TYPES
import { DataProps } from "types/DataProps";

// HELPERS
import sortByPopularity from "../../utils/sortByPopularity";

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