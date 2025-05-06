
"use client";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";
const Leafletmapsdata = dynamic(() => import("@/shared/data/maps/leafletmapdata"), { ssr: false });

const LeafletMap = () => {
    return (
        <Fragment>
            <Seo title={"Leaflet-Maps"} />
            <div>
                <Leafletmapsdata />
            </div>
        </Fragment>
    );
};

export default LeafletMap;
