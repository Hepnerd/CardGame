import './Cards.scss'

export default function Cards({id}) {
    return (
            <div className="gameCard" data-index={id.id}></div>
    )
}