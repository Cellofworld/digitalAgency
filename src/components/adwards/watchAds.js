import sBags from "../../img/icons/searchBus.svg"
import found from "../../img/icons/found.svg"
import deal from "../../img/icons/deal.svg"
import lamp from "../../img/icons/lamp.svg"


const cardsImg = [
    {
        title: "Тем, кто ищет в поиске Google Вашу компанию",
        img: <img className="sBags cardImg" key={sBags} src={sBags} alt={"sBags"} />
    },
    {
        title: "Тем, кто ищет в поиске Google ваш продукт или услугу",
        img:  <img className="found cardImg" key={found} src={found} alt={"found"} />
    },
    {
        title: "Тем, кто уже был на вашем сайте",
        img: <img className="deal cardImg" key={deal} src={deal} alt={"deal"} />
    },
    {
        title: "Тем, кто ищет в поиске Google решение своей проблемы",
        img: <img className="lamp cardImg" key={lamp} src={lamp} alt={"lamp"} />
    }

]



function WatchAds() {
return (
    <div className="watchAds">
    <div className="watchAdsTitile">
    Кому мы показываем рекламу в Google?
    </div>
    <div className="watchAdsCards">
        {
            cardsImg.map((el) => ( 
                <div className="watchAdsCard">
                {el.img}
                <p className="watchAdsCardDiscription">{el.title}</p>
                </div>
            ))
        }
    </div>
</div>
)
}

export default WatchAds