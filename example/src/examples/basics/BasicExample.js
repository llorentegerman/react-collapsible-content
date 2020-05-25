import React, { useState } from 'react';
import { Column } from 'simple-flexbox';
import CollapsibleContent from 'react-collapsible-content';
import ToggleButtonComponent from '../common/ToggleButtonComponent';

function Basic() {
    const [expanded, setExpanded] = useState(false);

    const getContent = () => (
        <p
            style={{
                backgroundColor: 'green',
                margin: 0,
                padding: 8,
                borderRadius: '0px 0px 4px 4px'
            }}
        >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </p>
    );

    return (
        <Column style={{ width: '100%' }}>
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
            <Column style={{ maxWidth: 200, width: '100%' }}>
                <ToggleButtonComponent
                    expanded={expanded}
                    onClick={() => setExpanded((prev) => !prev)}
                    title='TOGGLE'
                    style={{ width: 'calc(100% - 2px)' }}
                />

                <CollapsibleContent
                    expanded={expanded}
                    transitionDuration={expanded ? '1s' : '1s'}
                    transitionTimingFunction={expanded ? 'ease-in' : 'linear'}
                >
                    {getContent()}
                </CollapsibleContent>
            </Column>
        </Column>
    );
}

export default Basic;
