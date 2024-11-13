import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { siteConfig } from "../config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
} from "@/components/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 ml-8 mr-8" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
          <Button radius="full" className="bg-gradient-to-tr from-red-500 to-yellow-500 text-white shadow-lg">
          Bmoji.org
          </Button>
          </NextLink>
        </NavbarBrand>
        <div className="sm:flex md:flex lg:flex gap-4 justify-start ml-2">
           <NavbarItem key={siteConfig.navItems[0].label} isActive className="hover:border-b-3 border-yellow-500">
              <NextLink href={siteConfig.navItems[0].href}>
              {siteConfig.navItems[0].label}
              </NextLink>
            </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
        <Popover>
          <PopoverTrigger>
          <Link isExternal>
            <TwitterIcon className="text-default-500" />
          </Link>
          </PopoverTrigger>
          <PopoverContent>
            <span>Coming soon</span>
          </PopoverContent>
        </Popover>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 mr-5" justify="end">
      <TwitterIcon className="text-default-500" />
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
