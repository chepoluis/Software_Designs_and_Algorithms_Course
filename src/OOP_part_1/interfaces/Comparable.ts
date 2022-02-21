export interface Comparable<T> {
    id: number;
    value: number;
    name: string;
    weight: number;

    use(): void;
    compareTo(other: T): number;
    toString(): string;
}
