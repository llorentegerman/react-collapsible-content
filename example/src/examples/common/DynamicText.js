import React, { useEffect, useState } from 'react';

export default function DynamicText({ delay = 2000 }) {
    const [secondText, setSecondText] = useState('');

    useEffect(() => {
        let mounted = true;
        setTimeout(() => {
            if (!mounted) {
                return;
            }
            setSecondText(`when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s
      with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.`);
        }, delay);
        return () => {
            mounted = false;
        };
    }, [delay]);

    return (
        <p
            style={{
                backgroundColor: 'green',
                margin: 0,
                padding: 8,
                borderRadius: '0px 0px 4px 4px'
            }}
        >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, {secondText}
        </p>
    );
}
