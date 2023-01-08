import React, { useCallback, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import CommandBar from '@neos-commandbar/main';

(() => {
    const initialContent = {
        pageA: [
            {
                nodeType: 'headline',
                text: 'Neos CommandBar Test',
            },
            {
                nodeType: 'text',
                text: 'Lorem ipsum blabla',
            },
        ],
        pageB: [
            {
                nodeType: 'headline',
                text: 'Welcome to page B',
            },
            {
                nodeType: 'text',
                text: 'Only the finest news',
            },
        ],
    };

    const App = () => {
        const [sideBarLeftOpen, setSideBarLeftOpen] = useState(false);
        const [sideBarRightOpen, setSideBarRightOpen] = useState(false);
        const [commandBarOpen, setCommandBarOpen] = useState(true);
        const [published, setPublished] = useState(false);
        const [content, setContent] = useState(initialContent);
        const [currentWebsite, setCurrentWebsite] = useState('pageA');

        const publishAll = useCallback(() => {
            console.debug('Publishing all');
            setPublished(true);
        }, []);

        const addContentElement = useCallback((page: string, nodeType: string, text: string) => {
            console.debug('Adding more content to page ' + page);
            setContent((prev) => {
                return {
                    ...prev,
                    [page]: [
                        ...prev[page],
                        {
                            nodeType,
                            text,
                        },
                    ],
                };
                return prev;
            });
        }, []);

        const findDocument = useCallback(() => {
            console.debug('Find document ist not implemented yet');
            return false;
        }, []);

        // Create some fake commands for testing
        const commands: CommandList = useMemo(
            () => ({
                home: {
                    icon: 'home',
                    name: 'Home',
                    description: 'Sends you home',
                    action: () => console.debug('Go home'),
                },
                toggleLeftSidebar: {
                    icon: 'toggle-on',
                    name: 'Toggle left sidebar',
                    action: () => setSideBarLeftOpen((prev) => !prev),
                },
                toggleRightSidebar: {
                    icon: 'toggle-on',
                    name: 'Toggle right sidebar',
                    action: () => setSideBarRightOpen((prev) => !prev),
                },
                publishAll: {
                    icon: '',
                    name: 'Publish all',
                    description: 'to current Workspace',
                    action: publishAll,
                },
                addNode: {
                    icon: 'plus',
                    name: 'Add content',
                    description: 'Add new content element to the current page',
                    action: () => addContentElement(currentWebsite, 'text', 'Some more text'),
                },
                findDocument: {
                    icon: 'search',
                    name: 'Find page',
                    description: 'Search for a document and navigate to it',
                    action: findDocument,
                },
                sites: {
                    name: 'Sites',
                    icon: 'file',
                    description: 'Open another website in this Neos instance',
                    children: {
                        pageA: {
                            name: 'Website A',
                            icon: 'globe',
                            action: () => setCurrentWebsite('pageA'),
                        },
                        pageB: {
                            name: 'Website B',
                            icon: 'globe',
                            action: () => setCurrentWebsite('pageB'),
                        },
                    },
                },
                modules: {
                    name: 'Modules',
                    icon: 'puzzle-piece',
                    description: 'Open a module',
                    children: {
                        media: {
                            name: 'Media',
                            icon: 'camera',
                            description: 'Manage images and other assets',
                            action: () => console.debug('Opened the media module'),
                        },
                        workspaces: {
                            name: 'Workspaces',
                            icon: 'th-large',
                            description: 'Publish or discard changes in workspaces',
                            action: () => console.debug('Opened the workspaces module'),
                        },
                        history: {
                            name: 'History',
                            icon: 'calendar',
                            description: 'View historic changes to content',
                            action: () => console.debug('Opened the history module'),
                        },
                        redirects: {
                            name: 'Redirects',
                            icon: 'share',
                            description: 'Manage redirects for documents and assets',
                            action: () => console.debug('Opened the redirects module'),
                        },
                    },
                },
            }),
            []
        );

        return (
            <div className="app-grid">
                <header className="header">
                    <span>Neos commandbar test</span>
                    <button disabled={published}>Publish all</button>
                </header>
                {sideBarLeftOpen && (
                    <div id="sidebarLeft">
                        <h2>Left Sidebar</h2>
                        <ul>
                            <li>1. item</li>
                            <li>2. item</li>
                            <li>3. item</li>
                            <li>4. item</li>
                            <li>5. item</li>
                        </ul>
                        <button onClick={() => setSideBarLeftOpen(false)}>Close</button>
                    </div>
                )}
                {sideBarRightOpen && (
                    <div id="sidebarRight">
                        <h2>Right Sidebar</h2>
                        <ul>
                            <li>1. item</li>
                            <li>2. item</li>
                            <li>3. item</li>
                            <li>4. item</li>
                            <li>5. item</li>
                        </ul>
                        <button onClick={() => setSideBarRightOpen(false)}>Close</button>
                    </div>
                )}
                <div className="content">
                    {content[currentWebsite].map(({ nodeType, text }, index) =>
                        nodeType === 'headline' ? (
                            <h2 className="headline" key={index}>
                                {text}
                            </h2>
                        ) : (
                            <p className="text" key={index}>
                                {text}
                            </p>
                        )
                    )}
                </div>
                <CommandBar
                    commands={commands}
                    open={commandBarOpen}
                    toggleOpen={() => setCommandBarOpen((prev) => !prev)}
                />
            </div>
        );
    };

    ReactDOM.render(<App />, document.getElementById('app'));
})();