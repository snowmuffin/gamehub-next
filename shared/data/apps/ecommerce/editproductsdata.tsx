import dynamic from "next/dynamic";
import { Component } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill styles

interface EditorProps {
  placeholder?: string;
}

interface EditorState {
  producteditorHtml: string;
  theme: string;
}
const defaultContent = `
<ul>
<li>Care Instructions: Machine Wash</li>
<li>Neckline: The pullover is framed with a Crew Neck</li>
<li>Fit Type: Regular Fit</li>
<li>Long Sleeves: The pullover is designed with Long Sleeves.</li>
<li>Playtime: Enjoy extended usage with long-lasting battery life.</li>
<li>Sound Quality: Delivers exceptional audio quality for an immersive experience.</li>
<li>Design: Sleek and modern design with adjustable components for a customized fit.</li>

</ul>`;

class Producteditor extends Component<EditorProps, EditorState> {
  static modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  };

  static formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  constructor(props: EditorProps) {
    super(props);
    this.state = { producteditorHtml: defaultContent, theme: 'snow' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html: string) {
    this.setState({ producteditorHtml: html });
  }

  handleThemeChange(newTheme: string) {
    this.setState({ theme: newTheme });
  }

  render() {
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.producteditorHtml}
          modules={Producteditor.modules}
          formats={Producteditor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default Producteditor;
