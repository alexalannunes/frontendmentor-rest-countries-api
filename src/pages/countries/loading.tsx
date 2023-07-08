export function CountriesLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <div
          key={item}
          className="h-[342px] animate-pulse rounded-lg bg-gray-200 dark:bg-palette-dark-paper flex flex-col overflow-hidden"
        >
          <div className="h-[50%] w-full bg-gray-300 dark:bg-gray-600" />
          <div className="p-4 flex flex-col gap-4 ">
            <div className="h-4 rounded-md w-full bg-gray-200 dark:bg-gray-600" />
            <div className="h-4 rounded-md w-[80%] bg-gray-200 dark:bg-gray-600" />
            <div className="h-4 rounded-md w-[40%] bg-gray-200 dark:bg-gray-600" />
          </div>
        </div>
      ))}
    </div>
  );
}
