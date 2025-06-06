import Button from "./Buttons";
export default function Navbar() {
    return `
    <div class="sticky top-0">
    <nav class="flex items-center justify-between bg-blue-200 py-2">
    <div id="logo" class="flex flex-wrap items-center justify-center px-4 gap-4">
    <img src="https://cdn-icons-png.flaticon.com/128/869/869636.png"  alt="logo" class="w-10 h-10"/>
    <h5>
    Asto Shop
    </h5>
    </div>
    <div class="px-4">
    ${Button("#", "Home")}
    ${Button("#", "ProductPage")}
    ${Button("#", "About Us")}
    </div>
    </nav>
    </div>
    `;
}
