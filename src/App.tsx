// MODULES
import React, { useState, useEffect } from "react";
import * as Papa from "papaparse";

// TYPES
import { DataProps } from "./types/DataProps";

// LAYOUTS
import { News, Sidebar } from "./layouts/";

// FILES
import "./styles/app.css";

const App = () => {
    const [data, setData] = useState<DataProps[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/assets/newsSource.csv");

                Papa.parse(await response.text(), {
                    header: true,
                    dynamicTyping: true,
                    encoding: " ",
                    complete: (result) => {
                        const parsedData = result.data as DataProps[];
                        setData(parsedData);
                    },
                    error: (err: any) => {
                        console.log(err.name);
                        console.log(err.message);
                    },
                });
            } catch (err: any) {
                console.log("AN ERROR OCCURED : ", err.name);
                console.log(err.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="app">
            <News data={data} />
            <Sidebar data={data} />
        </div>
    );
};

export default App;
