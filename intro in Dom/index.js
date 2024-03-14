let addbutton = document.getElementById('acb')
let savedimages = [];
window.addEventListener('load', function () {
    savedimages = JSON.parse(localStorage.getitem("savedimages")) || [];
    for (let i = 0; i < savedimages.length; i++) {
        let imageSrc = savedimages[i];
        let targetElement = document.getElementById('dive')
        let imageElement = document.createElement("img")
        let p = document.createElement("p")
        let del = document.createElement('button')
        p.innerHTML = "Wellcome " + us1 + "!"
        p.id = "photo"
        imageElement.src = imageSrc
        imageElement.alt = "image"
        del.innerHTML = "Delete"
        del.addEventListener("click", function () {
            savedimages.splice(i, 1)
            localStorage.setItem("savedimages", JSON.stringify(savedimages));
            targetElement.removeChild(p)
            targetElement.removeChild(imageElement)
            targetElement.removeChild(del)
        })
        targetElement.appendChild(p)
        targetElement.appendChild(imageElement)
        targetElement.appendChild(del)
    }
})
addbutton.addEventListener("click", function () {
    targetElement.removeChild(p)
    targetElement.removeChild(imageElement)
    targetElement.removeChild(del)
})

savedimages.push(imageElement.src)
localStorage.setItem('savedimages', JSON.stringify(savedimages))
targetElement.appendChild(p)
targetElement.appendChild(imageElement)
targetElement.appendChild(del)