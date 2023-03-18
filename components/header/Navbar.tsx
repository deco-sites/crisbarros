import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-end items-center h-[50px] border-b-1 border-default w-full px-2 gap-2`}
      >

        <HeaderButton variant="cart" />
        <HeaderButton variant="menu" />
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-default w-full h-[50px] pl-2 pr-3 shadow-md">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={126} height={16} />
          </a>
        </div>
        <div class="flex-none w-44 flex items-center justify-end">
          <HeaderButton variant="cart" />
          <HeaderButton variant="menu" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
