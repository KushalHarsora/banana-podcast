import React from "react";

const Podcast = ({ params }: { params: { podcastId: string}}) => {
    return(
        <React.Fragment>
            <p className=" text-white-1">
                Podcast Details for {params.podcastId}
            </p>
        </React.Fragment>
    )
}

export default Podcast;