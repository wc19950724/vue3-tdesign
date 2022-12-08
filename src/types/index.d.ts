type WithIn<T, U> = T & U;

type GetType<T, K extends typeof T> = T[K]

interface ApiReturn<T> {
    code: number;
    message: string;
    data: Required<T>;
}
