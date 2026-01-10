console.log("js is working (phone js)");

const TemporaryBarrier = document.getElementById("TemporaryBarrier");

TemporaryBarrier.style.display = 'None'; // temporary testing (local changes)



const phoneMenuTitle = document.getElementById("phoneMenuTitle")
const phoneTitleRects = phoneMenuTitle.getClientRects();
const phoneTitleRows = phoneTitleRects.length;
console.log(phoneTitleRows)

const phoneRow1Top =`${(phoneTitleRows * 70) + 70}px`

const phoneRow1 = document.getElementById("phoneRow1")
phoneRow1.style.top = phoneRow1Top;
phoneRow1.style.height = `${parseInt(phoneRow1.style.height) - parseInt(phoneRow1Top)}`