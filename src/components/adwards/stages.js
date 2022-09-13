import selectImg from "../../img/icons/selectOk.svg"

const stagesItems = [
    {
        img: selectImg,
        title: "Оптимизируем",
        discription: "После запуска рекламы мы анализируем результаты и оптимизируем цели рекламной кампании (автоматическая оптимизация роботами)."
    },
    {
        img: selectImg,
        title: "Улучшаем",
        discription: "Определяем и используем дополнительные инструменты и опции внутри системы, исправляем недочеты (если такие были), корректируем ставки (цена за клик, цена конверсии и т.д.)."
    },
    {
        img: selectImg,
        title: "Подготавливаем отчеты",
        discription: "Подготавливаем и предоставляем детальную отчетность о проделанной работе и результатах запущенных кампаний в Google Adwords. Составляем перечень рекомендаций по дальнейшему ведению кампаний."
    },
    {
        img: selectImg,
        title: "Изучаем проект",
        discription:"Мы знакомимся с вашим бизнесом, изучаем специфику ниши и анализируем активность конкурентов и определяем целевую аудиторию (ЦА)."
    },
    {
        img: selectImg,
        title: "Разрабатываем медиаплан",
        discription: "Выбираем инструменты, составляем медиаплан. Определяем с вами цели."
    },
    {
        img: selectImg,
        title: "Создаем кампанию",
        discription: "Мы создаем и настраиваем Google Analytics, создаем цели в GA, создаем аудитории. Составляем рекламные объявления, собираем релевантные коммерческие ключи и определяем список минус-слов. Запускаем рекламу."
    }
]

function Stages() {
    return (
        <div className="stages">
            <p className="stagesTitle">Этапы работы</p>
            <div className="stagesCards">
                {stagesItems.map((el) => (
                    <div className="stagesCard">
                        <img className="stagesCardImg" key={el.img} src={el.img} alt={el.img} />
                        <p className="stagesCardTitle">{el.title}</p>
                        <p className="stagesSubtitle">{el.discription}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stages