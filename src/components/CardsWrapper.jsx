import Card from "./Card";
import data from "../data/data";

export default function CardsWrapper() {
    const cardsElements = data.map(card => {
        return <Card key={card.id} name={card.name} image={card.image} />
    })

    return (
        <div>
            <h2>Cards Wrapper</h2>
            {cardsElements}
        </div>
    )
}