# Theme Toggle Webpage

An interactive, responsive theme-toggle webpage built with structural HTML, CSS classes, and vanilla JavaScript event handling.

## 🔗 Project Links
- **Live Website:** [https://wdnmaster.github.io/theme-toggle/](https://wdnmaster.github.io/theme-toggle/)
- **GitHub Repository:** [https://github.com/wdnmaster/theme-toggle](https://github.com/wdnmaster/theme-toggle)

---

## 🛠️ Built With
- **HTML5**: Semantic container card structure.
- **CSS3**: CSS Custom class overrides (`.dark-mode`), Flexbox centering, and smooth color transitions.
- **JavaScript (ES6)**: DOM selection using `document.querySelector`, click event listener handling, class toggling via `classList.toggle`, and dynamic button text logic.

---

## 🤖 AI Prompting Details
The initial starter code for this project was generated using an AI assistant prompt following explicit design and technical specifications:

### AI Prompt Used:
> "I am a beginner learning JavaScript. I need to build a simple theme toggle webpage. Please write the code for three separate files: index.html, style.css, and script.js.
> The HTML should have a centered card with a title, a paragraph, and a toggle button. The CSS should have a default light mode, and a .dark-mode class applied to the body that changes the background to a dark color and makes the card/button colors match the dark aesthetic. Please use a CSS transition for smooth color changes.
> The JS file must use document.querySelector to select the button and the body, and use addEventListener with a 'click' event to toggle the .dark-mode class on the body. It should also change the text of the button depending on which theme is active. Please explain the JS code step-by-step so I can understand how it works."

---

## 🔍 Verification & Inspection Checklist
- [x] **DOM Selection**: Verified `document.querySelector` is used to grab `#theme-toggle-btn` and `body`.
- [x] **Class-based Styling**: Verified that JavaScript toggles `.dark-mode` on `body` instead of writing inline styles (`element.style`).
- [x] **Smooth Transitions**: Verified `transition: background-color 0.4s ease, color 0.4s ease` provides smooth visual fades.
- [x] **Dynamic Button Text**: Button text correctly toggles between *"Switch to Dark Mode"* and *"Switch to Light Mode"*.

---

## 🚀 How to Run Locally
1. Clone this repository:
   ```bash
   git clone [https://github.com/wdnmaster/theme-toggle.git](https://github.com/wdnmaster/theme-toggle.git)
