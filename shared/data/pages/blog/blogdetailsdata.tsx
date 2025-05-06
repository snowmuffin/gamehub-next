//Trending Categories
interface trending {
    id: number;
    data: string;
    color: string;
    heading: string;
    data1: string
}
export const Trending: trending[] = [
    { id: 1, data: "D", color: "secondary", heading: "UX Designing", data1: "21" },
    { id: 2, data: "H", color: "success", heading: "Health", data1: "16" },
    { id: 3, data: "F", color: "warning", heading: "Photography", data1: "06" },
    { id: 4, data: "D", color: "danger", heading: "Development", data1: "18" },
    { id: 5, data: "G", color: "primary", heading: "Gaming Apps", data1: "09" },
    { id: 6, data: "C", color: "secondary", heading: "Cosmetics", data1: "11" },
]

//Latest Posts
interface latestpost {
    id: number;
    src1: string;
    heading: string;
    date: string;
    time: string;
}
export const Latestpost: latestpost[] = [
    { id: 1, src1: "../../../assets/images/media/media-39.jpg", heading: "Travelling", date: "20,Oct 2023", time: " 03:34" },
    { id: 2, src1: "../../../assets/images/media/media-54.jpg", heading: "Photography", date: "12,Nov 2023", time: " 14:05" },
    { id: 3, src1: "../../../assets/images/media/media-25.jpg", heading: "Flower", date: " 05,Dec 2023", time: "20:00" },
    { id: 4, src1: "../../../assets/images/media/media-52.jpg", heading: "Light Energy", date: "01,Jan 2024 ", time: "08:20" },
]

//Related Tags
interface related {
    id: number;
    data: string;
}
export const RealtedTags: related[] = [
    { id: 1, data: "Mountain" },
    { id: 2, data: "Hill Bike" },
    { id: 3, data: "Hiking" },
    { id: 4, data: "Nature" },
    { id: 5, data: "Trees" },
    { id: 6, data: "waterfall" },
    { id: 7, data: "Vehicle" },
    { id: 8, data: "Forest" },
    { id: 9, data: "landscape" },
    { id: 10, data: "Nature Beauty" },
    { id: 11, data: "Beautify Photos" },
    { id: 12, data: "Photography" },
    { id: 13, data: "passion for nature" },
    { id: 14, data: "trending" },
    { id: 15, data: "lifestyle" },
    { id: 16, data: "nature art" },
    { id: 17, data: "artist" },
]
