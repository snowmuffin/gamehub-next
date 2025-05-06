//Our Best Services
interface ourbest {
    id: number;
    heading: string;
    color: string;
    icon: string;
}
export const Ourbest: ourbest[] = [
    { id: 1, heading: "Design", color: "primary", icon: "pencil-ruler-2" },
    { id: 2, heading: "Development", color: "warning", icon: "settings-3" },
    { id: 3, heading: "Quality Tested", color: "info", icon: "shield-check" },
    { id: 4, heading: "Multiple Themes", color: "success", icon: "palette" },
    { id: 5, heading: "Customization", color: "danger", icon: "equalizer-2" },
    { id: 6, heading: "Multiple Demos", color: "secondary", icon: "dashboard" },
    { id: 7, heading: "Regular Updates", color: "teal", icon: "refresh" },
    { id: 8, heading: "Fully Responsive", color: "pink", icon: "smartphone" },
]

//Meet our amazing Team
interface amazing {
    id: number;
    heading: string;
    role: string;
    src1: string;
}
export const Amazingteam: amazing[] = [
    { id: 1, heading: "Charlie John", role: "HR Manager", src1: "../assets/images/media/landing/team/1.png" },
    { id: 2, heading: "Marlin Shane", role: "Team Lead", src1: "../assets/images/media/landing/team/2.png" },
    { id: 3, heading: "Angela Lia", role: "Project Manager", src1: "../assets/images/media/landing/team/3.png" },
    { id: 4, heading: "Stella Daisy", role: "Head of Department", src1: "../assets/images/media/landing/team/4.png" },
]

//Top Job Categories
interface job {
    id: number;
    heading: string;
    data: string;
}
export const JobCategory: job[] = [
    { id: 1, heading: "Product Design", data: "220" },
    { id: 2, heading: "Media", data: "325" },
    { id: 3, heading: "Marketing", data: "8457" },
    { id: 4, heading: "Project Managemen...", data: "754" },
    { id: 5, heading: "Accountant", data: "1245" },
    { id: 6, heading: "Customer Support", data: "261" },
]

//Featured Jobs
interface geature {
    id: number;
    heading: string;
    icon: string;
    year: string;
    src1: string;
    opening: string;
    heading1: string;
}
export const Featuredjobs: geature[] = [
    { id: 1, heading: " React Developer - Senior", icon: "reactjs", year: "2", src1: "../assets/images/company-logos/3.png", opening: "12", heading1: "Globii Co.PvT.Ld" },
    { id: 2, heading: "Vue Developer - Senior", icon: "vuejs", year: "2", src1: "../assets/images/company-logos/4.png", opening: "12", heading1: "Acmey Corporation.Ld" },
    { id: 3, heading: "Angular Developer - Senior", icon: "angularjs", year: "2", src1: "../assets/images/company-logos/5.png", opening: "12", heading1: "Doliy Software" },
    { id: 4, heading: " Customer Support - Freshers", icon: "angularjs", year: "0", src1: "../assets/images/company-logos/1.png", opening: "10", heading1: "Massi Internatinal" },
    { id: 5, heading: "Maketing Product", icon: "article", year: "2", src1: "../assets/images/company-logos/6.png", opening: "05", heading1: "Viham's Storage Ltd" },
    { id: 6, heading: " Civil Engineer", icon: "building-2", year: "2", src1: "../assets/images/company-logos/7.png", opening: "11", heading1: "Somany Infrastructures" },
]