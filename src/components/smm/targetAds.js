
import targetImg from "../../img/smm/smmTarget.png"

function TargetAds() {
    return(
        <div className="targetAds">
            <p className="targetAdsTitle">Таргетированная реклама</p>
            <div className="targetAdsContent">
                <div className="targetadsDiscrition">
                    <p className="targetAdsDiscriptionTitle">Специалисты Ora обеспечат точное попадание в вашу целевую аудиторию и максимальный результат рекламы.</p>
                    <p className="targetAdsSubtitle">Мы предлагаем помощь каждому клиенту, желающему воспользоваться поддержкой профессиональных специалистов в сфере SMM-продвижения.</p>
                    <p className="targetAdsSubtitle">Таргетированная реклама в социальных сетях Facebook и Instagram ‒ это отличная возможность рассказать о собственном бизнесе или продукте максимально большему количеству людей.</p>
                    <p className="targetAdsSubtitle">Отметим, что эти соц. сети являются одними из самых популярных и распространенных на сегодня. Именно здесь есть возможность отыскать новых потребителей, пополняя собственную клиентскую базу.</p>
                </div>
                <img className="targetAdsImg" src={targetImg} alt={targetImg} />  
            </div>        
        </div>
    )
}

export default TargetAds