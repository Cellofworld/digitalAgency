import wVideo from "../../img/icons/wVideo.svg"
import market_filled from "../../img/icons/marketFilled.svg"
import man from "../../img/icons/man.svg"
import conversion from "../../img/icons/conversion.svg"
import message from "../../img/icons/message.svg"
import aim from "../../img/icons/aim.svg"
import buy from "../../img/icons/buy.svg"
import box from "../../img/icons/box.svg"
import heart from "../../img/icons/heart.svg"
import gen from "../../img/icons/gen.svg"
import cursor from "../../img/icons/cursor.svg"


const tableItem = [
    {
        title: "Узнаваемость",
        discription: [ 
            {id:1, subtitle: "Узнаваемость бренда", icon: heart},
            {id:2, subtitle: "Охват", icon: market_filled}
        ] 
    },
    {
        title: "Лиды",
        discription: [
            {id:3, subtitle: "Трафик", icon: cursor},
            {id:4, subtitle: "Вовлеченность", icon: man},
            {id:5, subtitle: "Установки приложения", icon: box},
            {id:6, subtitle: "Просмотры видео", icon: wVideo},
            {id:7, subtitle: "Генерация лидов", icon: gen},
            {id:8, subtitle: "Сообщения", icon: message}
        ]
    },
    {
        title: "Конверсия",
        discription: [
            {id:9, subtitle: "Конверсия", icon: conversion},
            {id:10, subtitle: "Продажи товаров из каталога", icon: buy},
            {id:11, subtitle: "Посещения точек", icon: aim}
        ]
    }
]


const tableTitleRow =  tableItem.map((el) => {
  return (  
            <th>{el.title}</th>             
         )})
                  
                  


const tableContenteRows =  tableItem.map((el,i) => {
                    return ( 
                        <td key={i} className="goalAdsTd">
                            {el.discription.map((e,i) => {
                        return (
                            <tr key={i} className="goalAdsTr">
                                <img className="goalAdsIcon" src={e.icon} alt={e.icon} />
                                <p className="goalAdsTableSubtitle">{e.subtitle}</p>                               
                            </tr>                           
                        )
                    })}
              </td>
)}) 



function GoalAds() {
    return (
        <div className="goalAds">
            <div className="goalAdsDiscription">
                <p className="goalAdsTitle">Цели рекламной кампании</p>
                <p className="goalAdsSubtitle">После определения аудитории, по который будет запускаться реклама – необходимо выбрать цель. Сейчас мы детально расскажем о том, какие цели рекламы есть в Facebook и Instagram, и в каких случаях их необходимо использовать:</p>
            </div>
            <div className="goalAdsCards">
            <table className="goalAdsTable">
                <thead className="goalAdsThead">
                {tableTitleRow}
                </thead>
                <tbody>
                    {tableContenteRows}
                </tbody>
                
            </table>
            </div>
        </div>
    )
}

export default GoalAds