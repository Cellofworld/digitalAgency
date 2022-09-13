
const dataTable = [
   
    {    
        titleTab: "Пример контент-плана на месяц",
        subtitleTab: "Данный пример части контент-плана был разработан и реализован для рижской кальянной Hookah Place Riga.",
        title: "День недели",
        day: "01.08.2020",
        place: "Пост в ленте",
        typeM: "Продающий",
        discription: "Информация о товарах, услугах",
        typeC: "Фото",
        public: "Как не утонуть в выборе табака и кальянов в нашем шоу-руме? В Hookah Place Riga доброжелательные мастера кальянного ремесла не только подскажут, что выбрать, но и расскажут, как правильно приготовить кальян. Всегда ждем вас в гости."
    },
    {
        title: "Место размещения",
        day: "02.08.2020",
        place: "Пост в ленте",
        typeM: "Репутационный",
        discription: "Репортаж из офиса",
        typeC: "Видео",
        public: "Кальянщик будет курить и рассказывать."
    },
    {
        title: "Тип сообщения",
        day: "03.08.2020",
        place: "Пост в ленте",
        typeM: "Развлекательный",
        discription: "Юмор",
        typeC: "Фото",
        public: "Когда кальян всегда под рукой."
    },
    {
        title: "Тип контента",
        day: "04.08.2020",
        place: "Пост в ленте",
        typeM: "Образовательный",
        discription: "Советы, рекомендации",
        typeC: "Фото",
        public: "Чаша для кальяна – самый важный и главный аксессуар. Именно в правильно подобранной чаше табак раскроется так, как задумал производитель. Да и курить на эстетически красивой чаше всегда приятно.Наши мастера всегда подскажут и подберут чашу от лучших производителей, чтобы вы сполна насладились вкусами табака."
    },
    {
        title: "Набросок публикации",
        day: "06.08.2020",
        place: "Пост в ленте",
        typeM: "Репутационный",
        discription: "Процесс производства",
        typeC: "Видео",
        public: "MIX дня (кальянный табак)"
    },
]

function CreateTable() {

    return (
        <div className="contentTable">
            <div className="titleTable">
                <p className="tableTitle">{dataTable[0].titleTab}</p>
                <p className="tableSubtitle">{dataTable[0].subtitleTab}</p>
            </div>
            <table>
               <thead>
                <tr>
                    {
                        dataTable.map((el,i) => {
                            return (
                                <th key={i}>{el.title}</th>
                            )
                        })
                    }
                    
                </tr>
               </thead>
               <tbody>
                {
                    dataTable.map((el,i) => {
                        return (

                        <tr key={i}>
                            <td>{el.day}</td>
                            <td>{el.place}</td>
                            <td>
                                <p><b>{el.typeM}</b></p>
                                <p>{el.discription}</p>
                            </td>
                            <td>{el.typeC}</td>
                            <td>{el.public}</td>
                        </tr>
                    
                    )})
                }
               </tbody>
            </table>
        </div>
    )
}

export default CreateTable