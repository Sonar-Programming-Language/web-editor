import * as React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { AppContext } from "context";

require('codemirror/lib/codemirror.css');
require('codemirror/theme/dracula.css'); // dark-mode
require('codemirror/theme/material.css'); // dark-mode
require('codemirror/theme/neat.css'); // light-mode

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/swift/swift"; // currently in-use

type Props = {
    onChange(input: string): void;
};

const Editor = (props: Props): React.ReactElement => {
    const context = React.useContext(AppContext);

    if (context.selectedTheme == 'light') {
        return (
            <div className={`h-full bg-gray-200 flex flex-1 w-full`}>
                <CodeMirror
                    className={`flex-1 w-100 h-full min-h-full`}
                    value={context.editor.textContent}
                    autoCursor={true}
                    options={{
                        mode: "swift",
                        theme: 'neat',
                        lineNumbers: true,
                        readOnly: context.editor.isEditorReadOnlyOn
                    }}
                    onChange={(_editor, _data, value): void => {
                        props.onChange && props.onChange(value);
                    }}
                    autoScroll={true}
                />
            </div>
        );
    } else {
        return (
            <CodeMirror
                className={`flex-1 w-100 h-full min-h-full`}
                value={context.editor.textContent}
                autoCursor={true}
                options={{
                    mode: "swift",
                    theme: 'material',
                    lineNumbers: true,
                    readOnly: context.editor.isEditorReadOnlyOn
                }}
                onChange={(_editor, _data, value): void => {
                    props.onChange && props.onChange(value);
                }}
                autoScroll={true}
            />
        );
    }
}

export default Editor;
