import React from 'react';

const MarkdownInput = ({ text, onChange }) => {
    return (
        <div className="markdown-input">
            <textarea onChange={onChange} className="markdown-input" value={text} />
        </div>
    );
};

export default MarkdownInput;