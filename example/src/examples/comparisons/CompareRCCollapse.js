import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Column, Row } from 'simple-flexbox';
import CollapsibleContent from 'react-collapsible-content';
import DynamicText from '../common/DynamicText';
import ToggleButtonComponent from '../common/ToggleButtonComponent';
import CountdownComponent from '../common/CountdownComponent';
import Collapse, { Panel } from 'rc-collapse';
require('rc-collapse/assets/index.css');

const styles = StyleSheet.create({
    container: {
        maxWidth: 550,
        ':first-child p': {
            color: 'black'
        }
    },
    selected: {
        backgroundColor: '#577a61'
    }
});

export default function DynamicContent() {
    const [expanded, setExpanded] = useState(true);

    return (
        <Column className={css(styles.container)}>
            <div
                style={{
                    textAlign: 'justify',
                    marginTop: 0,
                    marginBottom: 10,
                    lineHeight: '21px'
                }}
            >
                Link to npm{' '}
                <a
                    href='https://www.npmjs.com/package/rc-collapse'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    rc-collapse
                </a>
                <br />
                <span>
                    In <b>rc-collapse</b> transition is activated when onClick
                    and deactivated when transition ends. That is why you don't
                    see animations when content changes.
                </span>
                <br />
                <span style={{ margin: 0 }}>
                    Content will change in:{' '}
                    <b>
                        <CountdownComponent delay={5000} />
                    </b>{' '}
                    (refresh to restart).
                </span>
            </div>
            <Row horizontal='space-between'>
                <Column flexGrow={1} style={{ maxWidth: 250 }}>
                    <ToggleButtonComponent
                        expanded={expanded}
                        onClick={() => setExpanded((prev) => !prev)}
                        title='Toggle: react-collapsible-content'
                    />
                    <CollapsibleContent
                        transitionDuration='.600s'
                        expanded={expanded}
                    >
                        <DynamicText delay={5000} />
                    </CollapsibleContent>
                </Column>

                <Column flexGrow={1} style={{ maxWidth: 250 }}>
                    <Collapse
                        activeKey={[expanded ? '1' : '']}
                        onChange={() => setExpanded((prev) => !prev)}
                        accordion={true}
                    >
                        <Panel key='1' header='Toggle: rc-collapse'>
                            <DynamicText delay={5000} />
                        </Panel>
                    </Collapse>
                </Column>
            </Row>
        </Column>
    );
}
