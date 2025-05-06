import { Gallerylist } from "@/shared/data/apps/gallerydata";
import Seo from "@/shared/layout-components/seo/seo";
import React, { Fragment } from "react";

const Gallery = () => {
    return (
        <Fragment>
            <Seo title={"Gallery"} />
            <div>
                <Gallerylist />
            </div>
        </Fragment>
    );
};

export default Gallery;
