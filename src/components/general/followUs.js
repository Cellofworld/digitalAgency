import React from "react"
import { useReducer } from "react"

const initialState = {
    name: "",
    email: "",
    number: "",
    message: "",
    agree: false
}
function reducer (state,action) {
    switch (action.type) {
        case 'fName': 
            return {
                ...state,
                name: action.payload
            }
        case 'fEmail':
            return {
                ...state,
                email: action.payload
            }
        case 'fNumber':
            return {
                ...state,
                number: action.payload
            }
        case 'fMessage':
            return {
                ...state,
                message: action.payload
            }
        case 'fAgree' :
            return {
                ...state,
                agree: action.payload
            }
            default:
                return {
                    ...state
                }
    }
}

function FollowUs () {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    console.log(state)
return (
    <div className="followUs">
        <div className="followTitle">
            Свяжитесь с нами
        </div>
        <form>
            <input 
            type="text"
            className="followName"
            placeholder="Имя"
            onChange={e => 
                dispatch({type:"fName", payload: e.target.value})}
            ></input>
            <input 
            className="followEmail"
            type="text"
            placeholder="Email"
            onChange={e => 
                dispatch({type:"fEmail", payload: e.target.value})}
            ></input>
            <input 
            className="followNumber"
            type="number"
            placeholder="+7 999 999 99 99"
            onChange={e => 
                dispatch({type:"fNumber", payload: e.target.value})}
            ></input>
            <textarea 
            className="followMessage"
            type="text"
            placeholder="Ваше сообщение"
            onChange={e => 
                dispatch({type:"fMessage", payload: e.target.value})}
            ></textarea>
            <div className="send">
                <button
                className="submitButton"
                disabled={!state.agree}
                >Отправить</button>
                <input 
                onChange={e => 
                dispatch({type:"fAgree", payload: e.target.checked})}              
                className="checkSend"
                type="checkbox"
                ></input>
                <p className="discriptinCheckBox">Я прочитал и принимаю условия <a href="#">пользовательского соглашения</a></p>
            </div>
        </form>
    </div>
)
}

export default FollowUs