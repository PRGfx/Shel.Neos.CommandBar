import React, { useEffect } from 'react';

import * as styles from './CommandListing.module.css';
import CommandListItem from './CommandListItem';

type CommandListingProps = {
    commands: FlatCommandList;
    availableCommandIds: CommandId[];
    highlightedItem: number;
    handleSelectItem: (commandId: CommandId) => void;
    heading?: string;
    runningCommandId?: CommandId; // This argument forces a refresh after a command executed to update command properties
    noCommandsMessage?: string;
    disabled?: boolean;
};

const CommandList: React.FC<CommandListingProps> = ({
    commands,
    availableCommandIds,
    highlightedItem,
    handleSelectItem,
    heading = 'Commands',
    runningCommandId = '',
    noCommandsMessage = 'No matching commands found',
    disabled = false,
}) => {
    const selectedElementRef = React.useRef(null);

    useEffect(() => {
        selectedElementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, [selectedElementRef.current]);

    return (
        <nav className={[styles.results, disabled && styles.disabled].join(' ')}>
            {heading && <h6>{heading}</h6>}
            {availableCommandIds.length > 0 ? (
                <ul>
                    {availableCommandIds.map((commandId, index) => (
                        <CommandListItem
                            key={commandId}
                            ref={highlightedItem === index ? selectedElementRef : null}
                            command={commands[commandId]}
                            onItemSelect={handleSelectItem}
                            highlighted={highlightedItem === index}
                            runningCommandId={runningCommandId}
                        />
                    ))}
                </ul>
            ) : (
                <small className={styles.noResults}>{noCommandsMessage}</small>
            )}
        </nav>
    );
};

export default React.memo(CommandList);