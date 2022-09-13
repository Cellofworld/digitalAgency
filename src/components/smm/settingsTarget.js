
import okIcon from "../../img/icons/selectOk.svg"

const paramTarget = ["место проживания выбираем необходимую страну/страны или отдельные города или радиус вокруг отдельного конкретного места",
 "возраст", "пол", "язык", "семейное положение", "предпочтения", "события из жизни", "сфера деятельности",
"хобби и интересы", "образ жизни", "операционная система или модель телефона", "и другие второстепенные параметры"]

const goalTarget = ["Ретаргет (ремаркетинг) с целью допродажи", "Таргет с целью подписать на Ваши социальные сети", "Создание похожей целевой аудитории с функцией LTV (работа над привлечением и удержанием клиентов)"]

function SettingsTarget() {
    return (
        <div className="settingsTarget">
            <div className="settingsTargetDiscription">
                <p className="settingsTargetTitile">Настройки таргетинга в Facebook и Instagram</p>
                <p className="settingsTargetSubtitle">При настройке таргетированной рекламы мы детально изучаем профиль Вашей целевой аудитории и с высокой точностью настраиваем таргетинг для донесения рекламного сообщения до человека, который заинтересован в Вашей услуге или товаре.</p>
            </div>
            <div className="settingsTargetParam">
                <p className="settingsTargetParamTitle">Чтобы таргетинг был максимально точным, на этапе настройки таргетинга мы будем задавать множество определенных параметров:</p>
                <div className="settingsTargetParamCards">
                    {
                        paramTarget.map((el,i) => {
                            return (
                                <div className="settingsTargetParamCard" key={i}>
                                    <img className="settingsTargetParamCardImg" src={okIcon} alt={okIcon} />
                                    <p className="settingsTargetParamCardDiscription" key={i}>{el}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="settingsTargetDiscription">
                <p className="settingsTargetTitile">Настройка рекламы по базе клиентов и похожей аудитории</p>
                <p className="settingsTargetSubtitle">Пожалуй, данный вид рекламы является самым эффективным с точки зрения повторных покупок или сделок. Как это работает? Всё просто. За время работы Вашего бизнеса у Вас собирается информация о клиентах (их имена, номера телефонов, e-mail и тд.). Всю эту информацию можно загрузить в рекламный кабинет Facebook, сформировать аудиторию и запускать по ней рекламу.</p>
            </div>
            <div className="settingsTargetParam">
                <p className="settingsTargetParamTitle">С теоретической точки зрения, мы можем выделить 3 цели для запуска рекламы по базе клиентов:</p>
               <div className="settingsTargetParamCardsTheory">
               {
                    goalTarget.map((el,i) => {
                        return (
                            <div className="settingsTargetParamCardTheory" key={i}>
                                <img className="settingsTargetParamCardImg" src={okIcon} alt={okIcon} />
                                <p className="settingsTargetParamCardDiscription">{el}</p>
                            </div>
                        )
                    })
                }
               </div> 
               <p className="settingsTargetSubtitle">Со своей стороны, мы рекомендуем запускать ремаркетинг на данную аудиторию. Для Ваших клиентов будет актуально получать информацию о новых товарах, акциях, грядущих мероприятиях, всё то, что будем им ценно и будет мотивировать на дальнейшее сотрудничество с Вами.</p>
               <p className="settingsTargetBonus">Дополнительным бонусом является то, что данную аудиторию можно расширить. Каким образом? Рассказываем. В Facebook есть возможность создавать «похожие аудитории».</p> 
               <div className="settingsTargetExample">
                    <p className="settingsTargetExampleTitle">Пример:</p>
                    <p className="settingsTargetExampleSubtitle">За основу мы берем Вашу базу клиентов и формируем аудиторию. Далее мы создаем “похожую аудиторию” – алгоритмы социальной сети сами будут искать людей, которые по поведенческим характеристикам будут максимально похожи на Вашу базу клиентов. Таким образом, мы получаете практически со 100% вероятностью “клонов” Ваших клиентов, на которых можно таргетировать рекламу в Facebook и Instagram, и, скорее всего, они отреагируют на Ваше рекламное сообщение.</p>
                    
                </div>           
            </div>

        </div>
    )
}
export default SettingsTarget