import { NavLink, Outlet } from 'react-router-dom';
import "../navigation/navigation.css"

const setActive = ({isActive}) => isActive ? 'activeLinkBar navBarLink' : 'inActiveLinkBsr navBarLink';


function Navigation() {
    return (
        <>
        <div className="navigation">
            <div className="logo"></div>
            <div className="navBar">
            <NavLink to="/" className={setActive}>Главная</NavLink>
            <NavLink to="aboutUs" className={setActive}>О нас</NavLink>
            <NavLink to="googleadwards" className={setActive}>Google Adwards</NavLink>
            <NavLink to="smm" className={setActive}>SMM</NavLink>
            <NavLink to="seo" className={setActive}>SEO</NavLink>
            <NavLink to="contacts" className={setActive}>Контакты</NavLink>
            
            </div>
        </div>
       <Outlet />
        </>
    )
}

export default Navigation
