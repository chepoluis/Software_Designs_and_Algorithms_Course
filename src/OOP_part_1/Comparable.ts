export interface Comparable<T> {
    id: number;
    value: number;
    name: string;
    weight: number;

    compareTo(other: T): number;
}
