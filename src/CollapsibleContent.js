import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useScrollHeight from './useScrollHeight';

function CollapsibleContent({
    children,
    expanded,
    style,
    transitionDuration,
    transitionTimingFunction,
    onTransitionStart,
    onTransitionEnd,
    ...others
}) {
    const contentContainerRef = useRef(null);
    const { scrollHeight } = useScrollHeight(contentContainerRef, {
        onTransitionStart,
        onTransitionEnd
    });

    return (
        <div
            {...others}
            style={{
                overflow: 'hidden',
                transitionProperty: 'max-height',
                transitionTimingFunction,
                transitionDuration,
                maxHeight: expanded ? scrollHeight : 0,
                ...style
            }}
            ref={contentContainerRef}
        >
            {children}
        </div>
    );
}

CollapsibleContent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
    expanded: PropTypes.bool,
    onTransitionStart: PropTypes.func,
    onTransitionEnd: PropTypes.func,
    style: PropTypes.object,
    transitionDuration: PropTypes.string,
    transitionTimingFunction: PropTypes.string
};

CollapsibleContent.defaultProps = {
    transitionDuration: '.425s',
    transitionTimingFunction: 'ease-in-out'
};

export default CollapsibleContent;
