interface invoice {
  id: number;
  src: string;
  name: string;
  mail: string;
  invoiceid: string;
  amount: string;
  status: string;
  date: string;
  duedate: string;
  color: string;
}
export const Manageinvoices: invoice[] = [
  {
    id: 1,
    src: "../../../assets/images/faces/11.jpg",
    name: "James Lucas",
    mail: "jameslucas2416@gmail.com",
    invoiceid: "#SPK12032901",
    amount: "$212.45",
    status: "Paid",
    date: "25,Nov 2023",
    duedate: "25,Dec 2023",
    color: "success"
  },
  {
    id: 2,
    src: "../../../assets/images/faces/7.jpg",
    name: "Suzika Stallone",
    mail: "suzikastallone3214@gmail.com",
    invoiceid: "#SPK12032912",
    amount: "$512.99",
    status: "Pending",
    date: "13,Nov 2023",
    duedate: "13,Dec 2023",
    color: "warning"
  },
  {
    id: 3,
    src: "../../../assets/images/faces/15.jpg",
    name: "Roman Killon",
    mail: "romankillon143@gmail.com",
    invoiceid: "#SPK12032945",
    amount: "$2199.49",
    status: "Overdue",
    date: "30,Nov 2023",
    duedate: "30,Dec 2023	",
    color: "danger"
  },
  {
    id: 4,
    src: "../../../assets/images/faces/12.jpg",
    name: "Charlie Davieson",
    mail: "charliedavieson@gmail.com",
    invoiceid: "#SPK12032922",
    amount: "$1569.99",
    status: "Paid",
    date: "18,Nov 2023",
    duedate: "18,Dec 2023",
    color: "success"
  },
  {
    id: 4,
    src: "../../../assets/images/faces/4.jpg",
    name: "Selena Deoyl",
    mail: "selenadeoyl114@gmail.com",
    invoiceid: "#SPK12032932",
    amount: "$4,873.99",
    status: "Due By 1 Day",
    date: "18,Nov 2023",
    duedate: "18,Dec 2023	",
    color: "primary"
  },
  {
    id: 5,
    src: "../../../assets/images/faces/7.jpg",
    name: "Kiara Advensh",
    mail: "kiaraadvensh87@gmail.com",
    invoiceid: "#SPK12032978",
    amount: "$1923.99",
    status: "Paid",
    date: "02,Nov 2023",
    duedate: "18,Dec 2023	",
    color: "success"
  },
  {
    id: 6,
    src: "../../../assets/images/faces/9.jpg",
    name: "Hunter Eli",
    mail: "huntereli@gmail.com",
    invoiceid: "#SPK12032919",
    amount: "$1,623.99",
    status: "Paid",
    date: "15,Nov 2023",
    duedate: "15,Dec 2023",
    color: "success"
  },
  {
    id: 7,
    src: "../../../assets/images/faces/13.jpg",
    name: "Tommy Noel",
    mail: "Tommynoel@gmail.com",
    invoiceid: "#SPK12032931",
    amount: "$3,423.99",
    status: "Pending",
    date: "21,Nov 2023",
    duedate: "21,Dec 2023",
    color: "warning"
  },
  {
    id: 8,
    src: "../../../assets/images/faces/8.jpg",
    name: "Hannah",
    mail: "hannah555@gmail.com",
    invoiceid: "#SPK12032958",
    amount: "$2,982.99",
    status: "Paid",
    date: "15,Oct 2023",
    duedate: "15,Nov 2023",
    color: "success"
  }
];
