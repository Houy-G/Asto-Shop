export  default function Footer(): string {
    return`
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
    `
}