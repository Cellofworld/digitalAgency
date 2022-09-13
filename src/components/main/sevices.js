import googleIcon from "../../img//icons/iconGoogle.svg"
import instIcon from "../../img/inst.svg"
import faceBookIcon from "../../img/facebookIcon.svg"

function Services() {
    return (
        <div className="sevicesMain">
                <p className="servicesTitle">
                Мы не будем рисовать несбыточные прогнозы и использовать «мёртвые» каналы, 
                потому что отчитываемся перед клиентом за итоговые показатели. 
                Если у вас все отлично, то мы так и скажем, прямо и без лишних слов.
                </p>
            <div className="servicesGFI">
                <div className="servicesGoogle">
                    <img className="iconGoogle iconServ" src={googleIcon} alt={googleIcon}></img>
                    <p className="servTitle">
                        Реклама в Google
                    </p>
                    <p className="servDiscription">
                    Наше агентство занимается разработкой и внедрением стратегий таргетированной и контекстной рекламы в Google. 
                    Мы помогаем малому бизнесу в Латвии наладить бесперебойный поток коммерческих сообщений до целевой аудитории.
                    </p>
                    <button className="moreServ">
                        Подробнее об услуге
                    </button>
                </div>
                <div className="servicesFacebook">
                <img className="iconFacebook iconServ" src={instIcon} alt={instIcon}></img>
                <img className="iconInstagramm iconServ" src={faceBookIcon} alt={faceBookIcon}></img>
                    <p className="servTitle">
                        Реклама в Facebook, Instagram
                    </p>
                    <p className="servDiscription">
                    Мы предлагаем помощь каждому заказчику, желающему воспользоваться поддержкой профессиональных специалистов в сфере SMM-продвижения. 
                    Таргетированная реклама в Facebook и Instagram - это отличная возможность рассказать о собственном бизнесе как можно большему количеству людей.
                    </p>
                    <button className="moreServ">
                        Подробнее об услуге
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services