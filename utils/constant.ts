export const SALT_ROUNDS = 10

export interface ICategory {
    label: string;
    key: string;
}
export const categories: ICategory[] = [
    {
        label: "All",
        key: "all",
    },
    {
        label: "News",
        key: "news",
    },
    {
        label: "Life",
        key: "life",
    },
    {
        label: "Science and Technology",
        key: "technology",
    },
    {
        label: "Nature",
        key: "nature",
    },
    {
        label: "Lifestyle",
        key: "lifstyle",
    },
];