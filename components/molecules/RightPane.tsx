import * as React from 'react';

import { FaPlay, FaEraser } from 'react-icons/fa';
import { AppContext } from 'context';
import ConsoleButton from 'components/atoms/ConsoleButton';

interface Props { }


const RightPane = (props: Props) => {
    const context = React.useContext(AppContext);

    return (
        <div className={`flex flex-col flex-1 h-full`}>
            <div className={`flex flex-row-reverse px-4 pb-0 pt-1 items-center`} style={{ background: context.theme.elevation1, borderBottom: `2px solid ${context.theme.border1}` }}>
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
            </div>
            <div className={`h-full flex px-1`} style={{ background: context.theme.elevation2, fontSize: 12, color: context.theme.fontColor1 }}>
                <pre>
                    {context.console.result ?? ''}
                </pre>
            </div>
        </div>
    );
}

export default RightPane;