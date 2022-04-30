window.motywy = null
window.opisy = null
window.utwory = null

fetch("data/motywy.json")
    .then(r => r.json())
    .then(r => {
        window.motywy = r
        render()
    })

fetch("data/opisy.json")
    .then(r => r.json())
    .then(r => {
        window.opisy = r
        render()
    })

fetch("data/utwory.json")
    .then(r => r.json())
    .then(r => {
        window.utwory = r
        render()
    })

window.selected_utwor = 'null'
window.selected_motyw = 'null'

function renderMotywy() {
    const dropdown = document.createElement("select")
    dropdown.id = "motywy"

    const none = document.createElement("option")
    none.value = 'null'
    none.text = "-"
    none.selected = window.selected_motyw == 'none'
    dropdown.add(none)

    for (const id in window.motywy) {
        if (window.selected_utwor != 'null') {
            if (!window.utwory[window.selected_utwor].motywy.includes(id)) continue;
        }
        const element = motywy[id];
        const option = document.createElement("option")
        option.value = id
        option.text = element.nazwa
        option.selected = window.selected_motyw == id
        dropdown.add(option)
    }
    dropdown.onchange = (ev) => {
        window.selected_motyw = ev.target.value
        render()
    }
    return dropdown
}

function renderUtwory() {
    const dropdown = document.createElement("select")
    dropdown.id = "utwory"

    const none = document.createElement("option")
    none.value = 'null'
    none.text = "-"
    none.selected = window.selected_utwor == 'none'
    dropdown.add(none)

    for (const id in window.utwory) {
        if (window.selected_motyw != 'null') {
            if (!window.motywy[window.selected_motyw].utwory.includes(id)) continue;
        }
        const element = window.utwory[id];
        const option = document.createElement("option")
        option.value = id
        option.text = element.tytul + ((element.autor && ` - ${element.autor}`)||"")
        option.selected = window.selected_utwor == id
        dropdown.add(option)
    }
    dropdown.onchange = (ev) => {
        window.selected_utwor = ev.target.value
        render()
    }
    return dropdown
}

function renderContent(){
    if (window.selected_motyw == 'null' || window.selected_utwor == 'null') {
        return ""
    }
    return window.opisy[`${window.selected_utwor}|${window.selected_motyw}`] || ""
}

function render() {
    if (!(window.motywy && window.utwory && window.opisy)) return;

    const filter_bar = document.getElementById("filter-bar")
    filter_bar.innerHTML = '';
    filter_bar.appendChild(renderMotywy())
    filter_bar.appendChild(renderUtwory())

    const content = document.getElementById("content")
    content.innerText = renderContent()
}