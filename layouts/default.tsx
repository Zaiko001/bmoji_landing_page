import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

import { HeartFilledIcon } from "@/components/icons";

import { siteConfig } from "../config/site";

const footerMessage = "<> by @Z41K0 with";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href= {siteConfig.links.telegram_dev}
          title="bmoji.org homepage"
        >
          <span className="text-default-500">{footerMessage}</span>
          <p className="text-primary"><HeartFilledIcon className="text-danger"></HeartFilledIcon></p>
        </Link>
      </footer>
    </div>
  );
}
