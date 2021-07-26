import {RichText} from "@wordpress/block-editor";

export class WFRichTextField extends React.Component {
  render() {
    return <RichText value={this.props.value}
                     placeholder={this.props.placeholder}
                     onChange={this.props.onChange}/>
  }
}