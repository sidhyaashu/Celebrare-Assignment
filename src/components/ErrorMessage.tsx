import type { Props } from "../types/type";

export default function ErrorMessage({ message }: Props) {
  return <div className="text-center text-red-500 py-10">{message}</div>;
}
