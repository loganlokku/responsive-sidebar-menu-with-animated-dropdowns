function toggleSidebar() {
    const toggleButton = document.getElementById("toggle-btn")
    const sidebar = document.getElementById("sidebar")

    sidebar.classList.toggle("close")
    toggleButton.classList.toggle("rotate")

    closeAllSubMenus()

}

function toggleSubMenu(button) {
    const toggleButton = document.getElementById("toggle-btn")
    const sidebar = document.getElementById("sidebar")

    if(!button.nextElementSibling.classList.contains("show")){
        closeAllSubMenus()
    }

    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if (sidebar.classList.contains("close")) {
        sidebar.classList.toggle("close")
        toggleButton.classList.toggle("rotate")
    }
}

function closeAllSubMenus() {
    const sidebar = document.getElementById("sidebar")

    Array.from(sidebar.getElementsByClassName("show")).forEach(ul => {
        ul.classList.remove("show")
        ul.previousElementSibling.classList.remove('rotate')
    })
}