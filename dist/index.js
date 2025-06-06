(()=>{function e(e,t){return`
    <button type="button" class="w-auto px-4 h-10  bg-blue-400 hover:bg-gray-300 rounded-lg ">
    <a href=${e} class="text-white">${t}</a>
    </button>
    `}document.getElementById("root").innerHTML=`

    <div class="sticky top-0">
    <nav class="flex items-center justify-between bg-blue-200 py-2">
    <div id="logo" class="flex flex-wrap items-center justify-center px-4 gap-4">
    <img src="https://cdn-icons-png.flaticon.com/128/869/869636.png"  alt="logo" class="w-10 h-10"/>
    <h5>
    Asto Shop
    </h5>
    </div>
    <div class="px-4">
    ${e("#","Home")}
    ${e("#","ProductPage")}
    ${e("#","About Us")}
    </div>
    </nav>
    </div>
    

    <header class="bg-blue-300 flex flex-row justify-center text-center h-dvh">
    <section id="hero" class="py-40">
    <h2 class="text-6xl">
    Welcome to Asto shop
    </h2>
    <button class=" pt-20">${e("#","Let Buy")}</button>
    </section>
    </header>
    

<footer class="flex flex-col space-y-10 justify-center m-10 py-4">

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a class="hover:text-gray-900" href="#">Home</a>
        <a class="hover:text-gray-900" href="#">About</a>
        <a class="hover:text-gray-900" href="#">Services</a>
        <a class="hover:text-gray-900" href="#">Media</a>
        <a class="hover:text-gray-900" href="#">Gallery</a>
        <a class="hover:text-gray-900" href="#">Contact</a>
    </nav>
    <p class="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>
    `})();
//# sourceMappingURL=index.js.map
