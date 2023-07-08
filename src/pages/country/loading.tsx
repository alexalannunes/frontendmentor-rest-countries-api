export function CountryLoading() {
  return (
    <div className="flex flex-col gap-20">
      <div className="mt-12 rounded-md h-12 bg-gray-200 dark:bg-palette-dark-paper w-32" />
      <div className="flex w-full flex-col gap-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-24">
          <div className="w-full h-52 bg-gray-200 dark:bg-palette-dark-paper rounded-lg lg:w-[540px]" />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              <div className="w-full h-6 bg-gray-200 dark:bg-palette-dark-paper rounded-lg" />
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="w-[80%] h-6 bg-gray-200 dark:bg-palette-dark-paper rounded-lg" />
                  <div className="w-[60%] h-6 bg-gray-200 dark:bg-palette-dark-paper rounded-lg" />
                  <div className="w-[40%] h-6 bg-gray-200 dark:bg-palette-dark-paper rounded-lg" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <div className="w-[80%] h-6 bg-gray-200 dark:bg-palette-dark-paper rounded-lg" />
                  <div className="w-[60%] h-6 bg-gray-200 dark:bg-palette-dark-paper rounded-lg" />
                  <div className="w-[40%] h-6 bg-gray-200 dark:bg-palette-dark-paper rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-[50%] h-6 bg-gray-200 dark:bg-palette-dark-paper rounded-lg" />
                <div className="flex items-center gap-4">
                  <div className="w-20 bg-gray-200 h-6 dark:bg-palette-dark-paper rounded-md" />
                  <div className="w-20 bg-gray-200 h-6 dark:bg-palette-dark-paper rounded-md" />
                  <div className="w-20 bg-gray-200 h-6 dark:bg-palette-dark-paper rounded-md" />
                  <div className="w-20 bg-gray-200 h-6 dark:bg-palette-dark-paper rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
