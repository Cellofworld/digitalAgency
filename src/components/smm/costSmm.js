
const dataTable = [
   
    {    
        titleTab: "Стоимость услуг",
        title: "Стратегия SMM продвижения",
        task: "Цена: от 0 EUR",
        list: ["SMM-стратегия", "Аудит страниц и рекламы", "Концепция, контент-планы", "Анализ бренда и конкурентов"]
    },
    {
        title: "Ведение соц.сетей",
        task: "Цена: от 0 EUR",
        list: ["Графическое оформление аккаунтов", "Шаблоны для постов и хайлайтс", "Конкурсы и марафоны", "Создание контента", "Детальная аналитика"]
    },
    {
        title: "Таргетированная реклама",
        task: "Цена: от 0 EUR",
        list: ["Таргетированная реклама в Facebook и Instagram", "Реклама по базам клиентов и look-a-like (похожие аудитории)", "Подбор аудиторий, сегментация по интересам, разбивка на группы", "Настройка рекламных кампаний, подбор плейсментов", "Установка Facebook Pixel, настройка конверсий"]
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
        <div className="costSmm">
            <div className="discriptionTableCommunication">
                <p className="titleCostTable">{dataTable[0].titleTab}</p>
            </div>
            <table className="costTable">
               <thead className="costTableThead">
                <tr className="costTableTr">{tableTitle}</tr>
               </thead>
               <tbody>
                <tr className="costTableTr">{tableRow}</tr>
                <tr className="costTableTr">{tableTab}</tr>
               </tbody>
            </table>
        </div>
    )
}

export default CommunicationTable