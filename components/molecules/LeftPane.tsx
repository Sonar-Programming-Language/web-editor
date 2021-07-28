import * as React from 'react';
import dynamic from 'next/dynamic';
import { AppContext } from 'context';
import { IState } from 'context/interfaces';

const Editor = dynamic(import('components/atoms/Editor'), { ssr: false });


const LeftPane = (props: any) => {
    const context = React.useContext(AppContext);

    const handleEditorTextChange = (input: string) => {
        context.updateEditor(input);

        if (context.editor.isEditorAutoRunOn) {
            context.executeProgram();
        }
    }

    return (
        <div className={`flex flex-1 flex-col h-full`}>
            <Editor onChange={val => handleEditorTextChange(val)} />
        </div>
    );
}

export default LeftPane;