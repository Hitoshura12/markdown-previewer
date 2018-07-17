import React,{Component} from 'react'
import marked from 'marked'

class Previewer extends Component{

   createMarkup() {

       // ALLOWS LINE BREAKS WITH RETURN BUTTON
       marked.setOptions({
           breaks: true,
       });

// INSERTS target="_blank" INTO HREF TAGS
       const renderer = new marked.Renderer();
      

       renderer.link = function (href, title, text) {
           return `<a target="_blank" href="${href}">${text}` + '</a>';
       }

        return {__html:marked(this.props.markdown)}
    }


    render() {
        return (


            <div className="well" id="preview" dangerouslySetInnerHTML={this.createMarkup()} >
            </div>


        );
    }


}

export default Previewer