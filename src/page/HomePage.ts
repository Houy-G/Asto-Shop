import Button from "../components/Buttons";
export default function HomePage():string {
    return `
    <header class="bg-blue-300 flex flex-row justify-center text-center h-dvh">
    <section id="hero" class="py-40">
    <h2 class="text-6xl">
    Welcome to Asto shop
    </h2>
    <button class=" pt-20">${Button("#","Let Buy")}</button>
    </section>
    </header>
    `;
 }