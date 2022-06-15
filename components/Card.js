import React from "react";

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <img src={props.img} className="card--photo" alt="" />
                <div className="card--content">
                    <span><img className="card--pin" src="../images/pin.png" alt="" /></span>
                    <span className="card--locale">{props.locale.toUpperCase()}</span>
                    <span className="card--googleMap"><a href={props.map}>View on Google Maps</a></span>
                    <p className="card--title">{props.title}</p>
                    <span className="card--date">{props.startDate}</span>
                    <span className="card--date"> - </span>
                    <span className="card--date">{props.endDate}</span>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
            <hr className="card--line" />
        </div>
    )
}

