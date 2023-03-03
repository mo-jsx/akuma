import sortByPopularity from "./sortByPopularity";
import { DataProps } from "../types/DataProps";
import {generateData} from "./";

describe("sort array by popularity", () => {
    const data: DataProps[] = generateData(10)

    test("sort desc", () => {
        const sortedData = data.sort(sortByPopularity)

        for(let i = 0; i < sortedData.length - 1; i++) {
            expect(sortedData[i].popularity).toBeGreaterThanOrEqual(sortedData[i+1].popularity)
        }
    })
})