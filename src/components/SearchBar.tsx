import type { SearchProps } from "../types/type";


export default function SearchBar({ value, onChange }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="Search by author..."
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border p-3 mb-6"
    />
  )
}