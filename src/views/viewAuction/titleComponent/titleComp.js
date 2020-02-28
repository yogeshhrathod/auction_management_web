import React from 'react'
import "./titleDetails.scss"
export default function TitleComp(props) {

    return (
        <div className="style">
            <h4>{props.title}</h4>
        </div>
    )
}
