import WatchAds from "../components/adwards/watchAds"
import CostAds from "../components/adwards/costAds"
import AdsGoogle from "../components/adwards/adsGoogle"
import Offer from "../components/adwards/offer"
import Stages from "../components/adwards/stages"
import RessultAds from "../components/adwards/resultAds"
import Clients from "../components/general/clients"
import Contacts from "../components/general/contacts"
import GoogleFirstResults from "../components/adwards/googleFirstResults"
import "../components/adwards/googleAds.css"

function Adwards() {
    return (
       <div className="googleAdws">
            <div className="googleHeader">
                <div className="googleTitle">
                Реклама <br></br>в Google Ads
                </div>
                <div className="googleSubtitle">
                Новые клиенты узнают о вашем бизнесе
                </div>
            </div>
            <GoogleFirstResults />
           <WatchAds />
           <CostAds />
           <AdsGoogle />
           <Offer />
           <Stages />
           <RessultAds />
           <Clients />
           <Contacts />
       </div>
    )
}
export default Adwards