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

const phoneMenuTitle = document.getElementById("phoneMenuTitle")

const phoneSizeChangeObserver = new ResizeObserver(() => {
    const computedStyle = window.getComputedStyle(phoneMenuTitle)

    const phoneMenuTitleHeight = parseInt(computedStyle.height);
    const phoneMenuTitleLineHeight = parseInt(computedStyle.fontSize) * 1.2;

    const phoneTitleRows = Math.round(phoneMenuTitleHeight / phoneMenuTitleLineHeight)
    console.log(computedStyle.height, computedStyle.fontSize, phoneTitleRows)

    const phoneRow1Top =`${(phoneTitleRows * 70) + 100}px`

    const phoneRow1 = document.getElementById("phoneRow1")
    phoneRow1.style.top = phoneRow1Top;
    phoneRow1.style.height = `${parseInt(phoneRow1.style.height) - parseInt(phoneRow1Top)}px`
    if (phoneTitleRows == 1) {
        phoneRow1.style.height = `${parseInt(phoneRow1.style.height) - 50}px`
    }
    
    console.log('size has changed')
});

phoneSizeChangeObserver.observe(phoneMenuTitle)