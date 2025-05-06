interface photos {
	id: number;
	src: string;
}
export const Photosmediadata: photos[] = [
	{ id: 1, src: "../../assets/images/media/media-56.jpg" },
	{ id: 2, src: "../../assets/images/media/media-52.jpg" },
	{ id: 3, src: "../../assets/images/media/media-53.jpg" },
	{ id: 4, src: "../../assets/images/media/media-62.jpg" },
	{ id: 5, src: "../../assets/images/media/media-63.jpg" },
	{ id: 6, src: "../../assets/images/media/media-64.jpg" },
	{ id: 7, src: "../../assets/images/media/media-13.jpg" },
	{ id: 8, src: "../../assets/images/media/media-19.jpg" },
	{ id: 9, src: "../../assets/images/media/media-20.jpg" },
];

const readicon = <span className="chat-read-icon float-end align-middle"><i
	className="ri-check-double-fill"></i></span>;
const badge = <span
	className="badge bg-success-transparent rounded-circle float-end">2</span>;
export const chatData: any = [
	{
		heading: "ACTIVE CHATS",
		users: [
			{ name: "Sujika", image: "../../assets/images/faces/5.jpg", time: "1:32PM", message: "Need to go for lunch?", icon: readicon, class: "checkforactive", online: "online" },
			{ name: "Emiley Jackson", image: "../../assets/images/faces/2.jpg", time: "12:24PM", message: "Typing...", icon: badge, class: "checkforactive", online: "online" },
			{ name: "McGreggor", image: "../../assets/images/faces/10.jpg", time: "12:24PM", message: "Typing...", icon: readicon, class: "chat-msg-unread checkforactive", online: "online" },
			// { name: "Emiley Jackson", image: "../../assets/images/faces/8.jpg", time: "12:45PM", message: "Chat with you later,bye", icon:readicon,class:"checkforactive" ,online:"online"},
			// Add more active chats if needed
		],
	},
	{
		heading: "ALL CHATS",
		users: [
			{ name: "Andreas", image: "../../assets/images/faces/11.jpg", time: "11:54AM", message: "Congratulations on your new project", online: "offline" },
			{ name: "Melissa Sean", image: "../../assets/images/faces/3.jpg", time: "9:45AM", message: "Nice work,Congrats &#128079;", online: "offline" },
			{ name: "Samantha Paul", image: "../../assets/images/faces/6.jpg", time: "8:31AM", message: "Great work keep it up :-)", online: "offline" },
			{ name: "Megan Fox", image: "../../assets/images/faces/4.jpg", time: "7:23AM", message: "You are need to be appreaciated for what you have done,congs", online: "offline" },
			{ name: "Nicholas Sams", image: "../../assets/images/faces/13.jpg", time: "10:22AM", message: "Great Project", online: "offline" },
			{ name: "Pope Johnson", image: "../../assets/images/faces/15.jpg", time: "9:10AM", message: "Hike management fixed", online: "offline" },
			// Add more all chats if needed
		],
	},
	// Add more sections if needed
];
