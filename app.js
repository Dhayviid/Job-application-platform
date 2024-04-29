// Get the input element and button
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

// Add click event listener to the search button
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim().toLowerCase(); // Get the search term

    // Get all job cards
    const jobCards = document.querySelectorAll('.job-card');

    // Loop through each job card
    jobCards.forEach(function(card) {
        const jobTitle = card.querySelector('h3').textContent.toLowerCase(); // Get the job title

        // Check if the job title contains the search term
        if (jobTitle.includes(searchTerm)) {
            card.style.display = 'block'; // Show the job card if it matches
        } else {
            card.style.display = 'none'; // Hide the job card if it doesn't match
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the parent element of chosen cards
    const filterChosen = document.querySelector('.filter-chosen');

    filterChosen.addEventListener('click', function(event) {
        // Check if the clicked element is a chosen card
        if (event.target.classList.contains('chosen-card')) {
            // Extract the text from the chosen card
            const optionText = event.target.textContent.trim();
            
            // Find the corresponding select element
            const filterSelect = event.target.closest('.filter-box').querySelector('.filter-select');
            
            // Create a new option element
            const option = document.createElement('option');
            option.textContent = optionText;
            
            // Add the option to the select element
            filterSelect.appendChild(option);
            
            // Remove the chosen card
            event.target.remove();
        }
    });
});


// change navbar color
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>150) {
            $(".navbar").css("background", "#222");
            $(".navbar").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
        }
        else {
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow", "none");
        }
    })
});
// smooth scroll
var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top - navbarHeight
    },1000)
    e.preventDefault();
});
// navbar mobile version
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active")
    }
})

// swiper
var swiper = new Swiper(".mySwiper",
{
    loop: true,
    autoplay: {
        delay: 1600,
        disableOnInteraction: false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
            spaceBetween:20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween:40,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween:50,
        }
    }
})