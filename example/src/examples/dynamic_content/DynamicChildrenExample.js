import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import CollapsibleContent from 'react-collapsible-content';
import DynamicChildren from '../common/DynamicChildren';
import ToggleButtonComponent from '../common/ToggleButtonComponent';
import CountdownComponent from '../common/CountdownComponent';

export default function DynamicChildrenExample() {
    const [expanded, setExpanded] = useState(true);
    return (
        <Row>
            <Column flexGrow={1} style={{ maxWidth: 200 }}>
                <ToggleButtonComponent
                    expanded={expanded}
                    onClick={() => setExpanded((prev) => !prev)}
                    title='TOGGLE'
                />
                <CollapsibleContent
                    transitionDuration='.425s'
                    expanded={expanded}
                >
                    <DynamicChildren init={3} end={10} delay='5000' />
                </CollapsibleContent>
            </Column>
            <p
                align='justify'
                style={{ marginTop: 0, marginLeft: 10, maxWidth: 450 }}
            >
                When the counter reaches 0 new children will be added, and the
                height of the component will change.
                <br />
                Content will change in: <CountdownComponent delay={5000} />{' '}
                (refresh to restart).
            </p>
        </Row>
    );
}
