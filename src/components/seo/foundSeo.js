import foundSeo from "../../img/seoImg/found.png"

function FoundSeo() {
    return (
        <div className="seoFound">
            <img className="principlesImg" src={foundSeo} alt={foundSeo} />
            <div className="principlesDiscription">
                <p className="principleDiscriptionTitle">Поисковая оптимизация. Что мы предлагаем?</p>
                <p className="principleDiscriptionSubtitle">Мы проводим работы по оптимизации Вашего сайта для его выхода на лидирующие позиции в результатах выдачи Google, Yandex или других поисковых системах по релевантным ключевым запросам.</p>
                <p className="principleDiscriptionSubtitle">Говоря коммерческим языком, главной целью поисковой оптимизации (SEO) является увеличение органической посещаемости сайта для конвертирования посетителей в новые заказы, заявки, звонки.</p>
                <p className="principleDiscriptionHighlight">Мы используем максимально прозрачный подход в работе по SEO. В следующем блоке мы детально описываем поэтапные шаги по оптимизации Вашего сайта.</p>
            </div>
        </div>
    )
}

export default FoundSeo