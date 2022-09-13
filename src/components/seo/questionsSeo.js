
import questionImg from "../../img/seoImg/question.png"

function QuestionsSeo() {
    return (
        <div className="QuestionsSeo">
            <p className="QuestionsSeoDiscription">В конце мы ответим на часто задаваемые вопросы</p>
            <div className="QuestionsSeoContent">
                <img className="QuestionsSeoImg" src={questionImg} alt={questionImg} />
                <div className="QuestionsSeoSections">
                    <div className="QuestionsSeoSection">
                        <p className="QuestionsSeoSectionTitle">Что такое оптимизация сайта (SEO)?</p>
                        <p className="QuestionsSeoSectionSubtitle">Оптимизация сайта включает в себя определенный фронт работ по изменению и улучшению (непосредственно на сайте и за его пределами), которые делают сайт более заметным в поисковых системах Google, Yandex, Bing и др., и, соответственно, более полезным для посетителей.</p>
                    </div>
                    <div className="QuestionsSeoSection">
                        <p className="QuestionsSeoSectionTitle">Почему стоит оптимизировать сайт?</p>
                        <p className="QuestionsSeoSectionSubtitle">После правильно проделанных работ по оптимизации сайта можно с уверенностью говорить о том, что сайт будет ранжироваться на более высоких позициях в поисковых системах в сравнении с изначальными позициями. Стоит напомнить о том, что вклад в SEO является долгосрочным вкладом в бизнес.</p>
                    </div>
                    <div className="QuestionsSeoSection">
                        <p className="QuestionsSeoSectionTitle">Сколько времени занимает оптимизация?</p>
                        <p className="QuestionsSeoSectionSubtitle">Это зависит от множества факторов. Возьмем самые весомые: уровень конкуренции, качество предложения, спрос. Если мы возьмем среднеконкурентную нишу (при условии, что у вас в сравнении с конкурентами предложения является как минимум не хуже), то первые положительные результаты можно будет наблюдать в первый месяц работы.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuestionsSeo