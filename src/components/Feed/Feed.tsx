import React from "react";
import { DataProps } from "types/DataProps";

import "./feed.css";

const Feed = (props: { data: DataProps[] }) => {
    const { data } = props;

    const tail = data;

    return (
        <div className="feed">
            <ul>
                {tail.map((d: DataProps) => {
                    const { title, id } = d;

                    return (
                        <li key={id} title={title} data-testid={id}>
                            {title.length > 30 ? (
                                <a href="#">
                                    <b>&gt;</b> {title.slice(0, 57)}...
                                </a>
                            ) : (
                                <a href="#">
                                    <b>&gt;</b> {title}
                                </a>
                            )}
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
