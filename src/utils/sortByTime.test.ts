import sortByTime from "./sortByTime";
import generateData from "./generateData";
import { DataProps } from "../types/DataProps";

describe("sort array by time", () => {
    const data: DataProps[] = generateData(10);

    test("sort desc", () => {
        const sortedData = data.sort(sortByTime);

        for (let i = 0; i < sortedData.length - 1; i++) {
            expect(sortedData[i].timestamp.getTime()).toBeGreaterThanOrEqual(
                sortedData[i + 1].timestamp.getTime()
            );
        }
    });
});
