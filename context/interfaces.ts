import React from "react";

export interface IState {
    editor: IStateEditor;
    theme: ITheme;
    selectedTheme: selectedTheme;
    console: IConsole;
    workspace: IWorkspace,
    // methods
    updateContext: (context: IState) => void;
    executeProgram: (source: string) => void;
    updateEditor: (source: string) => void;
    clearConsoleOutput: () => void;
    switchTheme: (selectedTheme: selectedTheme) => void;
    switchTab: (tab: availableTabs) => void;
}

export type selectedTheme = 'light' | 'dark';

export type availableTabs = 'editor' | 'terminal';

export interface IWorkspace {
    currentTab: availableTabs;
}

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
    view: Array<React.ReactElement>;
}