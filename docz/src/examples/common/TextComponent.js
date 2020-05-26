import React from 'react';

export default function TextComponent({ limit }) {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit amet nisl suscipit adipiscing. Diam phasellus vestibulum lorem sed risus. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Dolor purus non enim praesent elementum facilisis leo. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.'.substring(
        0,
        limit
    );

    return (
        <p
            style={{
                backgroundColor: '#2EBFA5',
                borderRadius: '0px 0px 4px 4px',
                color: '#2D3747',
                margin: 0,
                padding: 8
            }}
        >
            {text}
        </p>
    );
}
