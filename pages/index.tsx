import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import {Divider} from "@nextui-org/divider";
import {Chip} from "@nextui-org/chip";
import {CheckIcon} from "../components/icons";
import FormattedSnippet from "@/components/FormattedSnippet";
import {Tooltip} from "@nextui-org/tooltip";
import {Progress} from "@nextui-org/progress";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import LottieAnimation from "@/components/LottieAnimation";
import diamond from "../animations/diamond.json";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col md:flex-row gap-4 py-8 md:py-8">

        <div className="md:w-1/2 flex flex-col gap-4 p-8">
          <div>
            <div className={title()}>Dive into the vibrant&nbsp;</div>  
            <br/>
            <div className={`${title({ color: "blue" })} block text-center`}>BMOJI World,&nbsp;</div>
            <br/>
            <span className={title()}>unlock the power of emojis</span>
            <div className={subtitle({ class: "mt-4" })}>
              and collect <span className="text-green-500">common</span>, 
              <span className="text-purple-500"> rare</span>, 
              and <span className="text-yellow-500">unique avatars </span> 
              playing mini-games directly on <span className="text-blue-500">Telegram</span>.
            </div>
          </div>
          <Divider className="my-1" />
          <div className="flex gap-3">
              <Chip 
              color="success"
              variant="bordered"
              endContent={<CheckIcon/>}
              >Community Driven</Chip>
              <Chip 
              color="success"
              variant="bordered"
              endContent={<CheckIcon/>}
              >Decentralized</Chip>
              <Chip 
              color="success"
              variant="bordered"
              endContent={<CheckIcon/>}
              >Transparency</Chip>
          </div>
          <Divider className="my-1" />
          <div className="flex gap-3 mt-4">
          <Tooltip content="Coming soon"
          placement="bottom"
          closeDelay={0}
          offset={10}>
          <Link
              isExternal
              className={`${buttonStyles({
                color: "primary",
                radius: "full",
              })} min-h-[47.5px]`}
            >
            Documentation
            </Link>
            </Tooltip>
            <FormattedSnippet content="EQAtSsa90p8_Zm0Lv6rgioI0vHOViIWCaHYe8buKwZEZIQog" />
          </div>
          <Progress 
          label="Dedust.io progress..." 
          color="success" 
          aria-label="Dedust.io progress" 
          value={65}
          showValueLabel={true} 
          className="mt-5"/>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <LottieAnimation animationData={diamond}></LottieAnimation>
        </div>
      </section>
    </DefaultLayout>
  );
}
