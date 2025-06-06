import HomePage from "./page/HomePage";
import Navber from "./components/Navbar"
import Footer from "./components/Footer"
import ProductPage from "./page/ProductPage";
// @ts-ignore
document.getElementById("root").innerHTML= `
${Navber()}
${HomePage()}
${Footer()}`;
