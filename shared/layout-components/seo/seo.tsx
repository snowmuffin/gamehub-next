"use client"
import React, { useEffect } from 'react';

const Seo = ({ title }:any) => {

    useEffect(() => {
        document.title = `Snow Muffin - ${title}`
      }, [])

  return (
    <>
    </>
  )
}

export default Seo
