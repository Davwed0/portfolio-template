import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';
import { delay, motion } from 'framer-motion';

const avatarProps = cn(
    'flex items-center justify-center text-lg font-semibold',
    'rounded-3xl bg-secondary',
    'md:col-span-3 md:row-span-4',
    'sm:col-span-4 sm:row-span-4 sm:aspect-auto',
    'aspect-square min-h-36 overflow-hidden',
);

function Avatar() {
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

    const avatarAnimation = {
        initial: {
            width: '400px',
            height: '600px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        animate: {
            width: dimensions.clientWidth,
            height: dimensions.clientHeight,
            top: dimensions.offsetTop,
            left: dimensions.offsetLeft,
            transform: 'translate(0%, 0%)',
        },
        transition: {
            width: { duration: 0.4 },
            height: { duration: 0.4 },
            top: { delay: 0.2, duration: 0.2 },
            left: { delay: 0.2, duration: 0.2 },
            transform: { delay: 0.2, duration: 0.2 },
            opacity: { delay: 0.4 },
        },
    };

    return (
        <>
            <div ref={ref} className={`${avatarProps} opacity-0`} />

            <motion.div
                initial={avatarAnimation.initial}
                animate={avatarAnimation.animate}
                transition={avatarAnimation.transition}
                className={`${avatarProps} absolute z-10`}
            >
                Avatar2
            </motion.div>
        </>
    );
}

export default Avatar;
