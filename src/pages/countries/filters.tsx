import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { type ChangeEvent } from "react";
import { FaChevronDown, FaDotCircle, FaSearch } from "react-icons/fa";

interface CountriesFiltersProps {
  onRegionChange: (region: string) => void;
  onSearch: (value: string) => void;
  region: string;
  regions: string[];
  search: string;
}
export function CountriesFilters({
  onRegionChange,
  onSearch,
  region,
  regions,
  search,
}: CountriesFiltersProps) {
  const onHandleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onSearch(ev.target.value);
  };
  return (
    <div className="flex flex-col justify-between items-center md:flex-row lg:flex-row gap-2 md:gap-2 lg:gap-0">
      <div className="shadow-md rounded-md flex items-center px-4 h-12 bg-palette-light-paper dark:bg-palette-dark-paper focus-within:ring-2 dark:focus-within:ring-1 focus-within:ring-slate-200 focus-within:ring-offset-1 md:w-96 lg:w-96 w-full">
        <FaSearch className="text-palette-light-input dark:text-palette-dark-input" />
        <input
          className="h-full pl-3 outline-none w-full placeholder:text-palette-light-input dark:placeholder:text-palette-dark-input bg-palette-light-paper dark:bg-palette-dark-paper text-palette-light-text dark:text-palette-dark-text"
          placeholder="Search for a country"
          value={search}
          onChange={onHandleChange}
        />
      </div>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="outline-none justify-between shadow-md rounded-md flex items-center px-4 h-12 bg-palette-light-paper dark:bg-palette-dark-paper focus-within:ring-2 dark:focus-within:ring-1 focus-within:ring-slate-200 focus-within:ring-offset-1 text-palette-light-text dark:text-palette-dark-text w-full md:w-52 lg:w-52"
            aria-label="Filter by Region"
          >
            Filter by Region
            <FaChevronDown />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="w-56 bg-palette-light-paper dark:bg-palette-dark-paper text-palette-light-text dark:text-palette-dark-text rounded-md mt-1 p-[5px] shadow-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
            defaultValue="new"
          >
            <DropdownMenu.RadioGroup
              value={region}
              onValueChange={onRegionChange}
            >
              <DropdownMenu.RadioItem
                className="hover:bg-slate-200 focus:bg-slate-200 dark:hover:bg-palette-dark-background dark:focus:bg-palette-dark-background cursor-pointer leading-none rounded-[3px] flex items-center h-10 px-[2] relative pl-[25px] select-none outline-none"
                value=""
              >
                <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <FaDotCircle className="text-[13px] text-palette-light-text dark:text-palette-dark-text" />
                </DropdownMenu.ItemIndicator>
                <span className="ml-1">None</span>
              </DropdownMenu.RadioItem>
              {regions.map((item) => (
                <DropdownMenu.RadioItem
                  key={item}
                  className="hover:bg-slate-200 focus:bg-slate-200 dark:hover:bg-palette-dark-background dark:focus:bg-palette-dark-background cursor-pointer leading-none rounded-[3px] flex items-center h-10 px-[2] relative pl-[25px] select-none outline-none"
                  value={item}
                >
                  <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                    <FaDotCircle className="text-[13px] text-palette-light-text dark:text-palette-dark-text" />
                  </DropdownMenu.ItemIndicator>
                  <span className="ml-1">{item}</span>
                </DropdownMenu.RadioItem>
              ))}
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
