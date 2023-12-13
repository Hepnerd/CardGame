import './PlaySpace.scss'
import Cards from './Cards/Cards'

export default function PlaySpace() {
    return (
        <>
            <div className="hand">
                <Cards id={1}/>
                <Cards id={2}/>
                <Cards id={3}/>
                <Cards id={4}/>
                <Cards id={5}/>
                <Cards id={6}/>
            </div>
            <div className="pile">
                <Cards id={1}/>
                <Cards id={1}/>
                <Cards id={1}/>
                <Cards id={1}/>
                <Cards id={1}/>
                <Cards id={1}/>
            </div>
        </>
    )
}