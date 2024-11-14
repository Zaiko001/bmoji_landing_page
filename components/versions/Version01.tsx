import React from 'react';
import LottieAnimation from '../LottieAnimation';
import duck from "../../animations/duck_animation.json"
import { Code } from '@nextui-org/code';

const Version01: React.FC = () => (
  <div>
    <div className='sm:inline md:hidden mb-3 p-3 gap-3 text-center'>
        <div className='mb-3'>
        <Code size='sm'>Website launch. <br/>Beautiful, modern and colorful.</Code>
        </div>
    </div>
    <div className='hidden md:inline mb-3 p-3 gap-3 text-center'>
        <div className='mb-3'>
        <Code size='sm'>Website launch. Beautiful, modern and colorful.</Code>
    </div>
    </div>
    <div className="items-center justify-center">
        <div>
        <LottieAnimation animationData={duck} width={200} height={200}></LottieAnimation>
        </div>
        <div className='mt-5'>
        <p className='text-center text-yellow-500'>Initial release on Beta</p>
        </div>
    </div>
  </div>
);

export default Version01;
