import React from 'react'
import MarkdownInput from "./components/MarkdownInput";
import MarkdownView from "./components/MarkdownView";



function App() {
    const template = `A paragraph with *emphasis* and **strong importance**.
\\
\\
Lists
* [ ] todo
* [x] done
\\
\\
A table:

| a | b | c |
| - | - | - |
|Hello|from|tables|`;

    const [text, setText] = React.useState(template);
    const catchTyping = (e) => setText(e.target.value)

  return (
    <div className="App">
      <div className="container">
        <MarkdownInput onChange={catchTyping} text={text}/>
        <MarkdownView rawMarkdown={text}/>
      </div>
    </div>
  );
}

export default App;
