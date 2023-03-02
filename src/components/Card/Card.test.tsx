import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { DataProps } from "../../types/DataProps";

describe("Card", () => {
    const data: DataProps = {
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
