import React from 'react'
import "./auctionEndDesign.scss";
import{bool,number} from "prop-types"
const Prototype ={
    display:bool.isRequired,
    isOwner:bool.isRequired,
    winner:number.isRequired
}
export default function auctionEndTemplate(props) {
    const {display,isOwner,winner} = props
    return (
        <div className={`list-outer ${display&&!isOwner ? 'show':'hide'}`}>
            <h1 className="message">This auction has been ended</h1>
            <h2 className={`winner ${Number(winner)===Number(localStorage.getItem('userId'))? "show":"hide"}` }>You won this auction please check you email for further details</h2>
        </div>
    )
}
auctionEndTemplate.prototype=Prototype;
