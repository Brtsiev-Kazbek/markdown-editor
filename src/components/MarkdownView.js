import React from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownView = ({ rawMarkdown }) => {
    return (
        <div className="markdown-view">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                { rawMarkdown }
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownView;