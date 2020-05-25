import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import BasicExample from './basics/BasicExample';
import TransitionEventsExample from './basics/TransitionEventsExample';
import UnmountOnCollapse from './basics/UnmountOnCollapse';

const styles = StyleSheet.create({
    link: {
        backgroundColor: '#74a381',
        padding: '8px 4px',
        borderRadius: 4,
        marginRight: 4,
        cursor: 'pointer',
        color: 'white',
        fontWeight: 500
    },
    selected: {
        backgroundColor: '#577a61'
    }
});

function BasicExamples() {
    const [example, setExample] = useState('basic');

    const getContent = () => {
        switch (example) {
            case 'basic':
                return <BasicExample />;
            case 'transition':
                return <TransitionEventsExample />;
            case 'unmount':
                return <UnmountOnCollapse />;
            default:
                return <span>Select an example</span>;
        }
    };

    const Link = ({ name, title }) => (
        <span
            className={css(styles.link, example === name && styles.selected)}
            onClick={() => setExample(name)}
        >
            {title || name}
        </span>
    );

    return (
        <Column>
            <h2 style={{ margin: 0 }}>Basic Examples</h2>

            <h4 style={{ margin: 0, marginBottom: 4 }}>Select an example:</h4>
            <Row>
                <Link name='basic' title='Basic' />
                <Link name='transition' title='Transition Events' />
                <Link name='unmount' title='Unmount on Collapse' />
            </Row>
            <div style={{ marginTop: 10 }}>{getContent()}</div>
        </Column>
    );
}

export default BasicExamples;
