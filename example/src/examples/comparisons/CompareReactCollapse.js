import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Column, Row } from 'simple-flexbox';
import CollapsibleContent from 'react-collapsible-content';
import DynamicText from '../common/DynamicText';
import ToggleButtonComponent from '../common/ToggleButtonComponent';
import CountdownComponent from '../common/CountdownComponent';
import { Collapse } from 'react-collapse';

const styles = StyleSheet.create({
    container: {
        maxWidth: 960,
        ':first-child .ReactCollapse--collapse': {
            transition: 'height 425ms'
        }
    },
    selected: {
        backgroundColor: '#577a61'
    }
});

export default function DynamicContent() {
    const [expanded, setExpanded] = useState(true);
    const [array, setArray] = useState(['a', 'b', 'c', 'd', 'e']);

    useEffect(() => {
        let mounted = true;
        setTimeout(() => {
            if (!mounted) {
                return;
            }
            setArray((prev) => [
                ...prev,
                'it works because the changes are made in the component that contain "react-collapse"',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l'
            ]);
        }, 5000);
        return () => {
            mounted = false;
        };
    }, []);

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
                    href='https://www.npmjs.com/package/react-collapse'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    react-collapse
                </a>
                <br />
                <span>
                    In <b>react-collapse</b> <b>height: auto;</b> by default
                    when it's expanded, that is why you don't see any transition
                    after children changes. When it changes to collapsed{' '}
                    <b>height</b> is set to 0px and when it changes to expanded{' '}
                    <b>height</b> is set to the current <b>height</b> of the
                    component (i.e.: 280px), and when transitions end{' '}
                    <b>height</b> is set to <b>auto</b> again.
                </span>
                <br />
                <span>
                    See what happens in the third example, it works because the
                    changes are made in the component that contain
                    "react-collapse", so that component is also re-rendered, but
                    in the previous examples "re-render" occurs only in the
                    children.
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
                <Column flexGrow={1} style={{ maxWidth: 300 }}>
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

                <Column flexGrow={1} style={{ maxWidth: 300 }}>
                    <ToggleButtonComponent
                        expanded={expanded}
                        onClick={() => setExpanded((prev) => !prev)}
                        title='Toggle: react-collapse'
                    />
                    <Collapse isOpened={expanded}>
                        <DynamicText delay={5000} />
                    </Collapse>
                </Column>

                <Column flexGrow={1} style={{ maxWidth: 300 }}>
                    <ToggleButtonComponent
                        expanded={expanded}
                        onClick={() => setExpanded((prev) => !prev)}
                        title='Toggle: react-collapse'
                    />
                    <Collapse isOpened={expanded}>
                        <div style={{ border: '1px solid green' }}>
                            {array.map((a, i) => (
                                <div key={`${a}-${i}`}>{a}</div>
                            ))}
                        </div>
                    </Collapse>
                </Column>
            </Row>
        </Column>
    );
}
