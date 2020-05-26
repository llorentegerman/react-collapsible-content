import React, { useEffect, useRef, useState } from 'react';

export default function Countdown({ delay }) {
    const [counter, setCounter] = useState(delay / 1000);
    const intervalRef = useRef();

    useEffect(() => {
        let mounted = true;
        const endDate = new Date().getTime() + delay;
        intervalRef.current = setInterval(() => {
            let diff =
                (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
            diff = Math.floor(diff);

            if (diff <= 0) {
                clearInterval(intervalRef.current);
            }

            setCounter(diff);
        }, 1000);

        setTimeout(() => {
            if (!mounted) {
                return;
            }
            clearInterval(intervalRef.current);
        }, delay);
        return () => {
            mounted = false;
            clearInterval(intervalRef.current);
        };
    }, [delay]);

    return <span>{counter}</span>;
}
