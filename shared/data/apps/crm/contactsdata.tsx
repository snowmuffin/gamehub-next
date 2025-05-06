interface loppdata {
    value:string;
    label:string;
}
export const Data:loppdata[] = [
    { value: 'Select Tag', label: 'Select Tag' },
    { value: 'New Lead', label: 'New Lead' },
    { value: 'Prospect', label: 'Prospect' },
    { value: 'Customer', label: 'Customer' },
    { value: 'Hot Lead', label: 'Hot Lead' },
    { value: 'Partner', label: 'Partner' },
    { value: 'LostCustomer', label: 'LostCustomer' },
    { value: 'Influencer', label: 'Influencer' },
    { value: 'Subscriber', label: 'Subscriber' }
];
export const Data1:loppdata[] = [
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Direct mail', label: 'Direct mail' },
    { value: 'Blog Articles', label: 'Blog Articles' },
    { value: 'Affiliates', label: 'Affiliates' },
    { value: 'Organic search', label: 'Organic search' }
];

//Loopingdata
interface loopingdata {
    id: string;
    src1: string;
    src2: string;
    name: string;
    time: string;
    score: string;
    mail: string;
    cell: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    color1: string;
    color2: string;
    class1: string;
    class2: string;
}
export const Loopingdata: loopingdata[] = [
    { id: '1', src1: "../../../assets/images/faces/4.jpg", src2: "../../../assets/images/company-logos/1.png", name: 'Alison', time: '13, Jul 2023 - 6:15PM', score: '845', mail: 'Alison2571@gmail.com', cell: '1678-28993-223 ', text1: 'Spruko Technologies', text2: 'Social Media', text3: 'New Lead', text4: 'Prospect', color1: 'primary', color2: 'primary', class1: '', class2: '' },
    { id: '2', src1: "../../../assets/images/faces/12.jpg", src2: "../../../assets/images/company-logos/3.png", name: 'Noel', time: '21, Jul 2023 - 08:16AM', score: '451', mail: 'Noel289@gmail.com', cell: ' 8122-2342-4453', text1: 'Spice Infotech', text2: 'Direct mail', text3: 'Customer', text4: 'Hot Lead', color1: 'primary', color2: 'danger', class1: '', class2: '' },
    { id: '3', src1: "../../../assets/images/faces/14.jpg", src2: "../../../assets/images/company-logos/4.png", name: 'Sandy', time: '14, Aug 2023 - 04:33PM', score: '547', mail: 'Sandy888@gmail.com', cell: ' 1902-2001-3023', text1: 'Logitech ecostics', text2: 'Blog Articles', text3: 'Partner', text4: '', color1: 'success', color2: '', class1: '', class2: '' },
    { id: '4', src1: "../../../assets/images/faces/6.jpg", src2: "../../../assets/images/company-logos/5.png", name: 'Alexia', time: '28, Aug 2023 - 09:47AM', score: '774', mail: 'Alexia290@gmail.com', cell: ' 1603-2032-1123', text1: 'Initech Info', text2: 'Affiliates', text3: 'LostCustomer', text4: 'Influencer', color1: 'light text-default', color2: 'secondary', class1: 'text-default', class2: '' },
    { id: '5', src1: "../../../assets/images/faces/8.jpg", src2: "../../../assets/images/company-logos/6.png", name: 'Silvia', time: '26, Sep 2023 - 01:51PM', score: '758', mail: 'Silvia96@gmail.com', cell: '1129-2302-1092 ', text1: 'Massive Dynamic', text2: 'Organic search', text3: 'Subscriber', text4: 'Partner', color1: 'pink', color2: 'success', class1: '', class2: '' },
    { id: '6', src1: "../../../assets/images/faces/9.jpg", src2: "../../../assets/images/company-logos/7.png", name: 'Noel Lucas', time: '08, Sep 2023 - 01:52PM', score: '164', mail: 'noellucas471@gmail.com', cell: ' 9923-2344-2003', text1: 'Globex Corporation', text2: 'Social media', text3: 'Hot Lead', text4: 'Referral', color1: 'danger', color2: 'info', class1: '', class2: '' },
    { id: '7', src1: "../../../assets/images/faces/15.jpg", src2: "../../../assets/images/company-logos/8.png", name: 'Stuart', time: '06, Sep 2023 - 08:56AM', score: '245', mail: 'Stuart78@gmail.com', cell: '7891-2093-1994 ', text1: 'Acme Corporation', text2: 'Blog Articles', text3: 'Trial User', text4: 'Cold Lead', color1: 'warning', color2: 'purple', class1: '', class2: '' },
    { id: '8', src1: "../../../assets/images/faces/1.jpg", src2: "../../../assets/images/company-logos/9.png", name: 'Myra', time: '23, Oct 2023 - 09:54PM', score: '654', mail: 'Myra220@gmail.com', cell: '	1899-2993-1923 ', text1: 'Soylent Corp', text2: 'Organic search', text3: 'Influencer', text4: 'Partner', color1: 'success', color2: 'info', class1: '', class2: '' },
    { id: '9', src1: "../../../assets/images/faces/3.jpg", src2: "../../../assets/images/company-logos/10.png", name: 'Juliana', time: '04, Nov 2023 - 11:25AM', score: '122', mail: 'Juliana289@gmail.com', cell: ' 1768-2332-4934 ', text1: 'Umbrella Corporation', text2: 'Affiliates', text3: 'New Lead', text4: 'Lost Customer', color1: 'primary', color2: 'light text-default', class1: '', class2: 'text-default' },
    { id: '10', src1: "../../../assets/images/faces/9.jpg", src2: "../../../assets/images/company-logos/2.png", name: 'George', time: '14, Nov 2023 - 08:55AM', score: '144', mail: 'George116@gmail.com', cell: '4788-7822-4786 ', text1: 'Hooli Technologies', text2: 'Direct mail', text3: 'New Lead', text4: 'Subscriber', color1: 'primary', color2: 'pink', class1: '', class2: '' }
];
