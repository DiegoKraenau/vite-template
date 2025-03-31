export interface RequestError<T> {
  status: number;
  code: string;
  message: T;
  title: string;
}
