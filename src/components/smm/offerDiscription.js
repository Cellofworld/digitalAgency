import smmOffer from "../../img/smm/smmOffer.png"
import insBook from "../../img/icons/instaBook.png"


function OfferDescription() {
   
  return (
    <div className="offerDiscription">
        <img className="offerDiscriptionImg" src={smmOffer} alt={smmOffer} />
        <div className="offerDisTitle">
            <p className="smmDiscriptionTitle">Ведение социальных сетей. Что мы предлагаем?</p>
            <p className="smmDiscriptionSubtitle">Чтобы всё было прозрачно с самого начала Вашего сотрудничества с нами, и Вы понимали какой объём работы будет выполнен для достижения поставленных целей –
             <b>мы составим понятный контент-план на месяц.</b>
             </p>
            <div className="smmHighlight">
                <img className="smmDiscriptionImg" src={insBook} alt={insBook} />
                <p className="smmDiscriptionSubtitle">С помощью данного инструмента, мы вместе разработаем индивидуальную стратегию продвижения Вашей компании в социальных сетях Facebook и Instagram.</p>
            </div>
        </div>
    </div>
  )

}

export default OfferDescription