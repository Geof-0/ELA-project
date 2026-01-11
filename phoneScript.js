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



// slides

const s1 = new PhonePage('What is AI?', 'What AI is, and some types of AI', 'What is AI?', 'Placeholder')
const s2 = new PhonePage('Overall opinions of AI in emergency response', 'What experts and civillians think of AI implementation in emergency response', 'Overall Opinions', 'Placeholder')
const s3 = new PhonePage('How it helps Civillians', 'How AI implementation into Emergency Response could benefit citizens', 'How it helps Civillians', 'placeholder')
const s4 = new PhonePage('How it helps Responders', 'How AI implementation into Emergency Response could benefit citizens', 'How it helps Responders', 'placeholder')
const s5 = new PhonePage('Steps to implement this', 'The steps needed to implement AI into Emergency Response', 'Implementation', 'placeholder')
const s6 = new PhonePage('Conclusion', 'Conclusion about AI in Emergency Response', 'Conclusion', 'placeholder')

// slides text content

s1.pageText.style.fontSize = '32px'
s1.pageText.textContent = ` AI is an artificial type of intelligence. Built through resources and info that it scans, it can be built as another opinion (Generative AI) or a sum of tons of opinions (Machine Learning). There can be flaws in the thought process as not all the resources it ‘consumes’ is correct, or could be biased.\n 
there are 2 main types of AI, Machine learning, and Generative AI:\n
Machine learning:
 - Can do menial/repetitive tasks
 - Are commonly found in many websites
 - Consumes many pieces of input and then decides the output\n
Generative AI:
 - Can put different things into a category.
 - Can formulate opinions-like structures for organization from data
`

s2.pageText.style.fontSize = '40px'
s2.pageText.textContent = ` Some statistics are below:\n
 - 82% of Americans are excited for AI implementation in healthcare\n
 - More than half of all americans believe that AI isn't susceptible to bias, or are neutral on it\n
 - Patrick S. Roberts says “Artificial intelligence (AI) promises new ways to spot danger sooner coordinate relief more quickly, and save lives and property.”\n
 - Additionally, when 602 responders were surveyed, 72% supported AI implementation in emergency response, 5% were neutral, and 23% didn’t support it. This means that most experts support AI implementation.\n
`

s3.pageText.style.fontSize = '46px'
s3.pageText.textContent = ` Some ways that AI implementation in Emergency reponse can benefit civillians:\n
It can help the speed of call time which can use very useful in any situation whether getting something stolen from you or being injured and every other situation.\n
It can contact the police, fire departments or hospitals faster tell them your location which could save many more lives.\n
`

s4.pageText.style.fontSize = '46px'
s4.pageText.textContent = ` Some ways that AI implementation in Emergency Response can benefit civillians:\n
 - Emergency responders don’t have to waste precious time talking to people lesser emergencies before greater emergencies (Examples)\n
 - AI can transcribe or translate different languages pretty accurately to English or other languages for responders who don’t speak those languages\n
`

s5.pageText.textContent = ` AI implementation has many benefits, such as:\n
 - AI implemented in Emergency Call Centers (ECCs) have cut down the work for call centers that are unemployed/very busy\n
 Now, how could we implement AI into Emergency Response? We have created 2 versions of AI that are possible to implement:\n
Basic version:\n
To implement AI into emergency services it would cost tens of thousands of dollars. It could be from $10k - $100k for the basic version. This could have chatbots, predictions of crime or help needed from people.\n
Advanced version:\n
$100k - $1M could implement More complex diagnostic support, advanced dispatch optimization, integration with existing EMRs, custom workflow automation.\n
`

s6.pageText.style.fontSize = '50px'
s6.pageText.textContent = ` AI often proves cost-effective by reducing reliance on human resources, improving response times, optimizing resource allocation, and saving significant operational costs over time\n
We should implement AI into emergency response to benefit everyone.\n
Also, thanks for taking the time to look at our presentation.
`








