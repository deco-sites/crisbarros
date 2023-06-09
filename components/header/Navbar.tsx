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
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] w-full px-2 gap-2`}
      >
        <a
          href="/"
          class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={142} height={16} />
        </a>

        <div class="flex gap-1">
          <HeaderButton variant="cart" />
          <HeaderButton variant="menu" />
        </div>

      </div>

      {/* Desktop Version */}
      <div class={`hidden md:flex flex-row justify-between items-center w-full h-[${navbarHeight}] pl-2 pr-3`}>
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={142} height={16} />
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
