function RNG(arr) {
    if (!Array.isArray(arr)) {
        throw new Error(`Argument ${arr} is not an list/applicable to an list`)
    }
    return arr[Math.round(Math.random() * (arr.length - 1))]
}

function e() {
    window.location.href == RNG<string>([
        "https://youtube.com", "https://mintsite.github.io", "https://angelsites.neocities.org", "https://v2.windows93.net/trollbox",
        "https://discord.com/app", "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
    ])
}

e()