import React from "react";
import { DataProps } from "types/DataProps";

import "./feed.css";

const Feed = (props: { data: DataProps[] }) => {
    const { data } = props;

    const tail = data;

    return (
        <div className="feed">
            <ul>
                {tail.map((row: DataProps) => {
                    const { title, id } = row;

                    return (
                        <li key={id} title={title} data-testid={id}>
                            <a href="#">
                                <span className="chev">&gt;</span> {title}
                            </a>
                        </li>
                    );
                })}
            </ul>

            {data.length > 10 && (
                <h4 className="seemore">
                    <a href="#">See more &gt;</a>
                </h4>
            )}
        </div>
    );
};

export default Feed;
