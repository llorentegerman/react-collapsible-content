import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function useScrollHeight(ref, { onTransitionStart, onTransitionEnd } = {}) {
    const resizeObserver = useRef(null);
    const mutationObserver = useRef(null);
    const [scrollHeight, setScrollHeight] = useState('100vh');
    const currentScrollHeight = useRef(scrollHeight);

    const handleResize = () => {
        if (!ref.current) {
            return;
        }
        const newHeight = ref.current.scrollHeight;
        if (currentScrollHeight.current !== newHeight) {
            currentScrollHeight.current = newHeight;
            setScrollHeight(newHeight);
        }
    };

    function addResizeEventListener() {
        if (typeof ResizeObserver === 'function') {
            if (resizeObserver.current && mutationObserver.current) {
                return;
            }
            // eslint-disable-next-line no-undef
            resizeObserver.current = new ResizeObserver(handleResize);
            resizeObserver.current.observe(ref.current);

            // eslint-disable-next-line no-undef
            mutationObserver.current = new MutationObserver(handleResize);
            mutationObserver.current.observe(ref.current, {
                characterData: true,
                subtree: true,
                childList: true
            });
        } else {
            window.addEventListener('resize', handleResize);
        }
    }

    function removeResizeEventListener() {
        if (typeof ResizeObserver === 'function' && resizeObserver.current) {
            resizeObserver.current.disconnect(ref.current);
            resizeObserver.current = null;

            mutationObserver.current.disconnect(ref.current);
            mutationObserver.current = null;
        } else {
            window.removeEventListener('resize', handleResize);
        }
    }

    useEffect(() => {
        const refCurrent = ref.current;
        if (!refCurrent) {
            return;
        }

        handleResize(); // default call to set the initial value

        const cbTransitionStart = (e) => {
            if (e.propertyName === 'max-height') {
                removeResizeEventListener();
                onTransitionStart && onTransitionStart();
            }
        };

        const cbTransitionEnd = (e) => {
            if (e.propertyName === 'max-height') {
                addResizeEventListener();
                onTransitionEnd && onTransitionEnd();
            }
        };

        addResizeEventListener();
        refCurrent.addEventListener('transitionstart', cbTransitionStart);

        refCurrent.addEventListener('transitionend', cbTransitionEnd);
        return () => {
            refCurrent.removeEventListener(
                'transitionstart',
                cbTransitionStart
            );
            refCurrent.removeEventListener('transitionend', cbTransitionEnd);
            removeResizeEventListener();
            ref.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    return { scrollHeight };
}

useScrollHeight.propTypes = {
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any })
    ]).isRequired,
    options: PropTypes.shape({
        onTransitionStart: PropTypes.func,
        onTransitionEnd: PropTypes.func
    })
};

useScrollHeight.defaultProps = {
    options: {}
};

export default useScrollHeight;
