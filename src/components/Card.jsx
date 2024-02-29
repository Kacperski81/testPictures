
export default function Card({name, image}) {
    return (
        <div>
            <h3>This is a card</h3>
            <h3>{name}</h3>
            <div style={{width:"200px"}}>
                <img style={{width:"100%"}} src={image} alt={name} />
            </div>
        </div>
    )
}