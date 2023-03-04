import React from "react";
import { render, screen } from "@testing-library/react";
import { DataProps } from "../../types/DataProps";
import generateData from "../../utils/generateData";
import Feed from "./Feed";

const data: DataProps[] = generateData(20);

describe("Feed", () => {
    test("Feed is rendering", () => {
        render(<Feed data={data} />);

        data.forEach((row) => {
            expect(screen.getByTestId(row.id)).toBeInTheDocument();
        });
    });
});
