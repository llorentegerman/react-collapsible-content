import React from 'react';
import PropTypes from 'prop-types';

function CollapsibleContent(props) {
    return <div {...props} />;
}

CollapsibleContent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
    /**
     * Set this property to expand or collapse your content.
     */
    expanded: PropTypes.bool,
    /**
     * The event is triggered when the transition starts (from open to closed or vice versa)
     */
    onTransitionStart: PropTypes.func,
    /**
     * The event is triggered when the transition is complete (from open to closed or vice versa)
     */
    onTransitionEnd: PropTypes.func,
    /**
     * Add some custom styles to the content wrapper.
     */
    style: PropTypes.object,
    /**
     * Set your own duration for the transition in string format (i.e.: '1s', '200ms', '.9s') by default is: '.425s'
     */
    transitionDuration: PropTypes.string,
    /**
     * Select a timing function for the transition (i.e.: 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear') by default is: 'ease-in-out'
     */
    transitionTimingFunction: PropTypes.string
};

CollapsibleContent.defaultProps = {
    transitionDuration: '.425s',
    transitionTimingFunction: 'ease-in-out'
};

export default CollapsibleContent;
