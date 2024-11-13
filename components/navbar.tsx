import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {Tooltip} from "@nextui-org/tooltip";
import { siteConfig } from "../config/site";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
} from "@/components/icons";

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
          <Button radius="full" className="bg-gradient-to-tr from-red-500 to-yellow-500 text-white shadow-lg">
          Bmoji Hub
          </Button>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
        {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.label}>
              <NextLink href={item.href}>
              {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
        <Tooltip content="Coming soon"
          placement="bottom"
          closeDelay={0}
          offset={15}>
          <Link isExternal>
            <TwitterIcon className="text-default-500" />
          </Link>
          </Tooltip>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
      <TwitterIcon className="text-default-500" />
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
