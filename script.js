console.log("js is working")


const menu = document.getElementById("menu")




// class for pages opening (menu child element):
class page_opener{
    constructor(id, title_text, details_text, page_id, page_title) {
        // initialize element 
        this.element = document.createElement("div");
        this.element.classList.add("box", "centered-items", "page-opener");
        this.element.id= id;

        // initialize element contents
        // title
        this.titleElement = document.createElement("div");
        this.titleElement.classList.add("page-opener-title");
        this.titleElement.textContent = title_text;
        this.element.appendChild(this.titleElement);

        // details
        this.detailsElement = document.createElement("div");
        this.detailsElement.classList.add("page-opener-details")
        this.detailsElement.textContent = details_text
        this.element.appendChild(this.detailsElement)

        // "view slide" element
        this.viewSlideElement = document.createElement("div");
        this.viewSlideElement.classList.add('page-opener-view-slide')
        this.viewSlideElement.textContent = "View slide"
        this.element.appendChild(this.viewSlideElement)

        // append to menu
        menu.appendChild(this.element);





        
        // create page element
        this.pageElement = document.createElement("div");
        this.pageElement.classList.add("box", "page", "centered", "centered-items")
        this.pageElement.style.display = 'none'
        this.pageElement.id = page_id

        // initialize page element contents
        // title
        this.pageTitleElement = document.createElement("div");
        this.pageTitleElement.classList.add("page-title", "centered-items");
        this.pageTitleElement.textContent = page_title;
        this.pageElement.appendChild(this.pageTitleElement);

        // return button 
        this.pageReturnElement = document.createElement("div");
        this.pageReturnElement.classList.add("page-return-button", "centered-items");
        this.pageReturnElement.textContent = 'Return to menu';
        this.pageElement.appendChild(this.pageReturnElement);

        // append page to visual stuff
        document.body.appendChild(this.pageElement)


        // click detection for page opener (not page)
        this.viewSlideElement.addEventListener('click', () => {
            console.log(`user requests to view page from element: ${this.viewSlideElement}`)
            const button_click_sound = new Audio("sounds/button-click.mp3")
            button_click_sound.play()
            this.view_page()
        });

        // click detection for page closer (page child element => return button)
        this.pageReturnElement.addEventListener('click', () => {
            console.log(`user requests to unview page from element: ${this.pageReturnElement}`)
            const button_click_sound = new Audio("sounds/button-click.mp3")
            button_click_sound.play()
            this.unview_page()
        });
    }

    view_page(){
        menu.style.display = 'none' 
        this.pageElement.style.display = 'flex'
    }

    unview_page(menu_view= true) {
        this.pageElement.style.display = 'none'
        if (menu_view) menu.style.display = 'flex'
    }
}

// slides

const slide_1_page_opener = new page_opener('s1 opener', 'What', 'Explains what AI is', 's1', 'What is AI?')
const slide_2_page_opener = new page_opener('s2 opener', 'How', 'Explain how AI can be implemented, and how it already is', 's2', 'How AI can be implemented')
const slide_3_page_opener = new page_opener('s3 opener', 'slide 3', 'slide 3 of the website', 's3', 'slide 3')
const slide_4_page_opener = new page_opener('s4 opener', 'slide 4', 'slide 4 of the website', 's4', 'slide 4')
const slide_5_page_opener = new page_opener('s5 opener', 'slide 5', 'slide 5 of the website', 's5', 'slide 5')

// slide 1 contents:
const slide_1 = slide_1_page_opener.pageElement

// create text element
let s1TextElement = document.createElement("div");
s1TextElement.classList.add("box", "horizontal-centered", "page-text-element");
slide_1.appendChild(s1TextElement);

s1TextElement.textContent = `
   AI is an artificial type of intelligence. Built through resources and info that it scans, it can be built as another opinion (Generative AI) or a sum of tons of opinions (Machine Learning). There can be flaws in the thought process as not all the resources it ‘consumes’ is correct, or could be biased.\n
   ML (Machine Learning) can be used in several ways as a tool to us, doing menial tasks or automated tasks for us much faster than we could. AI (Generative AI) can put different things into a category. (If you want an Example,    ) The difference between ML and AI, is that ML consumes many pieces of input and then decides the output. AI, on the other hand, consumes data (not input), formulates an unbiased (or biased if you purposefully program it that way) system for organization, and then consumes the input and decides the output from both the input and system for organization.\n
`;


// slide 2 contents: 
const slide_2 = slide_2_page_opener.pageElement; 

// create text element 
let s2TextElement = document.createElement('div'); 
s2TextElement.classList.add('box', 'horizontal-centered', 'page-text-element'); 
slide_2.appendChild(s2TextElement); 

s2TextElement.textContent = `
    AI has already been gradually implemented in emergency services or emergency communication centers (ECCs). During budget constraints, staff shortages, or more work demands, AI tools can help organize and increase efficiency in ECCs.\n
    Though AI provides many benefits, there are many flaws that need to be checked out beforehand for AI to actually get implemented. It can make mistakes through being fed any amount of flawed, or biased data, or if it mishears what the situation is actually amount, so it’s good to make sure. There are times when AI shouldn’t be used and instead use some of the traditional methods.\n
    Don’t worry, AI in these environments and in general are being quality controlled to keep AI up to date and to make sure that less and less mistakes are being made, as in environments such as these it’s important for AI to make less mistakes. (SKIM ALL OF THIS SLIDE)\n
`; 










// fun stuff

const star_wars_theme = new Audio("sounds/star-wars-theme.mp3")
star_wars_theme.loop = true;
star_wars_theme.volume = 0.3;

const music_starter = document.getElementById("music_starter")
music_starter.addEventListener('click', () => {
    star_wars_theme.play()
});






