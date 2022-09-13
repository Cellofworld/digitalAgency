import okIcon from "../../img/icons/ok.svg"
import notOkIcon from "../../img/icons/notOk.svg"
import infoIcon from "../../img/icons/info.svg"
import bag from "../../img/icons/bag.svg"
import twoBag from "../../img/icons/twoBag.svg"

const okImg = <img className="okIcon costIcon" key={okIcon} src={okIcon} alt={"okIcon"} />
const notOkImg = <img className="notOkIcon costIcon" key={notOkIcon} src={notOkIcon} alt={"notOkIcon"} />

const costAds =  [
    {
        titleCost: "Стоимость / мес.",
        smallBus: "100 евро",
        middleBus: "10-25% бюджета кампании"
    },
    {
        titleCost: "Количество запросов",
        smallBus: "до 100 запросов",
        middleBus: "до 1000 запросов"
    },
    {
        titleCost: "Количество объявлений",
        smallBus: "до 100 объявлений",
        middleBus: "до 1000 объявлений"
    },
    {
        titleCost: "Количество кампаний",
        smallBus: "до 10 кампаний",
        middleBus: "до 25 кампаний"
    },
    {
        titleCost: "Реклама в поиске",
        smallBus: okImg,
        middleBus: okImg
    },
    {
        titleCost: "Реклама в КМС",
        smallBus: okImg,
        middleBus: okImg
    },
    {
        titleCost: "Ретаргетинг",
        smallBus: okImg,
        middleBus: okImg
    },
    {
        titleCost: "Настройка аналитики",
        smallBus: okImg,
        middleBus: okImg
    },
    {
        titleCost: "Google my business аккаунт",
        smallBus: okImg,
        middleBus: okImg
    },
    {
        titleCost: "Баннерная реклама",
        smallBus: notOkImg,
        middleBus: okImg
    },
    {
        titleCost: "Видеореклама (Youtube)",
        smallBus: notOkImg,
        middleBus: okImg
    }
]



function CostAds () {
    const listTitle = costAds.map((el, i) => 
    <li className="costLi" key={i}>{el.titleCost}</li>
 )
 const listSmall = costAds.map((el, i) => 
 <li className="costLi" key={i}>{el.smallBus}</li>
)
const listMiddle = costAds.map((el, i) => 
<li className="costLi" key={i}>{el.middleBus}</li>
)
    return (
        <div className="costAds">
            <p className="costTitle">Стоимость услуг</p>
            <div className="costUl">
                <ul className="costTitleBus">
                    <p className="costVoidTitle"></p>
                    {listTitle}
                </ul>
                <ul className="costSmallBus">
                    <div className="costDiscriptionUl">
                        <div className="costTextDiscription">
                            <p className="costTitileUl">Малый бизнес</p>
                            <p className="costSubtitleUl">Бюджет рекламной кампании</p>
                            <p className="costPriceUl">до 1000 евро</p>
                        </div>
                        <img className="costBagIcon" src={bag} alt={bag} />
                    </div>
                    {listSmall}
                </ul>
                <ul className="costMiddleBus">
                    <div className="costDiscriptionUl">
                        <div className="costTextDiscription">
                            <p className="costTitileUl">Средний бизнес</p>
                            <p className="costSubtitleUl">Бюджет рекламной кампании</p>
                            <p className="costPriceUl">от 1000 евро</p>
                        </div>
                        <img className="costTwobagIcon" src={twoBag} alt={twoBag} />
                    </div>
                {listMiddle}
                </ul>
            </div>
           <div className="infoAds">
            <img className="infoIcon" key={infoIcon} src={infoIcon} alt={"infoIcon"} />
            <p>Минимальный бюджет на рекламу составляет от 100 евро / месяц.</p>
           </div> 
        </div>
    )
}

export default CostAds
