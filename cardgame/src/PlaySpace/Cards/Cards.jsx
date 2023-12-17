import './Cards.scss'

export default function Cards({cssClass}) {
    return (
        <>
            <div className={cssClass+"Card"}>
                <div className={cssClass+"Content"}>
                    <div className={cssClass+"Front"}>Front Card</div>
                    <div className={cssClass+"Back"}>Back Stats</div>
                </div>
            </div>
        </>
    )
}