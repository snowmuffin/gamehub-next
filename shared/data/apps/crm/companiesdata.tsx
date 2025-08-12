interface companydata {
  id: string;
  src1: string;
  src2: string;
  name: string;
  score: string;
  mail: string;
  cell: string;
  badge: string;
  text1: string;
  text2: string;
  color: string;
  class: string;
}

export const Companydata: companydata[] = [
  {
    id: "1",
    src1: "../../../assets/images/faces/4.jpg",
    src2: "../../../assets/images/company-logos/1.png",
    name: "Kingston",
    score: "845",
    mail: "texistechnologies471@gmail.com",
    cell: "4777-54755-771",
    badge: "Corporate",
    text1: "Information Technology",
    text2: "Information Technology",
    color: "primary-transparent",
    class: ""
  },
  {
    id: "2",
    src1: "../../../assets/images/faces/12.jpg",
    src2: "../../../assets/images/company-logos/3.png",
    name: "Noel",
    score: "451",
    mail: "marbelsintechsolution9@gmail.com",
    cell: " 8741-8547-5661",
    badge: "Small Business",
    text1: "Telecommunications",
    text2: "Telecommunications",
    color: "danger-transparent",
    class: ""
  },
  {
    id: "3",
    src1: "../../../assets/images/faces/14.jpg",
    src2: "../../../assets/images/company-logos/4.png",
    name: "Sandy",
    score: "547",
    mail: "classicmarketing01@gmail.com",
    cell: " 9874-7742-3220",
    badge: "Micro Business",
    text1: "Logistics",
    text2: "Logistics",
    color: "success-transparent",
    class: ""
  },
  {
    id: "4",
    src1: "../../../assets/images/faces/6.jpg",
    src2: "../../../assets/images/company-logos/5.png",
    name: "Juliana",
    score: "774",
    mail: "indusakisservices74@gmail.com",
    cell: " 1200-2520-5884",
    badge: "Startup",
    text1: "Information Technology",
    text2: "Information Technology",
    color: "light",
    class: "text-default"
  },
  {
    id: "5",
    src1: "../../../assets/images/faces/8.jpg",
    src2: "../../../assets/images/company-logos/6.png",
    name: "Silvia",
    score: "145",
    mail: "internatinalindus04@gmail.com",
    cell: "1200-2520-5884",
    badge: "Large Enterprise",
    text1: "Professional Services",
    text2: "Professional Services",
    color: "pink-transparent",
    class: ""
  },
  {
    id: "6",
    src1: "../../../assets/images/faces/9.jpg",
    src2: "../../../assets/images/company-logos/7.png",
    name: "James Lucas",
    score: "164",
    mail: "conventionprime47@gmail.com",
    cell: " 8821-5785-5742",
    badge: "Small Business",
    text1: "Education",
    text2: "Education",
    color: "danger-transparent",
    class: ""
  },
  {
    id: "7",
    src1: "../../../assets/images/faces/15.jpg",
    src2: "../../../assets/images/company-logos/8.png",
    name: "Stuart",
    score: "245",
    mail: "pridecorporation66@gmail.com",
    cell: "3582-8151-8452",
    badge: "Corporate",
    text1: "Telecommunications",
    text2: "Telecommunications",
    color: "primary-transparent",
    class: ""
  },
  {
    id: "8",
    src1: "../../../assets/images/faces/1.jpg",
    src2: "../../../assets/images/company-logos/9.png",
    name: "Alexia",
    score: "654",
    mail: "manishsmanufactures44@gmail.com",
    cell: "4711-1242-0021",
    badge: "Medium Size",
    text1: "Manufacturing",
    text2: "Manufacturing",
    color: "warning-transparent",
    class: ""
  },
  {
    id: "9",
    src1: "../../../assets/images/faces/3.jpg",
    src2: "../../../assets/images/company-logos/10.png",
    name: "Julinia",
    score: "122",
    mail: "travelsservices641@gmail.com",
    cell: "8451-5484-8885",
    badge: "Micro Business",
    text1: "Healthcare",
    text2: "Healthcare",
    color: "success-transparent",
    class: ""
  },
  {
    id: "10",
    src1: "../../../assets/images/faces/9.jpg",
    src2: "../../../assets/images/company-logos/2.png",
    name: "George",
    score: "144",
    mail: "hyrakentechnologies474@gmail.com",
    cell: "8744-5811-5874",
    badge: "Startup",
    text1: "Information Technology",
    text2: "Information Technology",
    color: "light",
    class: "text-default"
  }
];

interface selectdata1 {
  value: string;
  label: string;
}

export const Selectdata1: selectdata1[] = [
  { value: "Company Size", label: "Company Size" },
  { value: "Corporate", label: "Corporate" },
  { value: "Small Business", label: "Small Business" },
  { value: "Micro Business", label: "Micro Business" },
  { value: "Startup", label: "Startup" },
  { value: "Large Enterprise", label: "Large Enterprise" },
  { value: "Medium Size", label: "Medium Size" }
];

interface selectdata2 {
  value: string;
  label: string;
}
export const Selectdata2: selectdata2[] = [
  { value: "Select Insustry", label: "Select Insustry" },
  { value: "Information Technology", label: "Information Technology" },
  { value: "Telecommunications", label: "Telecommunications" },
  { value: "Logistics", label: "Logistics" },
  { value: "Professional Services", label: "Professional Services" },
  { value: "Education", label: "Education" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Healthcare", label: "Healthcare" }
];
