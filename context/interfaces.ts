export interface IState {
    editor: IStateEditor;
    theme: ITheme;
    selectedTheme: selectedTheme;
    console: IConsole;
    // methods
    updateContext: (context: IState) => void;
    executeProgram: (source: string) => void;
    updateEditor: (source: string) => void;
    clearConsoleOutput: () => void;
    switchTheme: (selectedTheme: selectedTheme) => void
}

export type selectedTheme = 'light' | 'dark';

export interface IStateEditor {
    isEditorAutoRunOn: boolean;
    isEditorReadOnlyOn: boolean;
    textContent: string;
}

export interface ITheme {
    elevation1: string;
    elevation2: string;
    depression1: string;
    depression2: string;
    depressionDeep: string;
    iconSize1: number;
    border1: string,
    fontColor1: string;
}

export interface IConsole {
    result: string;
    ast: string;
}