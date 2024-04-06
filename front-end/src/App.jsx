import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import PostingsPage from "./pages/PostingsPage" 
import DecisionsPage from "./pages/DecisionsPage"
import FAQPage from "./pages/FAQPage" 
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PostingsPage />} /> 
                <Route path="/decisions" element={<DecisionsPage />}/> 
                <Route path="/faq" element={<FAQPage />}/> 
            </Routes>
        </BrowserRouter>
    ); 
}

export default App; 