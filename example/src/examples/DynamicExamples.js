import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import DynamicContentExample from './dynamic_content/DynamicContentExample';
import DynamicChildrenExample from './dynamic_content/DynamicChildrenExample';
import DynamicContentBugExample from './dynamic_content/DynamicContentBugExample';

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

function DynamicExamples() {
    const [example, setExample] = useState('dynamic_content');

    const getContent = () => {
        switch (example) {
            case 'dynamic_content':
                return <DynamicContentExample />;
            case 'dynamic_children':
                return <DynamicChildrenExample />;
            case 'dynamic_bug':
                return <DynamicContentBugExample />;
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
            <h2 style={{ margin: 0 }}>Dynamic Content</h2>
            <div
                style={{
                    textAlign: 'justify',
                    marginTop: 0,
                    marginBottom: 10,
                    lineHeight: '21px'
                }}
            >
                See how <b>react-collapsible-content</b> transition to a new
                height when it child's content changes, or when new children are
                added.
            </div>
            <h4 style={{ margin: 0, marginBottom: 4 }}>Select an example:</h4>
            <Row>
                <Link name='dynamic_content' title='Dynamic Content' />
                <Link name='dynamic_children' title='Dynamic Children' />
                <Link name='dynamic_bug' title='Dynamic Bug' />
            </Row>
            <div style={{ marginTop: 10 }}>{getContent()}</div>
        </Column>
    );
}

export default DynamicExamples;
