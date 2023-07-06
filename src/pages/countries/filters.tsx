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
    <div className="flex justify-between items-center">
      <div className="shadow-md rounded-md flex items-center px-4 h-12 bg-white w-96 focus-within:ring-2 focus-within:ring-slate-200 focus-within:ring-offset-2">
        <FaSearch className="text-gray-500" />
        <input
          className="h-full pl-3 outline-none w-full"
          placeholder="Search for a country"
          value={search}
          onChange={onHandleChange}
        />
      </div>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="shadow-md rounded-md flex items-center h-12 bg-white w-56  px-4 justify-between outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label="Filter by Region"
          >
            Filter by Region
            <FaChevronDown />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="w-56 bg-white rounded-md mt-1 p-[5px] shadow-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
            defaultValue="new"
          >
            <DropdownMenu.RadioGroup
              value={region}
              onValueChange={onRegionChange}
            >
              <DropdownMenu.RadioItem
                className="hover:bg-slate-200 focus:bg-slate-200 cursor-pointer leading-none rounded-[3px] flex items-center h-10 px-[2] relative pl-[25px] select-none outline-none"
                value=""
              >
                <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <FaDotCircle className="text-[13px] text-slate-500" />
                </DropdownMenu.ItemIndicator>
                <span className="ml-1">None</span>
              </DropdownMenu.RadioItem>
              {regions.map((item) => (
                <DropdownMenu.RadioItem
                  key={item}
                  className="hover:bg-slate-200 focus:bg-slate-200 cursor-pointer leading-none rounded-[3px] flex items-center h-10 px-[2] relative pl-[25px] select-none outline-none"
                  value={item}
                >
                  <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                    <FaDotCircle className="text-[13px] text-slate-500" />
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
