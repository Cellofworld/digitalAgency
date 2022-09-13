const dataTable = [
   
    {    
        titleTab: "Стоимость услуг",
        title: "Услуга",
        content: ["SEO-аудит", "Технический аудит сайта", "Сбор семантического ядра", "Исправление ошибок на сайте", "Комплексная оптимизация страниц под семантическое ядро", "Формирование оптимизированной структуры", "SEO-копирайтинг", "Реализация проекта" ]
    },
    {
        title: "Объем работ",
        content: ["от 10 часов", "весь сайт", "от 30 запросов", "весь сайт", "весь сайт", "весь сайт", "определенные абзацы, страницы или весь сайт", "весь сайт" ]
    },
    {
        title: "Стоимость",
        content: ["от 0 EUR", "от 0 EUR", "от 0 EUR", "от 0 EUR", "от 0 EUR", "от 0 EUR", "от 0 EUR", "Бесценно" ]
    }
]

const tableTab = dataTable.map((el,i) => {
    return (
                <td key={i}>
                    {el.content.map((e,i) => {
                return(    
                    <tr key={i} className="seoCostTableTr">
                        {e}
                    </tr>                  
                                                
                )
                })}
                </td>      
               
                     
)})
                
               
               
            
               
                 


export function seoTable() {

    return (
        <div className="seoTable">
            <div className="seoTableDiscription">
                <p className="seoTableTitile">{dataTable[0].titleTab}</p>
            </div>
            <table className="seoCostTable">
               <thead>
                <tr>
                    {
                        dataTable.map((el,i) => {
                            return (
                                <th className="seoCostTh" key={i}>{el.title}</th>
                            )
                        })
                    }
                </tr>
               </thead>
               <tbody>
                {tableTab}
                </tbody>
            </table>
        </div>
    )
}

export default seoTable