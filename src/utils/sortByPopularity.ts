import { DataProps } from "../types/DataProps";

const sortByPopularity = (a: DataProps, b: DataProps) => {
    const popA = a.popularity;
    const popB = b.popularity;

    if (popA < popB) {
        return 1;
    }
    if (popA > popB) {
        return -1;
    }

    return 0;
};

export default sortByPopularity;
