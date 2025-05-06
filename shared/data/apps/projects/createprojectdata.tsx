interface Multipleselectdata {
  value: string;
  label: string;
}
export const multiselectdata: Multipleselectdata[] = [
  { value: 'Angelina May', label: 'Angelina May' },
  { value: 'Kiara advain', label: 'Kiara advain' },
  { value: 'Hercules Jhon', label: 'Hercules Jhon' },
  { value: 'Mayor Kim', label: 'Mayor Kim' },
  { value: 'Alexa Biss', label: 'Alexa Biss' },
  { value: 'Karley Dia', label: 'Karley Dia' },
  { value: 'Darren Sami', label: 'Darren Sami' },
  { value: 'Elizabeth', label: 'Elizabeth' },
  { value: 'Bear Gills', label: 'Bear Gills' },
  { value: 'Alex Carey', label: 'Alex Carey' }
];
interface multiselectdata1 {
  value: number;
  label: string;
}
export const Multipleselectdata: multiselectdata1[] = [
  { value: 1, label: 'High' },
  { value: 2, label: 'Low' },
  { value: 3, label: 'Medium' },
];

interface multiselectdata2 {
  value: number;
  label: string;
}
export const Multipleselectdata1: multiselectdata2[] = [
  { value: 1, label: 'Completed' },
  { value: 2, label: 'Inprogress' },
  { value: 3, label: 'On-hold' },
];

import dynamic from "next/dynamic";
import { Component } from "react";
import { Quill } from "react-quill";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const defaultContent = `
  lorem ipsum Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur semper ipsum lacus, sit amet faucibus nibh semper accumsan. Duis purus dui, cursus eu imperdiet eget, auctor non ligula. Morbi interdum imperdiet libero at pulvinar. Suspendisse quis vestibulum turpis. Suspendisse potenti. Nunc at libero ut sem elementum laoreet. Suspendisse potenti. Cras lacinia erat augue, quis blandit enim tincidunt eu. Proin posuere luctus tempus.
<br/>
<br/>

  1. Define the project's purpose, objectives,<br/>
  2. Create a detailed plan outlining tasks, milestones, timelines, and resource allocation.<br/>
  3. Break down project tasks into a detailed list, including dependencies and priorities.<br/>
  4. Define each team member's role and responsibilities to avoid confusion.<br/>
  5. Develop a plan for testing and quality assurance
  `;

interface Editor3State {
  editorHtml: string;
  theme: string;
}

export class Editor3 extends Component<{}, Editor3State> {
  static modules = {
    // ... (unchanged)
  };

  static formats = [
    // ... (unchanged)
  ];

  constructor(props: {}) {
    super(props);
    this.state = { editorHtml: defaultContent, theme: "snow" };
    this.handleChange = this.handleChange.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }

  handleChange(html: string) {
    this.setState({ editorHtml: html });
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
          value={this.state.editorHtml}
          modules={Editor3.modules}
          formats={Editor3.formats}
          bounds={".app"}
          placeholder="Enter your text here"
        />
      </div>
    );
  }
}

export default Editor3;

