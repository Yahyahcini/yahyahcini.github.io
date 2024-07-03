function darkmode() {
    let input = document.getElementById("dark");
    input.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });
}
darkmode()
function togglingcart() {
    let rightside = document.querySelector(".right-side")
    let checkbox = document.getElementById("checking")
    let close = document.getElementById("close")
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            rightside.style.opacity = "1"
            rightside.style.width = "450px"
        }
    });
    close.addEventListener('click', function () {
        rightside.style.opacity = "0"
        rightside.style.width = "0"
        checkbox.checked = false

    })

}
togglingcart()
function refreshcart() {
    let refresh = document.getElementById("refresh");
    refresh.addEventListener('click', function () {
        refresh.style.animation = 'rotation 0.5s ease-out';
        refresh.addEventListener('animationend', function () {
            refresh.style.animation = '';
        }, { once: true });

        let heartIcon = document.querySelector(".heart")
        let favorites = document.querySelectorAll(".favorite")
        let empty = document.querySelector(".empty")
        favorites.forEach(favorite => {
            favorite.remove()
            heartIcon.classList.remove("hearting")
        });
        empty.style.display = 'block'


    });
}

refreshcart();
const token = '7077228bbb463cefd05d4168d7f88cfa5549cd6ff2a13f2a304761ca68c483275548008e46e766cb6cdced6185283519b5c038f82d54935e15c5f3b0ecada8d73022d8954f2ed3ecffde785729e627a35ff88ce8b9952a4eaa01334d3f58feb88abf475db216f7cd5e048b0b9c72e53321ca07ec8144122cf86fc514133a5640';

function fetchingsmallone() {
    const url = "http://localhost:1337/api/shoppictures?populate=*";

    // Set loading state
    const divsmall = document.querySelector(".picture");

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
        .then(response => response.json())
        .then(data => {
            const pictures = data.data;
            console.log(pictures)
            // Clear content
            divsmall.innerHTML = ""; // Clear previous content

            // Create and display images for each picture
            pictures.forEach(picture => {
                const images = document.createElement("img");
                images.classList.add("smallone");
                images.src = `http://localhost:1337${picture.attributes.photo.data.attributes.url}`;


                divsmall.appendChild(images);
            });

        })

}

fetchingsmallone();

function bar() {
    let checkbox = document.getElementById("changing")
    let bars = document.querySelector(".bars")
    let xmark = document.querySelector(".xmark")
    let mainlist = document.querySelector(".mainlist")
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            bars.style.opacity = '0'
            xmark.style.opacity = '1'
            mainlist.style.minHeight = '100vh'

        }

        else {
            bars.style.opacity = '1'
            xmark.style.opacity = '0'
            mainlist.style.minHeight = '0'



        }

    })
}
bar()