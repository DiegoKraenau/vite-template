export class CustomError extends Error {
  status: number;

  title: string;

  message: string;

  constructor({ status, title, message }: { status: number; title: string; message: string }) {
    super(`Error ${status}`);
    this.status = status;
    this.title = title;
    this.message = message;
  }
}
