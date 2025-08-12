"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

export const ProfileGallery = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-40.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-41.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-42.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-43.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-44.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-45.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-46.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-60.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-26.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-32.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-30.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={6} sm={12} className="col-12">
          <Link href="#!" scroll={false} className="glightbox card" data-gallery="gallery1">
            <img src="../../assets/images/media/media-31.jpg" alt="image" onClick={() => setOpen(true)} />
          </Link>
        </Col>
      </Row>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        zoom={{
          maxZoomPixelRatio: 10,
          scrollToZoom: true
        }}
        slides={[
          { src: "../../assets/images/media/media-40.jpg" },
          { src: "../../assets/images/media/media-41.jpg" },
          { src: "../../assets/images/media/media-42.jpg" },
          { src: "../../assets/images/media/media-43.jpg" },
          { src: "../../assets/images/media/media-44.jpg" },
          { src: "../../assets/images/media/media-45.jpg" },
          { src: "../../assets/images/media/media-46.jpg" },
          { src: "../../assets/images/media/media-60.jpg" },
          { src: "../../assets/images/media/media-26.jpg" },
          { src: "../../assets/images/media/media-32.jpg" },
          { src: "../../assets/images/media/media-30.jpg" },
          { src: "../../assets/images/media/media-31.jpg" }
        ]}
      />
    </>
  );
};

//Skills
interface skills {
  id: number;
  data: string;
}
export const Skills: skills[] = [
  { id: 1, data: "Web development" },
  { id: 2, data: "Product Design" },
  { id: 3, data: "UX Design" },
  { id: 4, data: "Web Development" },
  { id: 5, data: "Programming" },
  { id: 6, data: "Web Designing" },
  { id: 7, data: "Database management" },
  { id: 8, data: "JavaScript" }
];

//Friends Data
interface Friends {
  id: number;
  heading: string;
  mail: string;
  role: string;
  src1: string;
  color: string;
}
export const Friendsdata: Friends[] = [
  {
    id: 1,
    heading: "Olivia Taylor",
    mail: "oliviataylor5778@gmail.com",
    role: "UI Developer",
    src1: "../../assets/images/faces/2.jpg",
    color: "info"
  },
  {
    id: 2,
    heading: "AmeliaJacksons",
    mail: "AmeliaJacksons62@gmail.com",
    role: "Team Lead",
    src1: "../../assets/images/faces/15.jpg",
    color: "success"
  },
  {
    id: 3,
    heading: "Mason Woods",
    mail: "masonwoods484@gmail.com",
    role: "Team Member",
    src1: "../../assets/images/faces/5.jpg",
    color: "info"
  },
  {
    id: 4,
    heading: "Alexander Grant",
    mail: "alexandergrant45@gmail.com",
    role: "Team Manager",
    src1: "../../assets/images/faces/11.jpg",
    color: "warning"
  },
  {
    id: 5,
    heading: "Brinda Linda",
    mail: "brindalinda22@gmail.com",
    role: "Team Member",
    src1: "../../assets/images/faces/7.jpg",
    color: "info"
  },
  {
    id: 6,
    heading: "LilyAnderson",
    mail: "lilyanderson006@gmail.com",
    role: "Team Member",
    src1: "../../assets/images/faces/22.jpg",
    color: "info"
  }
];

//Followers
interface Follower {
  id: number;
  src1: string;
  heading: string;
  mail: string;
}
export const Followers: Follower[] = [
  { id: 1, src1: "../../assets/images/faces/1.jpg", heading: "Gloria Rose", mail: "gloriarose559@gmail.com" },
  { id: 2, src1: "../../assets/images/faces/3.jpg", heading: "Carolina", mail: "carolina@gmail.com" },
  { id: 3, src1: "../../assets/images/faces/6.jpg", heading: "Whitney Skyln", mail: "whitneyskyln421@gmail.com" },
  { id: 4, src1: "../../assets/images/faces/15.jpg", heading: "Mark Ron", mail: "Markron121@gmail.com" },
  { id: 5, src1: "../../assets/images/faces/13.jpg", heading: "Nick Ted", mail: "nickted454@gmail.com" }
];
