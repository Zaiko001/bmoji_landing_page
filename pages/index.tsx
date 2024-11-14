import { useEffect, useState } from 'react';
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { CheckIcon } from "@/components/icons";
import OnClickLink from "@/components/onClickLink";
import FormattedSnippet from "@/components/FormattedSnippet";
import { Tooltip } from "@nextui-org/tooltip";
import { Progress } from "@nextui-org/progress";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { siteConfig } from "../config/site";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import DataFetcher from '@/components/DataFetcher';

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import LottieAnimation from "@/components/LottieAnimation";
import diamond from "@/animations/diamond_animation.json";
import green from "@/animations/common_animation.json";
import purple from "@/animations/rare_animation.json";
import yellow from "@/animations/unique_animation.json";
import { Code } from '@nextui-org/code';

export default function IndexPage() {
  const [balance, setBalance] = useState<string | null>(null); 
  const [holders, setHolders] = useState<number | null>(null);
  

  return (
      <DefaultLayout>
        <DataFetcher type="balance" onData={(data) => setBalance(data as string)} /> 
        <DataFetcher type="holders" onData={(data) => setHolders(data as number)} />
        <ScrollShadow hideScrollBar>
        <section className="flex flex-col md:flex-row gap-4">
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
              <Popover>
                <PopoverTrigger>
                <Button
                as={Link} 
                isExternal  
                color="primary" 
                radius="full" 
                className="w-fit min-h-[47.5px]"
                >
                  <span className="hidden lg:inline w-fit">Documentation</span>
                  <span className="lg:hidden w-fit">Docs</span>
                </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <span>Coming soon</span>
                </PopoverContent>
                </Popover>
                <div className="hidden md:flex">
                <Button 
                as={Link} 
                href={siteConfig.links.gaspump} 
                isExternal  
                showAnchorIcon color="danger" 
                radius="full" 
                className="w-fit min-h-[47.5px]">
                    <span className="hiddden md:hidden lg:inline">Buy $BMOJI NOW!</span>
                    <span className="hidden md:inline lg:hidden">Buy $BMOJI</span>
                </Button>
              </div>
              <FormattedSnippet content="EQAtSsa90p8_Zm0Lv6rgioI0vHOViIWCaHYe8buKwZEZIQog" />
            </div>
            <Progress
              label="Dedust.io progress..."
              color="success"
              aria-label="Dedust.io progress"
              value={balance}
              showValueLabel={true}
              className="mt-5"
            />
            <Code size='md' className='mt-5 w-fit' >About <span className='text-purple-500'>{holders} holders</span> trust <span className='text-blue-500'>$BMOJI</span></Code>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="hidden sm:hidden md:hidden lg:flex justify-center">
              <LottieAnimation animationData={diamond} width={500} height={500}></LottieAnimation>
            </div>
            <div className="hidden sm:hidden md:flex lg:hidden justify-center">
              <LottieAnimation animationData={diamond} width={350} height={350}></LottieAnimation>
            </div>
          </div>
        </section>
        <Divider className="mb-10" />
        <section className="sm:flex-col md:flex-row lg:flex items-center gap-3 pl-4">
          <div className="sm:flex md:hidden m-4">
          <Button 
                as={Link} 
                href={siteConfig.links.gaspump} 
                isExternal  
                showAnchorIcon color="danger" 
                radius="full" 
                className="w-fit">
                    Buy $BMOJI NOW!
                </Button>
          </div>
          <div className="m-4">
          <Button as={Link} 
                href={siteConfig.links.chat} 
                isExternal  
                showAnchorIcon color="primary" 
                radius="full" 
                className="w-fit">
              <span className="hidden md:inline">Join to the Community of Bmojers!</span>
              <span className="sm:inline md:hidden">Join to the Community!</span>
          </Button>
          </div>
          </section>
        </ScrollShadow>
      </DefaultLayout>
  );
}

