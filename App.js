import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {

    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                img={item.imageUrl}
                locale={item.location}
                title={item.title}
                map={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                // could have used item={item} but ran out of time.
            />
        )
    })

    return (
        <div>
            <Navbar />
            <section className="card--list">
                {cards}
            </section>
        </div>
    )
}
