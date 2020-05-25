import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import CollapsibleContent from '../../CollapsibleContentBug';
import DynamicText from '../common/DynamicText';
import ToggleButtonComponent from '../common/ToggleButtonComponent';
import CountdownComponent from '../common/CountdownComponent';

export default function DynamicContent() {
    const [expanded, setExpanded] = useState(false);
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
                    <DynamicText delay='5000' />
                </CollapsibleContent>
            </Column>
            <p
                align='justify'
                style={{ marginTop: 0, marginLeft: 10, maxWidth: 450 }}
            >
                Click toggle button to expand the component before the counter
                reaches 0 and after that the content (text) will change, but not
                the height of the component.
                <br /> <br />
                Why? Because the change in the children didn't cause a re-render
                of the parent, so the parent (<b>CollapsibleContent</b>) has the
                same <b>max-height</b> value as before the content changed.
                <br /> <br />
                Toggle again to collapse, and toggle again to expand, and you
                will see the full content.
                <br />
                That is because the new <b>max-height</b> was applied to{' '}
                <b>CollapsibleContent</b> after the last render.
                <br /> <br />
                Content will change in: <CountdownComponent delay={5000} />{' '}
                (refresh to restart)
            </p>
        </Row>
    );
}
