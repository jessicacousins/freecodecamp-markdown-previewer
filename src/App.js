import React, { useState } from "react";
import { marked } from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState(`# Heading 1
## Heading 2
[Link to Google](https://www.google.com)
\`inline code\`
\`\`\`
// Code Block
const greeting = "Hello World!!!";
console.log(greeting);
\`\`\`
### Heading 3
- List Item 1
- List Item 2
- List Item 3
- List Item 4

#### Heading 4
> Blockquote

##### Heading 5

![Image](https://via.placeholder.com/150)

**Bold Text - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, doloribus.**`);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  const html = marked(markdown);

  return (
    <div className="markdown-container">
      <h1 className="text-center mt-4" style={{ color: "#fff" }}>
        Markdown Previewer
      </h1>
      <div className="row">
        <div className="col-md-6">
          <div className="editor-container">
            <h2 className="text-center">Editor</h2>
            <textarea
              id="editor"
              onChange={handleInputChange}
              value={markdown}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="preview-container">
            <h2 className="text-center">Preview</h2>
            <div id="preview" dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
