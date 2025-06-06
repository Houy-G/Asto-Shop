export default function Button(link:string, name:string):string {
    return `
    <button type="button" class="w-auto px-4 h-10  bg-blue-400 hover:bg-gray-300 rounded-lg ">
    <a href=${link} class="text-white">${name}</a>
    </button>
    `
}