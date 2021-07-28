import React, { Component, createContext } from 'react';
import { availableTabs, IState, selectedTheme } from './interfaces';
import { DarkTheme, LightTheme } from './theme';
import Sonar from 'sonar-core-npm-package/Program';
import { Null, Err } from 'sonar-core-npm-package/object';

export const AppContext = createContext(null);


/**
 * The AppContextProvider creates, maintains and returns state for the universal application context.
 * I don't envisage an extremely large application, and I prefer to avoid complexity unless absolutely necxessary,
 * so I will maintain only one universal state throughout the app.
 * 
 * Moreover, I just have never been able to remember how to create React contexts using the (more common?) functional approach
 * [I sorely need to export my work on the Doorlity app to a repo on GitHub so that I will have that easily accessible. Don't forget, Icheka.]
 * and the Object-oriented approach using classes has always appealed to me more. Long story short, if you do not understand this file, here's a good opportunity
 * for you to learn something new (and for me to stock up on my good karma).
 * 
 * ======= REACT APP CONTEXT ========
 * === STEPS ===
 * = 1. Create a new context using the React.createContext() method. createContext() requires (at least in TypeScript) an initial value.
 * = You can just pass `null`. Export this context.
 * = E.g. export const AppContext = React.createContext(null);
 * 
 * = 2. Create a class that extends the React.Component super class.
 * = E.g. class AppContextProvider extends Component {}
 * 
 * = 3. In the class constructor, after calling super(props), create a state object and initialize it
 * = with a method for updating itself.
 * = E.g. this.state = {
 *            updateContext: context => this.setState({ ...context })
 *        }
 * 
 * = 4. Most of the grunt work has now been done. Create a render() method like so:
 * = E.g. render() {
 *            const contextCopy = { ...this.state }
 *            return (
 *               <AppContext.Provider value={{ ...contextCopy }}>
 *                  { this.props.children }
 *               </AppContext.Provider>
 *        }
 * Afterwards, you can add new fields to your context by editing the class's state.
 */


class AppContextProvider extends Component {
    constructor(props) {
        super(props);

        // this.state provides the 'state' for our context machine
        const state: IState = {
            editor: {
                isEditorAutoRunOn: false,
                isEditorReadOnlyOn: false,
                textContent: '',
            },
            console: {
                ast: '',
                result: '',
                view: [<></>]
            },
            selectedTheme: 'light',
            theme: LightTheme,
            workspace: {
                currentTab: 'editor',
            },
            // methods
            updateContext: cx => this.setState({ ...cx }),
            executeProgram: () => this.executeProgram(),
            updateEditor: (input: string) => this.updateEditor(input),
            clearConsoleOutput: () => this.clearConsoleOutput(),
            switchTheme: (selectedTheme: selectedTheme) => this.switchTheme(selectedTheme),
            switchTab: (tab: availableTabs) => this.switchTab(tab)
        };
        this.state = { ...state };
    }

    switchTab(tab: availableTabs): void {
        const state = { ...this.state } as unknown as IState;
        state.workspace.currentTab = tab;

        this.setState({ ...state });
    }

    switchTheme(selectedTheme: selectedTheme): void {
        const state = { ...this.state } as unknown as IState;
        switch (selectedTheme) {
            case 'light':
                state.theme = DarkTheme;
                state.selectedTheme = 'dark';
                break;
            case 'dark':
                state.theme = LightTheme;
                state.selectedTheme = 'light';
            default:
                break;
        }

        this.setState({ ...state });
    }

    executeProgram() {
        const state = { ...this.state } as unknown as IState;

        const program = new Sonar(state.editor.textContent);

        let results = program.result;
        let logType = results instanceof Err ? 'err' : 'log';

        results = results instanceof Null || !!results == false ? '' : results.inspect().concat('\n');
        results = results.concat(program.logs.join('\n'));

        results = results.replace(/\s|\n/, '');
        state.console.result += '\n' + results;

        state.console.view.push(
            <div style={{
                color: logType == 'err' ? 'red' : state.theme.fontColor1,
            }}>
                {results}
            </div>
        );

        this.setState({ ...state });
    }

    updateEditor(input: string): void {
        const state = { ...this.state } as unknown as IState;
        state.editor.textContent = input;
        this.setState({ ...state });
    }

    clearConsoleOutput(): void {
        const state = { ...this.state } as unknown as IState;
        state.console.result = '';
        this.setState({ ...state });
    }

    render() {
        // create a shallow copy of this.state
        const context = { ...this.state };

        return (
            <AppContext.Provider value={{ ...context }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppContextProvider;