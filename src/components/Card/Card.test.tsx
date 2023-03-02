import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { DataProps } from "../../types/DataProps";

describe("Card", () => {
    // let data: DataProps;
    const data = {
        id: 123,
        title: "Lorem ipsum dolor sit amet.",
        popularity: 0.1,
        timestamp: new Date(),
    };

    test("Card is rendering", () => {
        render(<Card data={data} />);
        expect(screen.getByText(data.title)).toBeInTheDocument();
    });
});

export {};
