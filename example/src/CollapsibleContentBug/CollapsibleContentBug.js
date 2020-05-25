import React, { useRef } from 'react';
import { arrayOf, bool, element, object, oneOfType, string } from 'prop-types';

function CollapsibleContent({
    children,
    expanded,
    style,
    transitionDuration,
    ...others
}) {
    const contentContainerRef = useRef(null);

    return (
        <div
            {...others}
            style={{
                overflow: 'hidden',
                transitionProperty: 'max-height',
                transitionTimingFunction: 'ease-in-out',
                transitionDuration,
                maxHeight: expanded
                    ? contentContainerRef.current
                        ? contentContainerRef.current.scrollHeight
                        : '100vh'
                    : 0,
                ...style
            }}
            ref={contentContainerRef}
        >
            {children}
        </div>
    );
}

CollapsibleContent.propTypes = {
    children: oneOfType([arrayOf(element), element]).isRequired,
    expanded: bool,
    style: object,
    transitionDuration: string
};

CollapsibleContent.defaultProps = {
    transitionDuration: '.425s'
};

export default CollapsibleContent;
