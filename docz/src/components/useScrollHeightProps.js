import React from 'react';
import PropTypes from 'prop-types';

function useScrollHeight(props) {
    return <div {...props} />;
}

useScrollHeight.propTypes = {
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any })
    ]).isRequired,
    /**
     * Define callback functions for transitionStart and transitionEnd events.
     */
    options: PropTypes.shape({
        onTransitionStart: PropTypes.func,
        onTransitionEnd: PropTypes.func
    })
};

export default useScrollHeight;
