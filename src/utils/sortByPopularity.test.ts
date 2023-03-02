import sortByPopularity from "./sortByPopularity";
import { DataProps } from "../types/DataProps";

describe("sort array by popularity", () => {
    const data: DataProps[] = [
        {
            id: 123,
            title: "Lorem ipsum dolor sit amet.",
            popularity: Math.random(),
            timestamp: new Date(),
        },
        {
            id: 234,
            title: "Lorem ipsum dolor sit amet.",
            popularity: Math.random(),
            timestamp: new Date(),
        },
        {
            id: 345,
            title: "Lorem ipsum dolor sit amet.",
            popularity: Math.random(),
            timestamp: new Date(),
        },
        {
            id: 456,
            title: "Lorem ipsum dolor sit amet.",
            popularity: Math.random(),
            timestamp: new Date(),
        },

    ]

    console.log(data);
    

    test("sort desc", () => {
        const sortedData = data.sort(sortByPopularity)

        for(let i = 0; i < sortedData.length - 1; i++) {
            expect(sortedData[i].popularity).toBeGreaterThanOrEqual(sortedData[i+1].popularity)
        }
    })
})