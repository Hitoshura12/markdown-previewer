import React,{Component} from 'react'
import Previewer from "./Previewer";
const marked = '# Welcome to my React Markdown Previewer!\n' +
    '\n' +
    '## This is a sub-heading...\n' +
    '### And here\'s some other cool stuff:\n' +
    '  \n' +
    'Heres some code, `<div></div>`, between 2 backticks.\n' +
    '\n' +
    '```\n' +
    '// this is multi-line code:\n' +
    '\n' +
    'function anotherExample(firstLine, lastLine) {\n' +
    '  if (firstLine == \'```\' && lastLine == \'```\') {\n' +
    '    return multiLineCode;\n' +
    '  }\n' +
    '}\n' +
    '```\n' +
    '  \n'+
    'You can also make text **bold**... whoa!\n' +
    'Or _italic_.\n' +
    'Or... wait for it... **_both!_**\n' +
    'And feel free to go crazy ~~crossing stuff out~~.\n' +
    '\n' +
    'There\'s also [links](https://www.freecodecamp.com), and\n' +
    '> Block Quotes!\n' +
    '\n' +
    'And if you want to get really crazy, even tables:\n' +
    '\n' +
    'Wild Header | Crazy Header | Another Header?\n' +
    '------------ | ------------- | ------------- \n' +
    'Your content can | be here, and it | can be here....\n' +
    'And here. | Okay. | I think we get it.\n' +
    '\n' +
    '- And of course there are lists.\n' +
    '  - Some are bulleted.\n' +
    '     - With different indentation levels.\n' +
    '        - That look like this.\n' +
    '\n' +
    'Hello..world' +

    '\n' +
    '1. And there are numbererd lists too.\n' +
    '1. Use just 1s if you want! \n' +
    '1. But the list goes on...\n' +
    '- Even if you use dashes or asterisks.\n' +
    '* And last but not least, let\'s not forget embedded images:\n' +
    '\n' +
    '![React Logo w/ Text](https://goo.gl/Umyytc)\n'
class UserInput extends Component{

    constructor(props) {
        super(props);
        this.state={
            markdown: marked
        }
    }

changeInput(e){
        this.setState({
           markdown:e.target.value
        })
}

    render() {
        return (

            <div className="row">
                <div className="col-md-12">
            <div id="markdown" className="markdown">
                <textarea type="text" id="editor" className="editor" value={this.state.markdown} onChange={this.changeInput.bind(this)}/>
            </div>
                <div className="col-md-12">
            <Previewer markdown={this.state.markdown}/>
            </div>
                </div>
            </div>
        );
    }

}

export default UserInput