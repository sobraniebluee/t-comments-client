import React, {useRef} from "react";
import EditorJS, {OutputData} from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";

interface EditorProps {
    onChange: (blocks: OutputData['blocks']) => void
    initialBlocks?: OutputData['blocks']
}

export const Editor: React.FC<EditorProps> = ({initialBlocks,onChange }) => {

    const editorRef = useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const editor = new EditorJS({
            holder: editorRef.current!,
            data: {
                blocks: (initialBlocks && initialBlocks.length > 0) ? initialBlocks : []
            },
            placeholder: 'Enter your text...',
            tools: {
                headers: {
                    class:Header,
                    config: {
                        defaultLevel:2,
                        levels: [2]
                    }
                }
            },
            async onChange() {
                const {blocks} = await editor.save()
                console.log(blocks)
                onChange(blocks)
            }
        })
        return () => {
            editor.isReady
                .then(() => {
                    editor.destroy()
                    console.log("WriteForm unmount")
                })
                .catch((e) => console.log("Error clean editor "))
        }
    }, [])

    return (
        (<div ref={editorRef} id="editor" style={{width:"100%"}}/>)
    )
}

