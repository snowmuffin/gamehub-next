//Avatar Sizes
interface avatar {
    id:number;
    src:string;
    size:string;
}
export const avtarsize:avatar[] = [
    { id: 1, src: "../../assets/images/faces/4.jpg", size: "xs" },
    { id: 2, src: "../../assets/images/faces/5.jpg", size: "sm" },
    { id: 3, src: "../../assets/images/faces/6.jpg", size: "md" },
    { id: 4, src: "../../assets/images/faces/7.jpg", size: "lg" },
    { id: 5, src: "../../assets/images/faces/8.jpg", size: "xl" },
    { id: 6, src: "../../assets/images/faces/9.jpg", size: "xxl" },
];

//Avatar With Icons
interface Avataricon {
    id:number;
    src:string;
    size:string;
    data:string;
    color:string;
}
export const avtaricon:Avataricon[] = [
    { id: 1, src: "../../assets/images/faces/2.jpg", size: "xs", data: "camera", color: "success" },
    { id: 2, src: "../../assets/images/faces/3.jpg", size: "sm", data: "edit", color: "secondary" },
    { id: 3, src: "../../assets/images/faces/14.jpg", size: "md", data: "plus", color: "warning" },
    { id: 4, src: "../../assets/images/faces/13.jpg", size: "lg", data: "edit", color: "info" },
    { id: 5, src: "../../assets/images/faces/15.jpg", size: "xl", data: "camera", color: "success" },
    { id: 6, src: "../../assets/images/faces/9.jpg", size: "xxl", data: "plus", color: "danger" },
];

//Avatar With Numbers
interface Avatarnumber {
    id:number;
    src:string;
    size:string;
    data:string;
    color:string;
}
export const avtarnumber:Avatarnumber[] = [
    { id: 1, src: "../../assets/images/faces/2.jpg", size: "xs", data: "2", color: "primary" },
    { id: 2, src: "../../assets/images/faces/3.jpg", size: "sm", data: "5", color: "secondary" },
    { id: 3, src: "../../assets/images/faces/14.jpg", size: "md", data: "1", color: "warning" },
    { id: 4, src: "../../assets/images/faces/13.jpg", size: "lg", data: "7", color: "info" },
    { id: 5, src: "../../assets/images/faces/15.jpg", size: "xl", data: "3", color: "success" },
    { id: 6, src: "../../assets/images/faces/9.jpg", size: "xxl", data: "9", color: "danger" },
];

//Stacked Avatars
interface Stacked {
    id:number;
    src:string;
}
export const stackedavatar:Stacked[] = [
    { id: 1, src: "../../assets/images/faces/2.jpg" },
    { id: 2, src: "../../assets/images/faces/8.jpg" },
    { id: 3, src: "../../assets/images/faces/2.jpg" },
    { id: 4, src: "../../assets/images/faces/10.jpg" },
    { id: 5, src: "../../assets/images/faces/4.jpg" },
    { id: 6, src: "../../assets/images/faces/13.jpg" },
];
