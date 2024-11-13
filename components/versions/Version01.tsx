import React from 'react';
import LottieAnimation from '../LottieAnimation';
import duck from "../../animations/duck_animation.json"
import { Code } from '@nextui-org/code';

const Version01: React.FC = () => (
  <div>
    <div className='mb-3 text-center'>
        <Code size='sm'>Website launch.</Code>
        <Code size='sm'>Beautiful, modern and colorful.</Code>
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
