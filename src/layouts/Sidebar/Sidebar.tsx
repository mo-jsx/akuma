import React from 'react';
import { DataProps } from 'types/DataProps';
import sortByTime from "../../utils/sortByTime";
import "./sidebar.css";

const Sidebar = (props: { data: DataProps[]}) => {
        const { data } = props;
    
        data.sort(sortByTime)
    
      const tail = data.slice(0, 8)
    
        return (
            <aside className="sidebar">
            <h1>Hot news</h1>
                <ul>
                    {tail.map((d: DataProps) => {
                        return (
                            <li key={d.id}>
                                <a href="#">
                                    <time>
                                        {new Date(d.timestamp).getHours()}:
                                        {new Date(d.timestamp).getMinutes()} 
                                    </time>
    
                                    <p title={d.title}>
                                        {d.title}
                                    </p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
    
                {
            data.length > 10 &&
            <h4 className="seemore"><a href="#">See more &gt;</a></h4>
          }
            </aside>
        );
    };

export default Sidebar