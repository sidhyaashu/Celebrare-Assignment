export default function Loader() {
  return (
    <div
      role="status"
      aria-label="Loading photos"
      className="flex flex-col items-center justify-center gap-3.5 py-20 px-5"
    >
      <div className="w-10 h-10 rounded-full border-[3px] border-gray-200 border-t-violet-500 animate-spin" />
      <p className="text-sm text-gray-500">Loading photos…</p>
    </div>
  );
}