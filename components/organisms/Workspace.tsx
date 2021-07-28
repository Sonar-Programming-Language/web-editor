import React from 'react';

import VerticalDivider from "components/atoms/VerticalDivider";
import LeftPane from "components/molecules/LeftPane";
import RightPane from "components/molecules/RightPane";
import { AppContext } from 'context';
import { availableTabs } from 'context/interfaces';


interface Props { }


const Workspace = (props: Props) => {
    const context = React.useContext(AppContext);

    const handleTabSwitch = (tab: availableTabs) => context.switchTab(tab);

    return (
        <main className={`bg-white flex flex-1 sm:flex-row xxs:flex-col`}>
            <div
                className={`xxs:block sm:hidden text-red-700 pt-2 px-2`}
                style={{
                    background: context.theme.depression1
                }}
            >
                <button
                    className={`px-3 py-1 text-sm border shadow-inner rounded-md border-b-0 rounded-b-none btn-no-outline`}
                    style={{
                        borderColor: context.theme.border1,
                        background: context.workspace.currentTab == 'editor' ? '#aaa' : '#444',
                        color: context.theme.fontColor1
                    }}
                    onClick={() => handleTabSwitch('editor')}
                >
                    Editor
                </button>
                <button
                    className={`px-3 py-1 text-sm border shadow-inner rounded-md border-b-0 rounded-b-none btn-no-outline`}
                    style={{
                        borderColor: context.theme.border1,
                        background: context.workspace.currentTab == 'terminal' ? '#aaa' : '#444',
                        color: context.theme.fontColor1
                    }}
                    onClick={() => handleTabSwitch('terminal')}
                >
                    Terminal
                </button>
            </div>
            <div className={`flex-1 sm:h-full ${context.workspace.currentTab == 'editor' ? 'xxs:flex' : 'xxs:hidden'} sm:flex`}>
                <LeftPane />
            </div>
            <VerticalDivider />
            <div className={`flex-1 ${context.workspace.currentTab == 'terminal' ? 'xxs:flex' : 'xxs:hidden'} sm:flex`}>
                <RightPane />
            </div>
        </main>
    );
}

export default Workspace;