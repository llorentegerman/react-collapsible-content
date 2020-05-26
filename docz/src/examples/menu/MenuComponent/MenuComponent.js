import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Column } from 'simple-flexbox';
import MenuItemComponent from './MenuItemComponent';
import IconOverview from '../assets/icon-overview.js';
import IconTickets from '../assets/icon-tickets.js';
import IconIdeas from '../assets/icon-ideas.js';
import IconContacts from '../assets/icon-contacts';
import IconAgents from '../assets/icon-agents';
import IconArticles from '../assets/icon-articles';
import IconSettings from '../assets/icon-settings';
import IconSubscription from '../assets/icon-subscription';
import useSidebar from './useSidebar';

const styles = StyleSheet.create({
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    menu: {
        background: '#373a47',
        height: '100%',
        width: 255
    }
});

function SidebarComponent() {
    const { isExpanded, isActive, onMenuItemClicked } = useSidebar({
        defaultPath: '/ideas'
    });

    return (
        <Column className={css(styles.menu)}>
            <MenuItemComponent
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onMenuItemClicked('/dashboard')}
                active={isActive('/dashboard')}
            />

            <MenuItemComponent
                title='Overview'
                icon={IconOverview}
                onClick={() =>
                    onMenuItemClicked('/overview', { isCollapsible: true })
                }
                active={isActive('/overview')}
                expanded={isExpanded('/overview')}
                subItems={[
                    {
                        title: 'Sub Item 1',
                        icon: <IconAgents width={20} fill={'#DDE2FF'} />,
                        onClick: () => onMenuItemClicked('/overview/subitem1'),
                        active: isActive('/overview/subitem1')
                    },
                    {
                        title: 'Sub Item 2',
                        icon: <IconIdeas width={16} fill={'#DDE2FF'} />,
                        onClick: () => onMenuItemClicked('/overview/subitem2'),
                        active: isActive('/overview/subitem2')
                    },
                    {
                        title: 'Sub Item 3',
                        icon: <IconContacts width={16} fill={'#DDE2FF'} />,
                        onClick: () => onMenuItemClicked('/overview/subitem3'),
                        active: isActive('/overview/subitem3')
                    },
                    {
                        title: 'Sub Item 4',
                        icon: <IconSettings width={20} fill={'#DDE2FF'} />,
                        onClick: () => onMenuItemClicked('/overview/subitem4'),
                        active: isActive('/overview/subitem4')
                    }
                ]}
            />
            <MenuItemComponent
                title='Tickets'
                icon={IconTickets}
                onClick={() => onMenuItemClicked('/tickets')}
                active={isActive('/tickets')}
            />
            <MenuItemComponent
                title='Ideas'
                icon={IconIdeas}
                onClick={() =>
                    onMenuItemClicked('/ideas', { isCollapsible: true })
                }
                active={isActive('/ideas')}
                expanded={isExpanded('/ideas')}
                subItems={[
                    {
                        title: 'Sub Item 1',
                        icon: <IconAgents width={20} fill={'#DDE2FF'} />,
                        onClick: () => onMenuItemClicked('/ideas/subitem1'),
                        active: isActive('/ideas/subitem1')
                    },
                    {
                        title: 'Sub Item 2',
                        icon: <IconIdeas width={16} fill={'#DDE2FF'} />,
                        onClick: () => onMenuItemClicked('/ideas/subitem2'),
                        active: isActive('/ideas/subitem2')
                    },
                    {
                        title: 'Sub Item 3',
                        icon: <IconContacts width={16} fill={'#DDE2FF'} />,
                        onClick: () => onMenuItemClicked('/ideas/subitem3'),
                        active: isActive('/ideas/subitem3')
                    },
                    {
                        title: 'Sub Item 4',
                        icon: <IconSettings width={20} fill={'#DDE2FF'} />,
                        onClick: () => onMenuItemClicked('/ideas/subitem4'),
                        active: isActive('/ideas/subitem4')
                    }
                ]}
            />
            <MenuItemComponent
                title='Contacts'
                icon={IconContacts}
                onClick={() => onMenuItemClicked('/contacts')}
                active={isActive('/contacts')}
            />
            <MenuItemComponent
                title='Agents'
                icon={IconAgents}
                onClick={() => onMenuItemClicked('/agents')}
                active={isActive('/agents')}
            />
            <MenuItemComponent
                title='Articles'
                icon={IconArticles}
                onClick={() => onMenuItemClicked('/articles')}
                active={isActive('/articles')}
            />
            <div className={css(styles.separator)} />
            <MenuItemComponent
                title='Settings'
                icon={IconSettings}
                onClick={() => onMenuItemClicked('/settings')}
                active={isActive('/settings')}
            />
            <MenuItemComponent
                title='Subscription'
                icon={IconSubscription}
                onClick={() => onMenuItemClicked('/subscription')}
                active={isActive('/subscription')}
            />
        </Column>
    );
}

export default SidebarComponent;
