import PersonEditor from "./components/PersonEditor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Layout from "./components/Layout";
import Home from "./components/Home";

export default function App() {

  return (
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"10px"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/person" element={<PersonEditor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}