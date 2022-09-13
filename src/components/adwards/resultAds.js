import prize from "../../img/icons/prize.svg"

const resultItems = [
    {
        img: prize,
        title: "Увеличение притока потенциальных горячих клиентов с уже определенной и сформированной потребностью"
    },
    {
        img: prize,
        title: "Продуманная рекламная стратегия",
    },
    {
        img: prize,
        title: "Рекомендации по развитию рекламной стратегии",
    },
    {
        img: prize,
        title: "Вывод вашего сайта на лидирующие позиции на первой странице результатов поиска с пометкой «реклама»",
    },
    {
        img: prize,
        title: "Постоянный анализ эффективности рекламных кампаний",
    },
    {
        img: prize,
        title: "Регулировка уровня затрат",
    }
]

function RessultAds() {
    return (
        <div className="resultAds">
            <p className="resultAdsTitle">Что вы получаете в результате?</p>
            <div className="resultAdsCards">
                {resultItems.map((el) => (
                    <div className="resultAdsCard">
                        <img className="resultAdsImg" key={el.img} src={el.img} alt={el.img} />
                        <p className="resultAdsCardTitle">{el.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RessultAds