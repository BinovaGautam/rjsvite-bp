import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { useEffect, useState } from "react";

import "./styles.css";


interface IBlockEditor {
    onChange: (value: any) => void;
    value: any;
    uploadFile: (file: any) => Promise<string>;

}


const BlockEditor =({
    onChange,
    value : defaultValue,
    uploadFile, 
}: any)=> {
   

    // Creates a new editor instance with some initial content.
    const editor = useCreateBlockNote({
      uploadFile
    });

    const handleChange = async () => {
        // Converts the editor's contents from Block objects to HTML and store to state.
        const html = await editor.blocksToHTMLLossy(editor.document);
        onChange && onChange(html);
    };

    // For initialization; on mount, convert the initial HTML to blocks and replace the default editor's content
    useEffect(() => {
        if(!editor || !defaultValue) return;
        async function loadInitialHTML() {
            const blocks = await editor.tryParseHTMLToBlocks(defaultValue);
            editor.replaceBlocks(editor.document, blocks);
        }
        loadInitialHTML();
    }, [editor]);

    return (
        <BlockNoteView 
         editor={editor} 
         onChange={handleChange} 
         className="editor min-h-36  w-full"
        theme="light"
         />
    );
}


export default BlockEditor;