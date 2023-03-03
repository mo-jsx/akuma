import { render, screen } from "@testing-library/react";
import News from "./News";
import {generateData, sortByPopularity} from "../../utils/";
import { DataProps } from "types/DataProps";

describe("News", () => {
    const data: DataProps[] = generateData(30);

    test("News is rendering", () => {
        render(<News data={data}/>)
    });

    // expect(screen.get)
})
export {};
