import React, { createRef } from "react";
//import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
//import './marked.css';
//import { marked } from 'marked';
import Markdown from 'marked-react';

const styles = {
    height: 300,
    width: "80%"
}

const inlineCode = "`inline code`"
const codeBlock = "```"

const defaultText = 
`
# Heading level 1 
## Heading level 2
> blockquote
* list item
1. list item \n
**bold text** \n
[link](https:https://evasive-thumb-1234.surge.sh/) \n
${inlineCode} \n
${codeBlock} \n
block line one \n
block line two \n
${codeBlock}
![image](https://www.digitalocean.com/api/static-content/v1/images?src=%2F_next%2Fstatic%2Fmedia%2Fintro-to-cloud.d49bc5f7.jpeg&width=1920)
`;


function createMarkup(html) {
    return {__html: html};
}

class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: defaultText
        };
        this.preview = createRef();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value        
        });
    }

    componentDidMount() {
//        this.preview.current.innerHTML = marked.parse(this.state.input);
    }


    render() {

        return (
            <div>
                <textarea id="editor" style={styles} onChange={this.handleChange} value={this.state.input}></textarea>
                <div id="preview"><Markdown>{this.state.input}</Markdown></div>

            </div>
        )
    }
}


export default MarkdownPreviewer;