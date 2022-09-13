import worldIcon from "../../img/icons/world.svg"
import auditIcon from "../../img/icons/auditories.svg"
import moneyIcon from "../../img/icons/money.svg"
import lineUpIcon from "../../img/icons/lineUp.svg"


function UseTarget() {
    return (
        <div className="useTargetSmm">
            <p className="useTargetSmmTitle">Почему нужно использовать таргетированную рекламу в Facebook и Instagram?</p>
            <div className="useTargetSmmCards">
                <div className="useTargetSmmCard">
                    <img className="useTargetSmmImg" src={worldIcon} alt={worldIcon}/>
                    <p className="useTargetSmmCardTitle">Мировые социальные сети, распространенные в большинстве стран.</p>
                </div>
                <div className="useTargetSmmCard">
                    <img className="useTargetSmmImg" src={auditIcon} alt={auditIcon}/>
                    <p className="useTargetSmmCardTitle">Большой охват целевой аудитории.</p>
                </div>
                <div className="useTargetSmmCard">
                    <img className="useTargetSmmImg" src={moneyIcon} alt={moneyIcon}/>
                    <p className="useTargetSmmCardTitle">Прогрессивная аудитория с высокой платежеспособностью.</p>
                </div>
                <div className="useTargetSmmCard">
                    <img className="useTargetSmmImg" src={lineUpIcon} alt={lineUpIcon}/>
                    <p className="useTargetSmmCardTitle">Лучшие алгоритмы оптимизации рекламы.</p>
                </div>
            </div>
        </div>
    )
}
export default UseTarget