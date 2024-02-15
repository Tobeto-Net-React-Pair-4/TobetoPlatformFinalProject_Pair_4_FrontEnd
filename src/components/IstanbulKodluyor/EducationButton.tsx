import React from 'react'

type Props = {
    imgSrc : string;
}

const EducationButton = (props: Props) => {
    return (

        <div className="col-3">
            <span className='button-cnt'>
                <img src={props.imgSrc} className='button-image'/>
            </span>
        </div>
    )
}

export default EducationButton;