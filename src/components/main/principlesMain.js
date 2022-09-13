import princImg from "../../img/principles.png"

 function Principles () {
    return (
        <div className="principlesMain">
            <img className="principlesImg" src={princImg} alt={princImg}></img>
            <div className="principlesDiscription">
                <p className="principleDiscriptionTitle">
                    Наши принципы взаимоотношений с клиентами
                </p>
                <p className="principleDiscriptionSubtitle">
                    Мы уверены, что главное в партнерских взаимоотношениях – доверие и результат,
                    который измеряется достижением поставленных целей, способствующих росту бизнеса клиента.
                    Отличные показатели – это цифры, которые наглядно показывают насколько мы приблизились к цели.
                </p>
                <p className="principleDiscriptionHighlight">
                    Такой подход предполагает неминуемый успех. Работа с показателями эффективности, 
                    определение точек роста и приоритетных направлений развития – вот наша стратегия успеха.
                </p>
                <p className="principleDiscriptionSubtitle">
                    Мы не будем рисовать несбыточные прогнозы и использовать «мёртвые» каналы, 
                    потому что отчитываемся перед клиентом за итоговые показатели. Если у вас все отлично,
                     то мы так и скажем, прямо и без лишних слов.
                </p>
            </div>
        </div>
    )
}

export default Principles