
const dataTable = [
   
    {    
        titleTab: "Структура коммуникации",
        subtitleTab: "Для составления публикаций мы используем исключительно продуманную и рабочую структуру коммуникации. Данный инструмент помогает нашим специалистам готовить контент для компаний с максимальной продуманностью и эффективностью. Говоря простым языком, данная модель позволяет разнообразить контент и не надоедать подписчикам однотипностью материала.",
        title: "Образовательный(25%)",
        task: "Задача: обучать, демонстрировать компетенцию",
        list: ["Советы, рекомендации", "Инструкции", "Лайфхаки", "Новости индустрии"]
    },
    {
        title: "Репутационный(25%)",
        task: "Задача: формировать доверие, лояльность",
        list: ["Отзывы", "Кейсы", "Новости компании", "Знакомство с сотрудниками", "Репортаж из офиса", "Процесс производства"]
    },
    {
        title: "Развлекательный (10%)",
        task: "Задача: развлекать, веселить",
        list: ["Юмор", "Мемы", "Гифки", "Смешные истории", "Видео"]
    },
    {
        title: "Коммуникационный(20%)",
        task: "Задача: вовлекать в коммуникацию, увеличить активность, получить обратную связь",
        list: ["Обсуждения, дискуссии", "Опросы", "Игры", "Конкурсы"]
    },
    {
        title: "Продающий(20%)",
        task: "Задача: продавать",
        list: ["Информация о товарах, услугах", "Анонсы выхода новых продуктов", "Распродажи, акции, скидки", "Ваши преимущества", "Продающие статьи"]
    }
]

function CommunicationTable() {

    const tableTitle = dataTable.map((el,i) => {
        return (
            <th key={i}>{el.title}</th>          
    )})

    const tableRow = dataTable.map((el,i) => {
        return (
                <td key={i}>{el.task}</td>          
    )})
    
    const tableTab = dataTable.map((el,i) => {
        return (
                <td key={i}>
                    <ul>
                   {el.list.map((e,i) => {
                    return(                      
                            <li key={i}>{e}</li>                        
                    )
                    })}
                   </ul>
                    </td>         
    )})

    return (
        <div className="contentTableCom">
            <div className="titleTableCom">
                <p className="tableTitle">{dataTable[0].titleTab}</p>
                <p className="tableSubtitleCom">{dataTable[0].subtitleTab}</p>
            </div>
            <table className="com">
               <thead>
                <tr>{tableTitle}</tr>
               </thead>
               <tbody>
                <tr>{tableRow}</tr>
                <tr>{tableTab}</tr>
               </tbody>
            </table>
        </div>
    )
}

export default CommunicationTable