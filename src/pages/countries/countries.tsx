import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { type ChangeEvent, useState } from "react";
import { FaChevronDown, FaDotCircle, FaSearch } from "react-icons/fa";

export function CountriesPage() {
  // default first region
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <div className="shadow-md rounded-md flex items-center px-4 h-12 bg-white w-96">
          <FaSearch className="text-gray-500" />
          <input
            className="h-full pl-3 outline-none w-full"
            placeholder="Search for a country"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="shadow-md rounded-md flex items-center px-4 h-12 bg-white w-56">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="bg-white flex items-center h-full justify-between outline-none w-full"
                aria-label="Filter by Region"
              >
                Filter by Region
                <FaChevronDown />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="w-56 bg-white rounded-md mt-1 p-[5px] shadow-md will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                sideOffset={5}
                defaultValue="new"
              >
                <DropdownMenu.RadioGroup
                  value={region}
                  onValueChange={setRegion}
                >
                  <DropdownMenu.RadioItem
                    className="hover:bg-slate-200 cursor-pointer leading-none rounded-[3px] flex items-center h-10 px-[2] relative pl-[25px] select-none outline-none"
                    value="new"
                  >
                    <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                      <FaDotCircle className="text-[13px] text-slate-500" />
                    </DropdownMenu.ItemIndicator>
                    <span className="ml-1">Colm Tuite</span>
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem
                    className="hover:bg-slate-200 cursor-pointer leading-none rounded-[3px] flex items-center h-10 px-[2] relative pl-[25px] select-none outline-none"
                    value="aaa"
                  >
                    <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                      <FaDotCircle className="text-[13px] text-slate-500" />
                    </DropdownMenu.ItemIndicator>
                    <span className="ml-1">Colm Tuite</span>
                  </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
}
