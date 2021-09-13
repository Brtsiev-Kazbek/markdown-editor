import React from 'react';
import './styles.css'

const Editor = ({ title, children }) => {
    return (
        <div className="editor">
            <div className="editor__title">
                { title }
            </div>
            <div className="editor__container">
                { children }
            </div>
        </div>
    );
};

export default Editor;