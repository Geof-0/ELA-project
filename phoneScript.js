console.log("js is working (phone js)");

const TemporaryBarrier = document.getElementById("TemporaryBarrier");

TemporaryBarrier.style.display = 'None'; // temporary testing (local changes)

// old code
/*
const phoneMenuTitle = document.getElementById("phoneMenuTitle")
const phoneTitleRects = phoneMenuTitle.getClientRects();
const phoneTitleRows = phoneTitleRects.length;
console.log(phoneTitleRows)

const phoneRow1Top =`${(phoneTitleRows * 70) + 70}px`

const phoneRow1 = document.getElementById("phoneRow1")
phoneRow1.style.top = phoneRow1Top;
phoneRow1.style.height = `${parseInt(phoneRow1.style.height) - parseInt(phoneRow1Top)}`
*/



// DO NOT WORK ON THIS. TOO ANNOYING

const phoneMenuTitle = document.getElementById("phoneMenuTitle")
const phoneMenu = document.getElementById("phoneMenu")


let originalTitleHeight = 'Placeholder'

const phoneSizeChangeObserver = new ResizeObserver(() => {
    const computedStyle = window.getComputedStyle(phoneMenuTitle);

    if (originalTitleHeight == 'Placeholder'){
        originalTitleHeight = computedStyle.height;
    }

    const phoneMenuTitleHeight = parseInt(computedStyle.height);
    const phoneMenuTitleLineHeight = parseInt(computedStyle.fontSize) * 1.2;

    const phoneTitleRows = Math.round(phoneMenuTitleHeight / phoneMenuTitleLineHeight);
    console.log(computedStyle.height, computedStyle.fontSize, phoneTitleRows, originalTitleHeight);

    const phoneRow1Top =`${(phoneTitleRows * 70) + 100}px`;

    const phoneRow1 = document.getElementById("phoneRow1");
    phoneRow1.style.top = phoneRow1Top;

    computedRowStyle = window.getComputedStyle(phoneRow1)
    phoneRow1.style.height = `${parseInt(originalTitleHeight) - parseInt(computedRowStyle.top)}px`;

    console.log('size has changed');
});

phoneSizeChangeObserver.observe(phoneMenuTitle);

// DO NOT WORK ON THIS. TOO ANNOYING



class PhonePage{
    constructor(opener_title, opener_details, page_title, page_text){
        const phoneRow1 = document.getElementById("phoneRow1")


        // page opener

        this.openerElement = document.createElement("div");
        this.openerElement.classList.add("phone-page-opener");

        this.openerTitle = document.createElement("div");
        this.openerTitle.classList.add("phone-opener-title");
        this.openerTitle.textContent = opener_title
        this.openerElement.appendChild(this.openerTitle)

        this.openerDetails = document.createElement("div");
        this.openerDetails.classList.add("phone-opener-details");
        this.openerDetails.textContent = opener_details;
        this.openerElement.appendChild(this.openerDetails);

        this.viewPageElement = document.createElement("div");
        this.viewPageElement.classList.add("phone-opener-view");
        this.viewPageElement.textContent = 'View page'
        this.openerElement.appendChild(this.viewPageElement)

        phoneRow1.appendChild(this.openerElement)

        // event listener for viewPage
        this.viewPageElement.addEventListener('click', () => {
            console.log("user requests to view page: " + this.openerTitle.textContent);
            this.viewPage();
            const clickSound = new Audio("sounds/button-click.mp3");
            clickSound.play();
        });

        // page

        this.pageElement = document.createElement("div");
        this.pageElement.classList.add('phone-page', "centered");
        this.pageElement.style.display = 'none';

        this.pageTitle = document.createElement("div");
        this.pageTitle.classList.add("phone-page-title");
        this.pageTitle.textContent = page_title;
        this.pageElement.appendChild(this.pageTitle);

        this.pageText = document.createElement("div");
        this.pageText.classList.add("phone-page-text");
        this.pageText.textContent = page_text;
        this.pageElement.appendChild(this.pageText);

        this.pageReturn = document.createElement('div');
        this.pageReturn.classList.add("phone-page-return");
        this.pageReturn.textContent = 'Return'
        this.pageElement.appendChild(this.pageReturn);

        // event listener for pageReturn
        this.pageReturn.addEventListener('click', () => {
            console.log("user requests to unview page: " + this.pageTitle.textContent);
            this.unviewPage();
            const clickSound = new Audio("sounds/button-click.mp3");
            clickSound.play();
        });


        document.body.appendChild(this.pageElement)
    }

    viewPage(){
        phoneMenu.style.opacity = '0.01';
        phoneMenu.style.pointerEvents = 'none';
        this.pageElement.style.display = 'block';
    }

    unviewPage(){
        phoneMenu.style.opacity = '1'
        phoneMenu.style.pointerEvents = 'auto';
        this.pageElement.style.display = 'none';
    }
}



const test = new PhonePage('hi hi hi', 'details details details details', 'test', 'this is page 1')
const test2 = new PhonePage('hi hi hi', 'details details details details', 'test test', 'this is page 2')






