import React from 'react';
import './imageSection.css';
// import Horses from './horses.jpg';
import Placeholder from '../../images/placeholder.png'

function ImageSection({url}) {
    let imgClass ="imageSection"
    if(url === "") {
        url = Placeholder;
    }
    else  imgClass ="imageSection animated fadeIn"
    return  <div className={imgClass}>
                <img src={url} alt="photo_of_the_day" />
            </div>
}

export default ImageSection;