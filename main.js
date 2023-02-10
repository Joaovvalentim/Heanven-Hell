const selectors = {
    mode: 'section.main .mode',
    section: 'section.main',
    title: 'section.main .title',
    clouds: 'section.main .clouds img',
};

const mode = document.querySelector(selectors.mode)
const section = document.querySelector(selectors.section)
const title = document.querySelector(selectors.title)
const clouds = document.querySelectorAll(selectors.clouds)

const MODE_LIGTH = 'heaven'
const MODE_DARK = 'hell'

const getCurrentMode = () => {
    let currentMode = null;
    if (section.classList.contains(MODE_LIGTH)) {//verifica qual modo esta minha section(dark ou ligth)
        currentMode = MODE_LIGTH
    } else if (section.classList.contains(MODE_DARK)) {
        currentMode = MODE_DARK
    }
    return currentMode
}

const mudarTitle = () => {
    const current = getCurrentMode()
    const titleText = {}
    titleText[MODE_DARK] = 'João Dev Ligth'
    titleText[MODE_LIGTH] = 'João Dev Dark'
    title.innerText = titleText[current]

    // console.log(getCurrentMode())
}

const mudarMainClass = () => {
    const current = getCurrentMode() // PEGA EM QUAL MODO ESTA
    section.classList.remove(MODE_DARK, MODE_LIGTH) // REMOVE OS 2 MODOS

    if (current === MODE_LIGTH) {
        section.classList.add(MODE_DARK) // ADICIONA MODO DARK
    } else if (current === MODE_DARK) {
        section.classList.add(MODE_LIGTH) // ADICIONA MODO LIGTH
    }
}

const mudarNuvens = () => {
    const current = getCurrentMode()

    const regex = /imgs\/(heaven|hell)/;
    const newSrc = `imgs/${current}`;

    clouds.forEach((img) => {
        const imgSrc = img.src.replace(regex, newSrc)
        img.src = imgSrc
    })
}

const mudarModo = (e) => {
    //mudar titulo
    mudarTitle()

    //mudar a classe da section.main(adicionar .heaven ou .hell)
    mudarMainClass()

    // mudar nuvenas
    mudarNuvens()


}

mode.addEventListener('click', mudarModo)