import FoundSeo from "../components/seo/foundSeo"
import SeoTabs from "../components/seo/seoTab"
import SeoTable from "../components/seo/seoCostTable"
import DifferncesSeo from "../components/seo/differencesSeo"
import QuestionsSeo from "../components/seo/questionsSeo"
import Clients from "../components/general/clients"
import Contacts from "../components/general/contacts"
import "../components/seo/seo.css"

function Seo() {
    return (
       <div className="seo">
        <div className="seoHeader">
            <p className="seoTitle">Оптимизация <br></br> сайта SEO</p>
            <p className="seoSubtitle">Превращение текстового наполнения сайта в мощный <br></br> маркетинговый инструмент</p>
        </div>
        <FoundSeo />
        <SeoTabs />
        <SeoTable />
        <DifferncesSeo />
        <QuestionsSeo />
        <Clients />
        <Contacts />
       </div>
    )
}
export default Seo