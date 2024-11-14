import React from 'react';
import { Code } from '@nextui-org/code';
import LottieAnimation from '../LottieAnimation';
import readmind from "@/animations/duck_purple_animation.json"

const Version02: React.FC = () => (
  <div>
    <div className='sm:inline md:hidden mb-3 p-3 gap-3 text-center'>
        <div className='mb-3'>
        <Code size='sm'>Now the website have the ability<br/>to read on-chain data directly <br/>from the blockchain. </Code>
        </div>
    </div>
    <div className='hidden md:inline mb-3 p-3 gap-3 text-center'>
        <div className='mb-3'>
        <Code size='sm'>Now the website have the ability to read <br/>on-chain data directly from the blockchain. </Code>
    </div>
    </div>
    <div className="items-center justify-center">
    <LottieAnimation animationData={readmind} width={200} height={200}></LottieAnimation>
        <div className='mt-5'>
        <p className='text-center text-purple-500'>Reading Minds Update.</p>
        </div>
    </div>
  </div>
);

export default Version02;
