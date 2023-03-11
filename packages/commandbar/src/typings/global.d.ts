declare module '*.module.css';
declare module '*.module.scss';

interface NeosI18n {
    translate: (
        id: string,
        fallback: string,
        packageKey: string,
        source: string,
        args: Record<string, unknown> | string[]
    ) => string;
    initialized: boolean;
}

type TranslateFunction = (
    id: string,
    fallback?: string,
    parameters?: Record<string, string | number> | string[]
) => string;

type NeosModuleWindow = Window &
    typeof globalThis & {
        NeosCMS: {
            I18n: NeosI18n;
        };
    };

type Renderable<Props> = React.FC<Props>;
type IconProps = { icon: string; spin?: boolean };

// Nested command list for simpler definition by the user
type HierarchicalCommandList = Record<CommandId, CommandItem>;

// Flat list of commands for simpler internal use
type FlatCommandList = Record<CommandId, ProcessedCommandItem>;

// Relative command name without parent path
type CommandName = string;

// Absolute command identifier including all parent paths
type CommandId = string;

type AbstractCommandItem = {
    name: CommandName;
    icon?: string;
    description?: string | (() => string);
};

// An executable command
type Command = AbstractCommandItem & {
    action: string | CommandAction | CommandGeneratorAction;
    canHandleQueries?: boolean;
    category?: string;
    closeOnExecute?: boolean;
};

// Holds other commands but cannot be executed
type CommandGroup = AbstractCommandItem & {
    subCommands: HierarchicalCommandList;
};

// Executable commands and groups are allowed as items
type CommandItem = Command | CommandGroup;

// A command that has been processed for the FlatCommandList
type ProcessedCommandItem = Command & {
    id: CommandId;
    parentId?: CommandId;
    subCommandIds?: CommandId[];
};

// Command actions can be defined as promises or generators
type CommandAction = (argument?: string) => AsyncCommandResult;
type CommandGeneratorAction = (argument?: string) => CommandGeneratorResult;

// Command results can be returned asynchronously or via a generator
type AsyncCommandResult = Promise<void | CommandResult>;
type CommandGeneratorResult = AsyncGenerator<CommandResult, void, CommandResult>;

// If a command returns an optional response it has to at least contain the success state
type CommandResult = {
    success: boolean;
    message?: string;
    // TODO: Allow json data or even html as response output
    options?: FlatCommandList;
    view?: string | ReactElement;
};

// ---------------------------
// Types from the Neos UI core
// ---------------------------
type I18nRegistry = {
    translate: (
        id?: string,
        fallback?: string,
        params?: Record<string, unknown> | string[],
        packageKey?: string,
        sourceName?: string
    ) => string;
};

type CRNode = {
    identifier: string;
    contextPath: string;
    name: string;
    nodeType: string;
};

type NeosHotKey = {
    id: string;
    description: string;
    action: () => any;
};

type ModuleCommands = {
    sites: CommandGroup;
    modules: CommandGroup;
};

type EditPreviewMode = {
    isEditingMode: boolean;
    isPreviewMode: boolean;
    title: string;
    position: number;
    fusionRenderingPath: string;
};

type EditPreviewModes = Record<string, EditPreviewMode>;

type NodeContextPath = string;

interface UserPreferences {
    favouriteCommands: CommandId[];
    recentCommands: CommandId[];
    recentDocuments: NodeContextPath[];
    showBranding: boolean;
}

interface UserPreferencesService extends UserPreferences {
    setFavouriteCommands: (commandIds: CommandId[]) => Promise;
    addRecentCommand: (commandId: CommandId) => Promise;
}
