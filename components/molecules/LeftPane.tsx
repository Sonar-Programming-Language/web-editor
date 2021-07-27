import * as React from 'react';
import dynamic from 'next/dynamic';
import { AppContext } from 'context';
import { IState } from 'context/interfaces';

const Editor = dynamic(import('components/atoms/Editor'), { ssr: false });


const LeftPane = (props: any) => {
    const context = React.useContext(AppContext);

    return (
        <div className={`flex flex-1 flex-col h-full`}>
            <Editor onChange={val => context.updateEditor(val)} />
        </div>
    );
}

export default LeftPane;