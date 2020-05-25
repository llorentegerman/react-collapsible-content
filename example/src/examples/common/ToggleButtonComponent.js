import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Row } from 'simple-flexbox';

const styles = StyleSheet.create({
    button: {
        border: '1px solid green',
        borderRadius: 4,
        cursor: 'pointer',
        backgroundColor: '#f7f7f7',
        transition: 'border-radius .625s ease-in-out'
    },
    buttonExpanded: {
        borderBottom: 'none',
        borderRadius: '4px 4px 0px 0px'
    },
    arrow: {
        display: 'inline-block',

        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
        borderLeft: '5px solid currentColor',

        verticalAlign: 'middle',
        marginRight: '.7rem',
        transform: 'translateY(-2px)',

        transition: 'transform .425s ease-in-out'
    },
    arrowExpanded: {
        transform: 'rotate(90deg) translateX(-1px)'
    },
    arrowContainer: {
        display: 'block',
        margin: 10,
        marginLeft: 20
    },
    label: {
        margin: 10
    }
});

function ToggleButtonComponent({ title = 'TOGGLE', expanded, onClick, style }) {
    return (
        <Row
            wrap={false}
            className={css(styles.button, expanded && styles.buttonExpanded)}
            onClick={onClick}
            style={style}
        >
            <div className={css(styles.arrowContainer)}>
                <span
                    className={css(
                        styles.arrow,
                        expanded && styles.arrowExpanded
                    )}
                >
                    {' '}
                </span>
            </div>
            <span className={css(styles.label)}>{title}</span>
        </Row>
    );
}

export default ToggleButtonComponent;
