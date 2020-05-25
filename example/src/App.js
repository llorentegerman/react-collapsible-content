import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Examples from './examples';

const {
    MenuExample,
    BasicExamples,
    ComparisonsComponent,
    DynamicExamples
} = Examples;

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

function App() {
    const [example, setExample] = useState(
        window.location.search.substring('?example='.length)
    );

    const getContent = () => {
        switch (example) {
            case 'menu':
                return <MenuExample />;
            case 'basic':
                return <BasicExamples />;
            case 'dynamic_examples':
                return <DynamicExamples />;
            case 'comparisons':
                return <ComparisonsComponent />;
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
        <Column style={{ height: 800 }}>
            <h4 style={{ margin: 0, marginBottom: 4 }}>Select an example:</h4>
            <Row>
                <Link name='menu' title='Menu' />
                <Link name='basic' title='Basic' />
                <Link name='dynamic_examples' title='Dynamic Examples' />
                <Link name='comparisons' title='Comparisons' />
            </Row>
            <div style={{ marginTop: 10 }}>{getContent()}</div>
        </Column>
    );
}

export default App;
