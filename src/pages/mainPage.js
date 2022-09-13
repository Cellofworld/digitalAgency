
import FollowUs from "../components/general/followUs";
import Principles from "../components/main/principlesMain";
import Services from "../components/main/sevices";
import Slider from "../components/general/slider";
import Clients from "../components/general/clients";
import Contacts from "../components/general/contacts";

import "../components/main/main.css"

function MainPages() {
    return (
        <div className="navigationMain">
           
            <div className="secondHead">
                <div className="discriptionHead main">
                    <p className="headSubtitle">Мы помогаем малому бизнесу стартовать и меняться</p>
                    <p className="headTitle">Digital агентство ORA</p>
                    <p className="titleDiscription">Объединяем ваш отраслевой опыт и нашу digital-экспертизу для достижения результатов</p>            
                </div>
                <FollowUs />
            </div>
            <Principles />
            <Services />
            <Slider />
            <Clients />
            <Contacts />
        </div>
    )
}
export default MainPages