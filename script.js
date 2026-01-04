console.log("js is working")


const menu = document.getElementById("menu")




// class for pages opening (menu child element):
class page_opener{
    constructor(id, title_text, details_text, page_id, page_title, row= 1) {
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
        if (row == 1) {
            const row1 = document.getElementById('row1');
            row1.appendChild(this.element);
        } 
        else if (row == 2) {
            const row2 = document.getElementById('row2');
            row2.appendChild(this.element);
        }



        // menu.appendChild(this.element);





        
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

const slide_1_page_opener = new page_opener('s1 opener', 'What is AI?', 'Explains what AI is', 's1', 'What is AI?', 1)
const slide_2_page_opener = new page_opener('s2 opener', 'Implementation', 'Explain how AI can be implemented, and how it already is', 's2', 'How AI can be implemented', 1)
const slide_3_page_opener = new page_opener('s3 opener', 'Experts', 'What experts say about AI in emergency response', 's3', 'Expert opinions', 1)
const slide_4_page_opener = new page_opener('s4 opener', 'Opinions', 'What the public think of AI in emergency response', 's4', 'Public opinions', 1)
const slide_5_page_opener = new page_opener('s5 opener', 'Civillian benefits', 'How AI in emergency response can help civillians', 's5', 'How AI helps civillians', 1)
const slide_6_page_opener = new page_opener('s6 opener', 'Examples', 'Examples of AI in emergency response', 's6', 'Examples of AI usage', 2)
const slide_7_page_opener = new page_opener('s7 opener', 'Responder benefits', 'How AI in emergency response can help those responding to the emergency', 's7', 'How AI in helps responders', 2)
const slide_8_page_opener = new page_opener('s8 opener', 'Cost', 'The cost of implementation, and etc.', 's8', 'The cost of this', 2)
const slide_9_page_opener = new page_opener('s9 opener', 'Sources', 'Sources used for getting information', 's9', 'Sources', 2)




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





// slide 3 contents: 
const slide_3 = slide_3_page_opener.pageElement; 

// create text element 
let s3TextElement = document.createElement('div'); 
s3TextElement.classList.add('box', 'horizontal-centered', 'page-text-element'); 
slide_3.appendChild(s3TextElement); 

s3TextElement.textContent = `
	Patrick S. Roberts says “Artificial intelligence (AI) promises new ways to spot danger sooner, coordinate relief more quickly, and save lives and property.” Though AI promises many things, it’s much harder to actually implement it into call and command centers. Like, when are moments when it should replace the traditional methods? Who makes sure that it doesn’t go off the rails?\n
`




// slide 4 contents:
const slide_4 = slide_4_page_opener.pageElement; 

// create text element 
let s4TextElement = document.createElement('div'); 
s4TextElement.classList.add('box', 'horizontal-centered', 'page-text-element'); 
slide_4.appendChild(s4TextElement); 

s4TextElement.textContent = `
    Public opinions?\n
    Oh nah, we just dont got those, we lack funding\n
    Maybe with an extra day or two\n
`





// slide 5 contents:
const slide_5 = slide_5_page_opener.pageElement; 

// create text element 
let s5TextElement = document.createElement('div'); 
s5TextElement.classList.add('box', 'horizontal-centered', 'page-text-element'); 
slide_5.appendChild(s5TextElement); 

s5TextElement.textContent = `
    When an emergency situation occurs, all the cell phones (which presumably have owners, which are the people) in the area get alerted of the certain event, such as a weather warning or missing person. Also, there are apps that allow people to signal when a non-emergency event occurs or is found, such as potholes in the road (Refer to Examples    ).\n
`




// slide 6 contents:
const slide_6 = slide_6_page_opener.pageElement; 

// create text element 
let s6TextElement = document.createElement('div'); 
s6TextElement.classList.add('box', 'horizontal-centered', 'page-text-element'); 
slide_6.appendChild(s6TextElement); 

s6TextElement.textContent = `
    There are many apps that Glenview has for the citizens. These apps include Glenview 311, an app that allows citizens to report potholes and non-emergency service situations. And, these apps are built with features from Google Gemini. The AI tools can help expedite the process of checking for details in a more specific situation (such as dangerous weather)  and deciding whether or not it needs action to be taken. Because AI is better at analyzing satellite and radar info, (When trained on it) it finishes a final evaluation of the scene faster than traditional methods and more accurately than people who can miss some info.\n
    In ECCs, call triaging is one of the most important roles AI has. Call triaging is when you usually check the symptoms of a patient or event over the phone to see if it is an emergency, or can wait. What AI does, is ask automated message and sift through calls to see if it’s an emergency (being put on an emergency list or directly put to a human responder) or non-emergency (waiting list). This helps responders be able to actually respond to an emergency while not having to go through a list of smaller problem calls.\n
`




// slide 7 contents:
const slide_7 = slide_7_page_opener.pageElement; 

// create text element 
let s7TextElement = document.createElement('div'); 
s7TextElement.classList.add('box', 'horizontal-centered', 'page-text-element'); 
slide_7.appendChild(s7TextElement); 

s7TextElement.textContent = `
Emergency responders don’t have to waste precious time doing menial tasks that AI can do and can actually respond to emergencies (such as call triaging–refer to Examples    ). AI can also transcribe or translate different languages pretty accurately to English or other languages for responders who don’t speak those languages. This can help when patients speak a rarer or less commonly found languages, or when an ECC is under-staffed.\n
`




// slide 8 contents:
const slide_8 = slide_8_page_opener.pageElement; 

// create text element 
let s8TextElement = document.createElement('div'); 
s8TextElement.classList.add('box', 'horizontal-centered', 'page-text-element'); 
slide_8.appendChild(s8TextElement); 

s8TextElement.textContent = `
    yeah, we dont talk about the cost.\n
    just look at the positives, okay?\n
`




// slide 9 contents:
const slide_9 = slide_9_page_opener.pageElement; 

// create text element 
let s9TextElement = document.createElement('div'); 
s9TextElement.classList.add('box', 'horizontal-centered', 'page-text-element'); 
slide_9.appendChild(s9TextElement); 

s9TextElement.textContent = `
https://www.cisa.gov/sites/default/files/2025-03/25_0328_s-n_ai-implemen-ecc_infographic_508C.pdf\n
https://www.rand.org/pubs/commentary/2025/08/how-ai-is-changing-our-approach-to-disasters.html\n
yes, you indeed are unable to acess the website by just clicking them. i coded this entire thing okay, its not easy\n
`









// fun stuff

const star_wars_theme = new Audio("sounds/star-wars-theme.mp3")
star_wars_theme.loop = true;
star_wars_theme.volume = 0.3;

const music_starter = document.getElementById("music_starter")
music_starter.addEventListener('click', () => {
    star_wars_theme.play()
});






