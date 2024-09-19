import React, { useEffect, useRef, useState } from 'react';
import MotionWrapper from './MotionWrapper';
import { cn } from '../utils/cn';

function Navigation() {
    const ref = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({
        offsetTop: 0,
        offsetLeft: 0,
        clientWidth: 0,
        clientHeight: 0,
    });

    useEffect(() => {
        if (ref.current) {
            const { offsetTop, offsetLeft, clientWidth, clientHeight } =
                ref.current;
            setDimensions({ offsetTop, offsetLeft, clientWidth, clientHeight });
        }
    }, [ref]);

    const animation = {
        initial: {
            top: '50%',
            left: '50%',
            width: '0px',
            height: '0px',
            transform: 'translate(-50%, -50%) scale(0)',
        },
        animate: {
            top: dimensions.offsetTop + dimensions.clientHeight / 2,
            left: dimensions.offsetLeft + dimensions.clientWidth / 2,
            width: `${dimensions.clientWidth}px`,
            height: `${dimensions.clientHeight}px`,
            transform: 'translate(-50%, -50%) scale(1)',
        },
        transition: {
            top: { delay: 1.4, duration: 0.2 },
            left: { delay: 1.4, duration: 0.2 },
            transform: { delay: 1.4, duration: 0.4 },
            opacity: { delay: 1.2 },
        },
    };

    return (
        <>
            <MotionWrapper
                className={cn('col-span-12 row-span-1')}
                asRef={true}
                ref={ref}
            >
                Navigation
            </MotionWrapper>
            <MotionWrapper className={`z-40 bg-red-200`} animation={animation}>
                Navigation
            </MotionWrapper>
        </>
    );
}

export default Navigation;
