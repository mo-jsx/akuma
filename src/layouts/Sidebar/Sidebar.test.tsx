import { render, screen } from "@testing-library/react";
import { DataProps } from "types/DataProps";
import generateData from "../../utils/generateData";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
    const data: DataProps[] = generateData(20);

    test("Sidebar is rendering", () => {
        render(<Sidebar data={data} />);

        data.forEach((item) =>
            expect(screen.getByText(item.title)).toBeInTheDocument()
        );
    });
});
