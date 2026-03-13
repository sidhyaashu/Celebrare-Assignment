import type { Props } from "../types/type";

export default function ErrorMessage({ message }: Props) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-3 py-16 px-6 text-center"
    >
      <span className="text-5xl leading-none">⚠️</span>
      <div>
        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
          Failed to load photos
        </p>
        <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-2 font-mono dark:bg-red-900/20 dark:border-red-800">
          {message}
        </p>
      </div>
      <p className="text-sm text-gray-500">
        Check your internet connection and reload the page.
      </p>
    </div>
  );
}
