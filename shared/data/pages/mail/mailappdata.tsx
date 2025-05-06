interface mailoption {
    value: string;
    label: string;
}
export const Mailoptions: mailoption[] = [
    { value: 'jay@gmail.com', label: 'jay@gmail.com' },
    { value: 'kia@gmail.com', label: 'kia@gmail.com' },
    { value: 'don@gmail.com', label: 'don@gmail.com' },
    { value: 'kimo@gmail.com', label: 'kimo@gmail.com' },
];
interface mailsdata {
    id: string;
    class: string;
    src: string;
    name: string;
    title: string;
    time: string;
    icon: string;
    star: string;
    badge: string;
    color: string;
    active: string;
    data: string;
}
export const Mailsdata: mailsdata[] = [
    { id: '1', class: '', src: "../../../assets/images/faces/5.jpg", name: 'Kingston', title: 'Weekly Newsletter: Tech Insights and Updates', time: '6:15AM', icon: 'ri-attachment-2 align-middle fs-12', star: 'true', badge: '', color: '', active: '', data: "Vestibulum fringilla dictum tellus sodales interdum. Sed ornare sed ex sed lacinia. Nam vitae nisi bibendum, pharetra augue qui" },
    { id: '2', class: 'defaultChecked', src: "../../../assets/images/faces/12.jpg", name: 'Roberto', title: 'Exclusive Offers Inside! Limited-Time Deals Await You', time: '03:00AM', icon: '', star: '', badge: '', color: '', active: 'active', data: "Vestibulum fringilla dictum tellus sodales interdum. Sed ornare sed ex sed lacinia. Nam vitae nisi bibendum, pharetra augue qui" },
    { id: '3', class: '', src: "../../../assets/images/faces/14.jpg", name: 'Robin Keith', title: 'Please Verify Your Information', time: 'Yesterday, 05:23AM', icon: '', star: '', badge: 'Promotion', color: 'success', active: '', data: "Praesent non varius leo, sit amet viverra mauris. Etiam id dapibus tellus. Morbi eget mollis enim." },
    { id: '4', class: 'defaultChecked', src: "../../../assets/images/faces/7.jpg", name: 'Juliana', title: 'Stay Informed with Our Latest Articles', time: '24 Oct, 5:45PM', icon: '', star: '', badge: 'Social', color: 'primary', active: '', data: "Praesent non varius leo, sit amet viverra mauris. Etiam id dapibus tellus. Morbi eget mollis enim." },
    { id: '5', class: '', src: "../../../assets/images/faces/15.jpg", name: 'Harvey', title: 'Your Subscription Renewal Reminder', time: '08 Jan, 06:15AM', icon: '', star: 'true', badge: '', color: '', active: '', data: "Praesent non varius leo, sit amet viverra mauris. Etiam id dapibus tellus. Morbi eget mollis enim." },
    { id: '6', class: '', src: "../../../assets/images/faces/16.jpg", name: 'Tommy Stuart', title: 'New Product Launch', time: '15 Jan, 05:11AM', icon: '', star: 'true', badge: 'Personal', color: 'danger', active: '', data: "Praesent non varius leo, sit amet viverra mauris. Etiam id dapibus tellus. Morbi eget mollis enim." },
    { id: '7', class: '', src: "../../../assets/images/faces/3.jpg", name: 'Daisy', title: 'Sneak Peek into Our Spring Collection', time: '08 Jan, 09:15AM', icon: '', star: '', badge: '', color: '', active: '', data: "Praesent non varius leo, sit amet viverra mauris. Etiam id dapibus tellus. Morbi eget mollis enim." },
    { id: '8', class: '', src: "../../../assets/images/faces/13.jpg", name: 'Jimmy', title: 'Upgrade Your Membership Today', time: '19 Jan, 09:18PM', icon: '', star: '', badge: '', color: '', active: '', data: "Praesent non varius leo, sit amet viverra mauris. Etiam id dapibus tellus. Morbi eget mollis enim." },
];

interface imagesdata {
    id: number;
    src: string;
    name: string;
}
export const Imagesdata: imagesdata[] = [
    { id: 1, src: "../../../assets/images/faces/5.jpg", name: 'Sujika' },
    { id: 2, src: "../../../assets/images/faces/7.jpg", name: 'Samantha May' },
    { id: 3, src: "../../../assets/images/faces/4.jpg", name: 'Brenda' },
    { id: 4, src: "../../../assets/images/faces/8.jpg", name: 'Monika' },
    { id: 5, src: "../../../assets/images/faces/3.jpg", name: 'Kiara Jah' },
    { id: 6, src: "../../../assets/images/faces/11.jpg", name: 'Sujika' },
    { id: 7, src: "../../../assets/images/faces/16.jpg", name: 'Kim Noah' },
    { id: 8, src: "../../../assets/images/faces/10.jpg", name: 'Professor' },
    { id: 9, src: "../../../assets/images/faces/15.jpg", name: 'Alex Carey' },
];

interface mails {
    id: number;
    icon: string;
    text1: string;
    text2: string;
    class: string;
    class1: string;
}
export const Mails: mails[] = [
    { id: 1, icon: 'inbox-archive-line', text1: 'All Mails', text2: '15,41', class: 'badge bg-success-transparent text-success', class1: 'active' },
    { id: 2, icon: 'inbox-archive-line', text1: 'Inbox', text2: '11', class: 'badge bg-primary-transparent text-primary ', class1: '' },
    { id: 3, icon: 'send-plane-2-line', text1: 'Sent', text2: '', class: '', class1: '' },
    { id: 4, icon: 'draft-line', text1: 'Drafts', text2: '', class: '', class1: '' },
    { id: 5, icon: 'spam-2-line', text1: 'Spam', text2: '02', class: 'badge bg-danger-transparent text-danger', class1: '' },
    { id: 6, icon: 'bookmark-line', text1: 'Important', text2: '', class: '', class1: '' },
    { id: 7, icon: 'delete-bin-line', text1: 'Trash', text2: '', class: '', class1: '' },
    { id: 8, icon: 'archive-line', text1: 'Archive', text2: '', class: '', class1: '' },
    { id: 9, icon: 'star-line', text1: 'Starred', text2: '10', class: 'badge bg-warning-transparent text-warning', class1: '' }
];
