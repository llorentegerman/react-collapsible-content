import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import CollapsibleContent from 'react-collapsible-content';
import DynamicText from '../common/DynamicText';
import ToggleButtonComponent from '../common/ToggleButtonComponent';
import CountdownComponent from '../common/CountdownComponent';

export default function DynamicContent() {
    const [expanded, setExpanded] = useState(true);

    return (
        <Row>
            <Column flexGrow={1} style={{ maxWidth: 200 }}>
                <ToggleButtonComponent
                    expanded={expanded}
                    onClick={() => setExpanded((prev) => !prev)}
                    title='TOGGLE'
                />
                <CollapsibleContent expanded={expanded}>
                    <DynamicText delay='5000' />
                </CollapsibleContent>
            </Column>
            <p
                align='justify'
                style={{ marginTop: 0, marginLeft: 10, maxWidth: 450 }}
            >
                When the counter reaches 0 the content of the only child will
                change, and also the height of the component.
                <br />
                Content will change in: <CountdownComponent delay={5000} />{' '}
                (refresh to restart).
            </p>
        </Row>
    );
}
