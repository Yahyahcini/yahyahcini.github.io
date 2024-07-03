
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
function darkmode() {
    let input = document.getElementById("dark");
    input.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });
}
darkmode()

function carousel() {
    const delay = 5000; //ms

    const slides = document.querySelector(".slides");
    const slidesCount = slides.childElementCount;
    const maxLeft = (slidesCount - 1) * 100 * -1;

    let current = 0;

    function changeSlide(next = true) {
        if (next) {
            current += current > maxLeft ? -100 : current * -1;
        } else {
            current = current < 0 ? current + 100 : maxLeft;
        }

        slides.style.left = current + "%";
    }

    let autoChange = setInterval(changeSlide, delay);
    const restart = function () {
        clearInterval(autoChange);
        autoChange = setInterval(changeSlide, delay);
    };

    // Controls
    document.querySelector(".next-slide").addEventListener("click", function () {
        changeSlide();
        restart();
    });

    document.querySelector(".prev-slide").addEventListener("click", function () {
        changeSlide(false);
        restart();
    });
}
const token = '7077228bbb463cefd05d4168d7f88cfa5549cd6ff2a13f2a304761ca68c483275548008e46e766cb6cdced6185283519b5c038f82d54935e15c5f3b0ecada8d73022d8954f2ed3ecffde785729e627a35ff88ce8b9952a4eaa01334d3f58feb88abf475db216f7cd5e048b0b9c72e53321ca07ec8144122cf86fc514133a5640';
function fetchclothespictures() {
    const url = "http://localhost:1337/api/clothespictures?populate=*";

    // Set loading state
    const slides = document.querySelector(".slides");

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
        .then(response => response.json())
        .then(data => {
            const clothespictures = data.data; 
            console.log(clothespictures)           // Clear content
            slides.innerHTML = ""; // Clear previous content

            // Create and display images for each parfumpicture
            clothespictures.forEach(clothespicture => {
                const image = document.createElement("img");
                image.classList.add("slide");
                image.src = `http://localhost:1337${clothespicture.attributes.photo.data.attributes.url}`;


                slides.appendChild(image);
            });
            carousel();

        })

}

fetchclothespictures();
function fetchProducts() {
    const url = "http://localhost:1337/api/clothesproducts?populate=*";
    const productContainer = document.querySelector(".clothesproductsection"); 

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        },
    })
        .then(response => response.json())
        .then(data => {
            const products = data.data;
            productContainer.innerHTML = "";
            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                const productHeaderDiv = document.createElement("div");
                productHeaderDiv.classList.add("productheader");

                const addToCartDiv = document.createElement("div");
                addToCartDiv.classList.add("addtocart");

                const heartIcon = document.createElement("i");
                heartIcon.classList.add("fa-regular", "heart", "fa-heart");
                heartIcon.addEventListener("click", function () {
                    if (!heartIcon.classList.contains("hearting")) {
                        heartIcon.classList.add("hearting");

                        let cartcontent = document.querySelector(".cart-content");
                        let empty = document.querySelector(".empty");
                        empty.style.display = 'none';

                        let favorite = document.createElement("div");
                        favorite.classList.add("favorite");

                        favorite.innerHTML = `
                            <img class="radiation" src="http://localhost:1337${product.attributes.image.data.attributes.url}">
                            <div class="nom">${product.attributes.name}</div>
                            <div class="argent">${product.attributes.price} TND</div>
                            <i class="fa-solid trash fa-trash"></i>
                        `;

                        function trashing() {
                            let trash = favorite.querySelector(".trash");
                            let favorites = document.querySelectorAll(".favorite")
                            trash.addEventListener('click', function () {
                                favorite.remove();
                                heartIcon.classList.remove("hearting");
                             
                               })
                        
                        }
                        trashing()
                       

                        cartcontent.appendChild(favorite);
                    }
                });


                addToCartDiv.appendChild(heartIcon);
                productHeaderDiv.appendChild(addToCartDiv);

                const productFooterDiv = document.createElement("div");
                productFooterDiv.classList.add("productfooter");

                const productname = document.createElement("div")
                productname.classList.add("name")
                productname.textContent = product.attributes.name

                const productprice = document.createElement("div")
                productprice.classList.add("price")
                productprice.textContent = `${product.attributes.price} TND`
                const ratingDiv = document.createElement("div");
                ratingDiv.classList.add("rating");
                ratingDiv.textContent = product.attributes.rating

                const starIcon = document.createElement("i");
                starIcon.classList.add("fa-solid", "star", "fa-star");

                const stating = document.createElement("div")
                stating.classList.add("state")
                stating.textContent = product.attributes.state
                const imaging = document.createElement("img")
                imaging.classList.add("productimage")
                imaging.src = `http://localhost:1337${product.attributes.image.data.attributes.url}`;

                productHeaderDiv.appendChild(stating)
                ratingDiv.appendChild(starIcon);
                productFooterDiv.appendChild(ratingDiv);
                productFooterDiv.appendChild(productprice);

                productDiv.appendChild(productHeaderDiv);
                productDiv.appendChild(imaging)
                productDiv.appendChild(productname)
                productDiv.appendChild(productFooterDiv);

                productContainer.appendChild(productDiv);
            });

        })

}

fetchProducts();
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
function bar() {
    let checkbox = document.getElementById("changing")
    let bars = document.querySelector(".bars")
    let xmark = document.querySelector(".xmark")
    let mainlist = document.querySelector(".mainlist")
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            bars.style.opacity = '0'
            xmark.style.opacity = '1'
            mainlist.style.height = '100vh'

        }

        else {
            bars.style.opacity = '1'
            xmark.style.opacity = '0'
            mainlist.style.height = '0'



        }

    })
}
bar()