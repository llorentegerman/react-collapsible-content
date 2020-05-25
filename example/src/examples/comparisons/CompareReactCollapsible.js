import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import CollapsibleContent from 'react-collapsible-content';
import DynamicText from '../common/DynamicText';
import ToggleButtonComponent from '../common/ToggleButtonComponent';
import CountdownComponent from '../common/CountdownComponent';
import ReactCollapsible from 'react-collapsible';

export default function DynamicContent() {
    const [expanded, setExpanded] = useState(true);

    return (
        <Column style={{ maxWidth: 550 }}>
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
                    href='https://www.npmjs.com/package/react-collapsible'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    react-collapsible
                </a>
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
                    <ToggleButtonComponent
                        expanded={expanded}
                        onClick={() => setExpanded((prev) => !prev)}
                        title='Toggle: react-collapsible'
                    />
                    <ReactCollapsible transitionTime={600} open={expanded}>
                        <DynamicText delay={5000} />
                    </ReactCollapsible>
                </Column>
            </Row>
        </Column>
    );
}
