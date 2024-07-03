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
    let cartcontent = document.querySelector(".cart-content");
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

function darkmode() {
    let input = document.getElementById("dark");
    input.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });
}
darkmode()
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