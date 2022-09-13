import googleMonitors from "../../img/googleImg/googleMonitors.png"
import googleIcon from "../../img//icons/iconGoogle.svg"

function GoogleFirstResults() {
    return (
        <div className="googleResults">
                <img className="principlesImgGoogle" src={googleMonitors} alt={googleMonitors} />
                <div className="principlesDiscription discriptionMonitirs">
                    <p className="discriptionMonitorsTitle">
                        Вы хотите улучшить результаты своих рекламных кампаний, сократить стоимость привлечения потенциального клиента и/или повысить возврат инвестиций (ROI) от рекламы в системе Google?
                    </p>
                    <div className="principlesHighlightsGoogle">
                        <img className="googleIcon" src={googleIcon} alt={googleIcon} />
                        <p>
                            Вы, определенно, попали в правильное место! <br></br>Специализация нашей команды – реклама в Google.                           
                        </p>
                    </div>
                    <p className="principleDiscriptionSubtitle">
                        Наше агентство занимается разработкой и внедрением стратегий таргетированной, контекстной и поисковой рекламы в Google. Мы помогаем малому бизнесу в Латвии наладить бесперебойный поток коммерческих сообщений до целевой аудитории.
                    </p>
                    <p className="principleDiscriptionSubtitle">
                    Для этого мы используем весь инструментарий Google рекламы, сопровождая пользователя от формирования потребности до осуществления целевых действий.
                    </p>
                </div>
            </div>
    )
}

export default GoogleFirstResults