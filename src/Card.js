import React from "react";

const Card = ({name, url, imgSrc}) =>{

    // const {id, name, url, imgSrc} = props

    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <a href={url} target='_blank' rel="noreferrer">
                <img height='150' width='150' alt={name} src={imgSrc} />
            </a>
            <div>
                <h2>{name}</h2>
                {/* <p>
                    <a href={url} target='_blank' rel="noreferrer">Website</a>
                </p> */}
            </div>
        </div>

    )
}

export default Card