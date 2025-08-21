import React from 'react'
import MarkdownPreview from "@uiw/react-markdown-preview";
import Loader from '../Loader';

function Reviewer({
    review,
    isGenerating = false,
}) {
    return (
        <div className='h-full w-1/2 relative text-2xl bg-black text-white overflow-y-auto '>
            {isGenerating ? (
                <Loader />
            ) : (
                <MarkdownPreview
                    source={review}
                    style={{ fontSize: "30px", minHeight: "100vh", padding: "20px" }}
                />
            )}
        </div>
    )
}

export default Reviewer