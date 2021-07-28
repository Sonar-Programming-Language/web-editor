import * as React from 'react';

import { FaPlay, FaEraser } from 'react-icons/fa';
import { AppContext } from 'context';
import ConsoleButton from 'components/atoms/ConsoleButton';
import { IState } from 'context/interfaces';

interface Props { }


const RightPane = (props: Props) => {
    const context = React.useContext(AppContext);

    return (
        <div className={`flex flex-col flex-1 h-full`}>
            <div className={`flex flex-row-reverse px-4 xxs:pb-1 xxs:pt-2 sm:pb-1 sm:pt-1 items-center`} style={{ background: context.theme.elevation1, borderBottom: `2px solid ${context.theme.border1}` }}>
                <ConsoleButton
                    icon={
                        <FaPlay
                            size={context.theme.iconSize1}
                            color={`inherit`}
                        />
                    }
                    onClick={() => context.executeProgram()}
                    marginX={10}
                />
                <ConsoleButton
                    icon={
                        <FaEraser
                            size={context.theme.iconSize1 + 2}
                            color={`inherit`}
                        />
                    }
                    onClick={() => context.clearConsoleOutput()}
                    marginX={10}
                />
                <button
                    className={`btn-no-outline px-3 rounded-lg text-xs flex flex-row justify-center items-center border border-blue-500`}
                    style={{ background: context.theme.elevation2, color: context.theme.fontColor1 }}
                    onClick={() => {
                        const state = { ...context } as unknown as IState;
                        state.editor.isEditorAutoRunOn = !state.editor.isEditorAutoRunOn;
                        context.updateContext(state);
                    }}
                >
                    Auto Run: {context.editor.isEditorAutoRunOn ? 'On' : 'False'}
                </button>
            </div>
            <div className={`h-full flex px-2`} style={{ background: context.theme.elevation2, fontSize: 12, color: context.theme.fontColor1 }}>
                <pre>
                    {/* {context.console.result ?? ''} */}
                    {context.console.view}
                </pre>
            </div>
        </div>
    );
}

export default RightPane;