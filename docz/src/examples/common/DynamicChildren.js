import React, { useEffect, useState } from 'react';

const getArray = (count) => new Array(count).fill().map((_, i) => i + 1);

export default function DynamicChildren({ delay = 2000, init = 3, end = 5 }) {
    const [array, setArray] = useState(getArray(init));

    useEffect(() => {
        let mounted = true;
        setTimeout(() => {
            if (!mounted) {
                return;
            }
            setArray(getArray(end));
        }, delay);
        return () => {
            mounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay]);

    return (
        <React.Fragment>
            {array.map((i) => (
                <div
                    style={{ backgroundColor: '#2EBFA5', color: 'white' }}
                    key={i}
                >
                    {i}
                </div>
            ))}
        </React.Fragment>
    );
}
