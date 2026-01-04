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
            console.log(`user requests to view page for element: ${this.element.id}`)
            const button_click_sound = new Audio("sounds/button-click.mp3")
            button_click_sound.play()
            this.view_page()
        });

        // click detection for page closer (page child element => return button)
        this.pageReturnElement.addEventListener('click', () => {
            console.log(`user requests to unview page for element: ${this.element.id}`)
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

const slide_1_page_opener = new page_opener('s1 opener', 'slide 1', 'slide 1 of the website', 's1', 'slide 1')
const slide_2_page_opener = new page_opener('s2 opener', 'slide 2', 'slide 2 of the website', 's2', 'slide 2')
const slide_3_page_opener = new page_opener('s3 opener', 'slide 3', 'slide 3 of the website', 's3', 'slide 3')
const slide_4_page_opener = new page_opener('s4 opener', 'slide 4', 'slide 4 of the website', 's4', 'slide 4')
const slide_5_page_opener = new page_opener('s5 opener', 'slide 5', 'slide 5 of the website', 's5', 'slide 5')
const slide_6_page_opener = new page_opener('s6 opener', 'slide 6', 'slide 6 of the website', 's6', 'slide 6')

// fun stuff

const star_wars_theme = new Audio("sounds/star-wars-theme.mp3")
star_wars_theme.loop = true;
star_wars_theme.volume = 0.3;

const music_starter = document.getElementById("music_starter")
music_starter.addEventListener('click', () => {
    star_wars_theme.play()
});






