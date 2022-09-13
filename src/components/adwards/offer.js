import found from "../../img/icons/found.svg"
import percent from "../../img/icons/percent.svg"
import remark from "../../img/icons/remarketing.svg"
import video from "../../img/icons/video.svg"


const offerItems = [
    {
        img: found,
        title: "Поисковые кампании",
        discription: "Текстовые рекламные объявления будут показываться только тем пользователям, которые ищут вашу компанию или продукт по ключевым словам в поисковых системах и готовы к покупке."
        
    },
    {
        img: percent,
        title: "Кампании в КМС",
        discription: 'Данный вид рекламы позволяет показывать текстовую и графическую рекламу на сайтах-партнерах Google, а также в Gmail, YouTube.'
    },
    {
        img: remark,
        title: "Ремаркетинг",
        discription: "Ремаркетинг позволяет показывать рекламу тем людям, которые уже посещали ваш сайт или пользовались вашим приложением."
    },
    {
        img: video,
        title: "Видеореклама в YouTube",
        discription: "Ваши видеообъявления будут транслироваться в рекламных блоках YouTube, когда люди смотрят видео на самой платформе Youtube или на других сайтах, где встроен видеоплеер."
    }
]

function Offer() {
    return (
        <div className="offerAds">
            <p className="offerAdsTitle">Что мы предлагаем?</p>
            <div className="offerAdsCards">
                {offerItems.map((el) => (
                    <div className="offerAdsCard">
                        <img className="offerAdsCardImg" key={el.img} src={el.img} alt={el.img} />
                        <p className="offerAdsCardTitle">{el.title}</p>
                        <p className="offerAdsCardSubtitle">{el.discription}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Offer