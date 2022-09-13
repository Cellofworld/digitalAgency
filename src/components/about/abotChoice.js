import aboutStar from "../../img/aboutPicture.png"
import activeImg from "../../img/icons/activeButton.svg"
import inactiveImg from "../../img/icons/inactiveButton.svg"
import { useState } from "react"

const itemsTab = [
    {
        title: "Компетентные сотрудники​", 
        content: "1Наши специалисты работают в области интернет-маркетинга более 7 лет, и знают эффективность каждого рекламного канала."
    },
    {
        title: "Актуальность решений​",
        content: "2Наши специалисты работают в области интернет-маркетинга более 7 лет, и знают эффективность каждого рекламного канала."
    },
    {
        title: "Нацеленность на результат​",
        content :"3Наши специалисты работают в области интернет-маркетинга более 7 лет, и знают эффективность каждого рекламного канала."
    },
    {
        title: "Сертифицикации​",
        content :"4Наши специалисты работают в области интернет-маркетинга более 7 лет, и знают эффективность каждого рекламного канала."
    },
    {
        title: "Ответственность",
        content :"5Наши специалисты работают в области интернет-маркетинга более 7 лет, и знают эффективность каждого рекламного канала."
    },
    {
        title: "Приятное сотрудничество",
        content :"6Наши специалисты работают в области интернет-маркетинга более 7 лет, и знают эффективность каждого рекламного канала."
    },
    {
        title: "Честность",
        content :"7Наши специалисты работают в области интернет-маркетинга более 7 лет, и знают эффективность каждого рекламного канала."
    }

];

function AboutChoice() {
   
    

    const [active, setActive] = useState(0);
    
   

    const openTab = el => setActive(Number(el.target.dataset.index))

    return (
        <div className="aboutTabs">
            <img className="tabsImg" src={aboutStar} alt={aboutStar} />
        <div className="aboutChoice">
            <p className="aboutTabTitle">
            Почему стоит выбрать именно нас?
            </p>
            <div className="tabsContent">
        {itemsTab.map((el, i) => (
          <div className="buttonTab" key={i}>
            <div className="btnImg">
          <button
            className={`tablinks`}
            onClick={openTab}
            data-index={i}
          >
            <img 
            data-index={i}
            className={`imgTab`} 
            src={i === active ? activeImg : inactiveImg} 
            alt="imgActive" />
            {el.title}</button>
         </div>
         <div className={`${i === active ? 'active' : 'inactive '}`}>{el.content}</div>
         </div>
        ))}
    </div>
    </div>
    </div>
    )
}

export default AboutChoice