import { faker } from "@faker-js/faker";
import { DataProps } from "../types/DataProps";

const generateData = (numElement: number) => {
    const data: DataProps[] = [];

    for (let i = 0; i <= numElement; i++) {
        const row: DataProps = {
            id: faker.datatype.number(),
            title: faker.lorem.lines(1),
            popularity: faker.datatype.float({
                min: 0,
                max: 1,
                precision: 0.01,
            }),
            timestamp: faker.datatype.datetime(),
        };

        data.push(row);
    }

    return data;
};

export default generateData;
