//Blog
interface blogdata {
  id: number;
  src1: string;
  heading: string;
  data: string;
}
export const Blogdata: blogdata[] = [
  { id: 1, src1: "../../../assets/images/media/media-73.jpg", heading: "Know nature closely", data: "Nature" },
  { id: 2, src1: "../../../assets/images/media/media-74.jpg", heading: "Playing your favorite sports", data: "Sports" },
  { id: 3, src1: "../../../assets/images/media/media-75.jpg", heading: "Staying Healthy", data: "Food" }
];

interface blogdata1 {
  id: number;
  src1: string;
  heading: string;
  date: string;
  time: string;
}
export const Blogdata1: blogdata1[] = [
  {
    id: 1,
    src1: "../../../assets/images/media/media-39.jpg",
    heading: "Travelling",
    date: "20,Oct 2023 ",
    time: " 03:34"
  },
  {
    id: 2,
    src1: "../../../assets/images/media/media-54.jpg",
    heading: "Photography",
    date: "12,Nov 2023",
    time: "14:05"
  },
  { id: 3, src1: "../../../assets/images/media/media-25.jpg", heading: "Flowers", date: "05,Dec 2023", time: "20:00" },
  {
    id: 4,
    src1: "../../../assets/images/media/media-52.jpg",
    heading: "Light Energy",
    date: " 01,Jan 2024",
    time: "08:20"
  }
];
