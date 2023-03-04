import { DataProps } from "../types/DataProps";

const sortByLatest = (a: DataProps, b: DataProps) => {
    const timeA = a.timestamp;
    const timeB = b.timestamp;

    if (timeA < timeB) {
        return 1;
    }
    if (timeA > timeB) {
        return -1;
    }

    return 0;
};

export default sortByLatest;
