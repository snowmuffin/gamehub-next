interface filemanager {
    id: number;
    class: string;
    icon: string;
    text: string;
    badge: string;
}

export const Filemanagerlist: filemanager[] = [
    { id: 1, class: ' active files-type', icon: 'ri-folder-2-line fs-16', text: 'My Files', badge: '322' },
    { id: 2, class: 'files-type', icon: 'ri-star-s-line fs-16', text: 'Favourites', badge: '' },
    { id: 3, class: 'files-type', icon: 'ri-share-forward-line fs-16', text: 'Shared Files', badge: '' },
    { id: 4, class: 'files-type', icon: 'ri-delete-bin-line fs-16', text: 'Recycle Bin', badge: '' },
    { id: 5, class: 'files-type', icon: 'ri-history-fill fs-16', text: 'Recent Files', badge: '' },
    { id: 6, class: '', icon: 'ri-settings-3-line fs-16', text: 'Settings', badge: '' },
    { id: 7, class: '', icon: 'ri-questionnaire-line fs-16', text: 'Help Center', badge: '' },
    { id: 8, class: '', icon: 'ri-folder-line fs-16', text: 'Version', badge: '' },
    { id: 9, class: 'mb-4', icon: 'ri-logout-box-line fs-16', text: 'Log out', badge: '' },
];

interface Myfiles {
    id: number;
    icon: string;
    data: string;
    files: string;
}
export const Myfilesdata: Myfiles[] = [
    { id: 1, icon: "image-line", data: "Images", files: "283" },
    { id: 2, icon: "video-line", data: "Videos", files: "453" },
    { id: 3, icon: "file-list-2-line", data: "Docs", files: "141" },
    { id: 4, icon: "music-2-line", data: "Music", files: "564" },
    { id: 5, icon: "apps-2-line", data: "Apps", files: "27" },
    { id: 6, icon: "download-cloud-line", data: "Downloads", files: "421" },
];
interface recentdata {
    id: number;
    img: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}
export const Recentdata: recentdata[] = [
    { id: 1, img: "../../../assets/images/media/file-manager/1.png", text1: 'VID-00292312-SPK823.mp4', text2: 'Videos', text3: '	87MB', text4: '22,Nov 2022' },
    { id: 2, img: "../../../assets/images/media/file-manager/1.png", text1: 'IMG-09123878-SPK734.jpeg', text2: 'Images', text3: '1.35MB', text4: '25,Nov 2022' },
    { id: 3, img: "../../../assets/images/media/file-manager/1.png", text1: 'AMB-2012.zip', text2: 'Archives', text3: '422KB', text4: '23,Nov 2022' },
    { id: 4, img: "../../../assets/images/media/file-manager/1.png", text1: 'AUD-1002-2012.mp3', text2: 'Archives', text3: '422KB', text4: '23,Nov 2022' },
    { id: 5, img: "../../../assets/images/media/file-manager/1.png", text1: 'Document-02.pdf', text2: 'Documents', text3: '1.69MB', text4: '2,Dec 2022' },
];
