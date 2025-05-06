"use client"
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center">
    <div className="container">
        <span className="text-muted"> Copyright © <span id="year"> 2024 </span> <Link
                href="#!" scroll={false} className="text-dark fw-medium">SciFi</Link>.
            Designed with <span className="ri-heart-fill text-danger"></span> by <Link href="#!" scroll={false}>
                <span className="fw-medium text-primary text-decoration-underline">Spruko</span>
            </Link> All
            rights
            reserved
        </span>
    </div>
</footer>
  );
};

export default Footer;
