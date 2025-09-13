//Pricing
const pricebadge = (
  <span className="popular-pricing-badge">
    <i className="ri-flashlight-line me-1 d-inline-block"></i>Most Popluar
  </span>
);

export const Pricingdata = [
  {
    id: 1,
    heading: "Intro",
    month: "0",
    users: "4",
    days: "28",
    color: "primary-light",
    data: "",
    badge: ""
  },
  {
    id: 2,
    heading: "Basic",
    month: "29",
    users: "5",
    days: "52",
    color: "primary-light",
    data: "",
    badge: ""
  },
  {
    id: 3,
    heading: "Popular",
    month: "49",
    users: "8",
    days: "400",
    color: "primary",
    data: "border-primary",
    badge: pricebadge
  },
  {
    id: 4,
    heading: "Advanced",
    month: "29",
    users: "10",
    days: "365",
    color: "primary-light",
    data: "",
    badge: ""
  }
];
