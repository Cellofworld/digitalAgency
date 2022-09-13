import fGog from "../../img/googleImg/foundGoogle.png"
import bGog from "../../img/googleImg/bannerGoogle.png"
import vGog from "../../img/googleImg/videoGoogle.png"
import mGog from '../../img/googleImg/marketing.png'

const adsData = [
    {
        discription:
        <div className="adsGogDiscription">
            <p className="adsGogCardTitle">Поисковая реклама</p>
            <p className="adsGogCardDiscription">
            Данные объявления показываются потенциальным клиентам по введенным ключевым запросам в поисковой строке Google, которые рекламодатель добавил в рекламную кампанию.
            </p>
            <p className="adsGogCardDiscription">
            Рассчитана на людей с уже определенной потребностью или проблемой — по сути, это своего рода ответ на запрос пользователя в поисковой строке в виде текстового сообщения.
            </p>
            <p className="adsGogCardDiscription">
            Данный вид рекламы является основополагающим для получения «горячего» трафика (захода людей на сайт) со сформированным спросом и готовых к покупке.
            </p>
        </div>
        ,
        img: <img className="fGog adsImg" key={fGog} src={fGog} alt={"fGog"} />
    },
    {
        img: <img className="bGog adsImg" key={bGog} src={bGog} alt={"bGog"} />,
        discription:
        <div className="adsGogDiscription">
            <p className="adsGogCardTitle">Баннерная реклама</p>
            <p className="adsGogCardDiscription">
            Позволяет увеличить охват аудитории. Показывается на различных информационных сайтах-партнерах Google и выглядит как статический или динамический баннер с коммерческим предложением.
            </p>
            <p className="adsGogCardDiscription">
            Показы объявлений можно настроить очень гибко: по социально-демографическим, возрастным, поведенческим характеристикам, по интересам пользователей и другим критериям.
            </p>
            <p className="adsGogCardDiscription">
            Данная реклама максимально эффективна, когда необходимо охватить максимально большую аудиторию людей для увеличения узнаваемости бренда, компании, отдельной линейки и т.д..
            </p>
        </div>
        
    },
    {
        discription:
        <div className="adsGogDiscription">
            <p className="adsGogCardTitle">Видеореклама</p>
            <p className="adsGogCardDiscription">
            Видеореклама формирует в глазах человека образ бренда, вовлекает в рекламный посыл при сравнительно недорогой стоимости контакта с ЦА.
            </p>
            <p className="adsGogCardDiscription">
            Инструмент отлично работает на узнаваемость продукта и возникновение потребности у потенциального потребителя.
            </p>
        </div>
        ,
         img: <img className="vGog adsImg" key={vGog} src={vGog} alt={"vGog"} />
    },
    {
        img:<img className="mGog adsImg" key={mGog} src={mGog} alt={"mGog"} />,
        discription: 
        <div className="adsGogDiscription">
            <p className="adsGogCardTitle">Ремаркетинг и ретаргетинг</p>
            <p className="adsGogCardDiscription">
            Большинству людей, которые заходят на ваш сайт, как правило, необходимо больше одного визита, чтобы совершить целевое действие (например: сделать покупку).
            </p>
            <p className="adsGogCardDiscription">
            Процент посетителей, которые совершают целевое действие при первом визите на сайт, зависит от вида бизнеса, но в среднем не превышает 30%. Что в таком случае делать с остальными посетителями, которые просто закрыли ваш сайт? Как их вернуть на сайт и конвертировать в клиентов? Для этого и нужен ремаркетинг.
            </p>
            <p className="adsGogCardDiscription">
            Ремаркетинг используется для возвращения пользователей, которые просматривали ваш сайт или взаимодействовали с вашей рекламой, но не совершили покупку, а также для стимулирования повторных продаж.
            </p>
            <p className="adsGogCardDiscription">
            Такие пользователи, обычно, более лояльны и вероятность совершения целевого действия выше.
            </p>
        </div>
    }
]

function AdsGoogle() {
    return (
        <div className="adsGog">
            <p className="adsGogTitle">Что такое реклама в Google?</p>
            {adsData.map((el,i) => (
                <div className="adsCard" key={i}>
                    {el.discription}
                    {el.img}
                </div>
            ))}
        </div>
    )
}

export default AdsGoogle