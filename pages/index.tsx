import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { CheckIcon } from "../components/icons";
import OnClickLink from "../components/onClickLink";
import FormattedSnippet from "@/components/FormattedSnippet";
import { Tooltip } from "@nextui-org/tooltip";
import { Progress } from "@nextui-org/progress";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { siteConfig } from "../config/site";
import { Image } from "@nextui-org/image";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

// Animation
import LottieAnimation from "@/components/LottieAnimation";
import diamond from "../animations/diamond.json";
import green from "../animations/common_animation.json";
import purple from "../animations/rare_animation.json";
import yellow from "../animations/unique_animation.json";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col md:flex-row gap-4 py-8 md:py-8">
        <div className="md:w-1/2 flex flex-col gap-4 p-8">
          <div>
            <div className={title()}>Dive into the vibrant&nbsp;</div>
            <br />
            <div className={`${title({ color: "blue" })} block text-center`}>
              BMOJI World,&nbsp;
            </div>
            <br />
            <span className={title()}>unlock the power of emojis</span>
            <div className={subtitle({ class: "mt-4" })}>
              and collect &nbsp;
              <Popover placement="top" color="success">
                <PopoverTrigger>
                  <span
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // Trigger Popover
                      }
                    }}
                    className="border-b-2 border-green-500 text-green-500 hover:cursor-pointer"
                  >
                    common
                  </span>
                </PopoverTrigger>
                <PopoverContent>
                  <LottieAnimation
                    animationData={green}
                    width={50}
                    height={50}
                  ></LottieAnimation>
                </PopoverContent>
              </Popover>
              , &nbsp;
              <Popover placement="top" color="secondary">
                <PopoverTrigger>
                  <span
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // Trigger Popover
                      }
                    }}
                    className="border-b-2 border-purple-500 text-purple-500 hover:cursor-pointer"
                  >
                    rare
                  </span>
                </PopoverTrigger>
                <PopoverContent>
                  <LottieAnimation
                    animationData={purple}
                    width={50}
                    height={50}
                  ></LottieAnimation>
                </PopoverContent>
              </Popover>
              , and &nbsp;
              <Popover placement="top" color="warning">
                <PopoverTrigger>
                  <span
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // Trigger Popover
                      }
                    }}
                    className="border-b-2 border-yellow-500 text-yellow-500 hover:cursor-pointer"
                  >
                    unique avatars
                  </span>
                </PopoverTrigger>
                <PopoverContent>
                  <LottieAnimation
                    animationData={yellow}
                    width={50}
                    height={50}
                  ></LottieAnimation>
                </PopoverContent>
              </Popover>
              &nbsp; playing mini-games directly on{" "}
              <OnClickLink url={siteConfig.links.miniapp}>
                Telegram
              </OnClickLink>
              .
            </div>
          </div>
          <Divider className="my-1" />
          <div className="flex gap-3">
            <Chip color="success" variant="bordered" endContent={<CheckIcon />}>
              Community Driven
            </Chip>
            <Chip color="success" variant="bordered" endContent={<CheckIcon />}>
              Decentralized
            </Chip>
            <div className="hidden sm:inline-block md:inline-block">
              <Chip
                color="success"
                variant="bordered"
                endContent={<CheckIcon />}
              >
                Transparency
              </Chip>
            </div>
          </div>
          <Divider className="my-1" />
          <div className="flex gap-3 mt-4">
            <Tooltip content="Coming soon" placement="bottom" closeDelay={0} offset={10}>
              <Link
                isExternal
                className={`${buttonStyles({
                  color: "primary",
                  radius: "full",
                })} min-h-[47.5px]`}
              >
                <span className="hidden md:inline">Documentation</span>
                <span className="md:hidden">Docs</span>
              </Link>
            </Tooltip>
            <FormattedSnippet content="EQAtSsa90p8_Zm0Lv6rgioI0vHOViIWCaHYe8buKwZEZIQog" />
          </div>
          <Progress
            label="Dedust.io progress..."
            color="success"
            aria-label="Dedust.io progress"
            value={78}
            showValueLabel={true}
            className="mt-5"
          />
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="hidden sm:hidden md:flex justify-center">
            <LottieAnimation animationData={diamond}></LottieAnimation>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
