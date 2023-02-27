const headerSignUpBtnEl = document.querySelector('.header-sign-up-btn');
const headerSignInBtn = document.querySelector('.header-sign-in-btn');

const productsNavLinkEl = document.querySelector('.products-nav-link');
const pricingNavLinkEl = document.querySelector('.pricing-nav-link');
const headerNavLinksEls = document.querySelectorAll('.header-nav-links');
const faqNavLinkEl = document.querySelector('.faq-nav-link');
const blog1NavLinkEl = document.querySelector('.blog-1-nav-link');
const blog2NavLinkEl = document.querySelector('.blog-2-nav-link');

const tryForFreeBtnEl = document.querySelector('.try-for-free-btn');

const staterPriceOrderBtnEl = document.querySelector('.stater-price-order-btn');
const premiumPriceOrderBtnEl = document.querySelector('.premium-price-order-btn');
const standartPriceOrderBtnEl = document.querySelector('.standart-price-order-btn');
const freeTrialBtnEl = document.querySelector('.free-trial-btn');

const client1LogoEl = document.querySelector('.client-1-logo');


// const headerMenuEls = document.querySelectorAll('.header-menu');

headerSignUpBtnEl.addEventListener('mouseover', function(e) {
    headerSignUpBtnEl.classList.add("header-sign-up-btn-mouseover")
});

headerSignUpBtnEl.addEventListener('mouseout', function(e) {
    headerSignUpBtnEl.classList.remove("header-sign-up-btn-mouseover")
});


productsNavLinkEl.addEventListener('mouseover', function(e) {
    productsNavLinkEl.classList.add("header-nav-links-mouseover")

});

productsNavLinkEl.addEventListener('mouseout', function(e) {
    productsNavLinkEl.classList.remove("header-nav-links-mouseover")
});

pricingNavLinkEl.addEventListener('mouseover', function(e) {
    pricingNavLinkEl.classList.add("header-nav-links-mouseover")

});

pricingNavLinkEl.addEventListener('mouseout', function(e) {
    pricingNavLinkEl.classList.remove("header-nav-links-mouseover")
});

faqNavLinkEl.addEventListener('mouseover', function(e) {
    faqNavLinkEl.classList.add("header-nav-links-mouseover")

});

faqNavLinkEl.addEventListener('mouseout', function(e) {
    faqNavLinkEl.classList.remove("header-nav-links-mouseover")
});

blog1NavLinkEl.addEventListener('mouseover', function(e) {
    blog1NavLinkEl.classList.add("header-nav-links-mouseover")

});

blog1NavLinkEl.addEventListener('mouseout', function(e) {
    blog1NavLinkEl.classList.remove("header-nav-links-mouseover")
});

blog2NavLinkEl.addEventListener('mouseover', function(e) {
    blog2NavLinkEl.classList.add("header-nav-links-mouseover")

});

blog2NavLinkEl.addEventListener('mouseout', function(e) {
    blog2NavLinkEl.classList.remove("header-nav-links-mouseover")
});

headerSignInBtn.addEventListener('mouseover', function(e) {
    headerSignInBtn.classList.add("header-nav-links-mouseover")

});

headerSignInBtn.addEventListener('mouseout', function(e) {
    headerSignInBtn.classList.remove("header-nav-links-mouseover")
});

tryForFreeBtnEl.addEventListener('mouseover', function(e) {
    tryForFreeBtnEl.classList.add("try-for-free-btn-mouseover")

});

tryForFreeBtnEl.addEventListener('mouseout', function(e) {
    tryForFreeBtnEl.classList.remove("try-for-free-btn-mouseover")
});

staterPriceOrderBtnEl.addEventListener('mouseover', function(e) {
    staterPriceOrderBtnEl.classList.add("stater-price-order-btn-mouseover")

});

staterPriceOrderBtnEl.addEventListener('mouseout', function(e) {
    staterPriceOrderBtnEl.classList.remove("stater-price-order-btn-mouseover")
});

premiumPriceOrderBtnEl.addEventListener('mouseover', function(e) {
    premiumPriceOrderBtnEl.classList.add("premium-price-order-btn-mouseover")

});

premiumPriceOrderBtnEl.addEventListener('mouseout', function(e) {
    premiumPriceOrderBtnEl.classList.remove("premium-price-order-btn-mouseover")
});

standartPriceOrderBtnEl.addEventListener('mouseover', function(e) {
    standartPriceOrderBtnEl.classList.add("standart-price-order-btn-mouseover")

});

standartPriceOrderBtnEl.addEventListener('mouseout', function(e) {
    standartPriceOrderBtnEl.classList.remove("standart-price-order-btn-mouseover")
});

freeTrialBtnEl.addEventListener('mouseover', function(e) {
    freeTrialBtnEl.classList.add('free-trial-btn-mouseover')

});

freeTrialBtnEl.addEventListener('mouseout', function(e) {
    freeTrialBtnEl.classList.remove("free-trial-btn-mouseover")
});


const passwordUserForm1El = document.querySelector('.password-user-form-1');
const passwordUserForm2El = document.querySelector('.password-user-form-2');


document.querySelector('.free-trial-btn').onclick = function() {
    const userPassFirst = passwordUserForm1El.value;
    const userPassSecond = passwordUserForm2El.value;
    console.log(userPassFirst);


    // if (userPassFirst == "") {
    //     passwordUserForm1El.style = "border: 1px solid red";
    //     passwordUserForm2El.style = "border: 1px solid red";


    // } else if (userPassFirst != userPassSecond) {
    //     passwordUserForm1El.style = "border: 1px solid red";
    //     passwordUserForm2El.style = "border: 1px solid red";


    // } else if (userPassFirst == userPassSecond) {
    //     passwordUserForm1El.style = "border: 1px solid green";
    //     passwordUserForm2El.style = "border: 1px solid green";
    // }
    // return true;
    if (userPassFirst == "") {
        passwordUserForm1El.classList.add('password-error');
        passwordUserForm2El.classList.add('password-error');
        passwordUserForm1El.classList.remove('password-validate');
        passwordUserForm2El.classList.remove('password-validate');

    } else if (userPassFirst != userPassSecond) {
        passwordUserForm1El.classList.add('password-error');
        passwordUserForm2El.classList.add('password-error');
        passwordUserForm1El.classList.remove('password-validate');
        passwordUserForm2El.classList.remove('password-validate');


    } else if (userPassFirst == userPassSecond) {
        passwordUserForm1El.classList.add('password-validate');
        passwordUserForm2El.classList.add('password-validate');
    }
    return true;
};