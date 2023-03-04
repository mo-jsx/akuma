import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import News from "./News";
import { generateData, sortByPopularity } from "../../utils/";
import { DataProps } from "types/DataProps";

describe("News", () => {
    const data: DataProps[] = generateData(30);

    test("News Image is rendering", () => {
        render(<News data={data} />);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });

    test("News Feed is rendering", () => {
        render(<News data={data} />);

        const rowItems = screen.getAllByRole("listitem");

        rowItems.forEach((row) => {
            expect(row).toBeInTheDocument();
        });

        const secondItem = screen.getByTestId(data[1].id);
        expect(secondItem.title).toMatch(data[1].title);
    });
});
export {};
