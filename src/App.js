import { Route, Routes } from "react-router-dom"
import Navigation from "./components/navigation/navigationHeader"
import FollowUs from "./components/general/followUs"
import AboutUs from "./pages/aboutUs"
import Contact from "./pages/contacts"
import Adwards from "./pages/googleAdwards"
import MainPages from "./pages/mainPage"
import Seo from "./pages/seo"
import Smm from "./pages/smm"

export function App() {
 return (
    <>
         
       <Routes>
         <Route path="/" element={<Navigation />} >
            <Route index element={<MainPages />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="followus" element={<FollowUs />} />
            <Route path="googleadwards" element={<Adwards />} />
            <Route path="seo" element={<Seo />} />
            <Route path="smm" element={<Smm />} />
         </ Route>
      </Routes>
      </>
 )   
}

export default App