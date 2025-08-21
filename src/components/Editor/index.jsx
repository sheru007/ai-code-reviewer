import React, {useState} from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

function Editor() {
  const [code, setCode] = useState("");
  return (
    <div className='h-full w-1/2 relative text-2xl bg-black text-white '>
      <CodeMirror
        minHeight="100vh"
        value={code}
        onChange={setCode}
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        style={{
          fontSize: "30px",
        }}
      />
    </div>
  )
}

export default Editor