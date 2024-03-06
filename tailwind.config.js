/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Menu
        menu: "#100e0c",
        menuTitle: "#e0dedc",
        menuBar: "#191612",
        menuButton: "#322e2a",
        menuButtonHover: "#423f3a",
        menuTextButton: "#938e8b",
        menuButtonTextHover: "#e8e4e3",
        menuHoverItem: "#1c1816",
        menuTextItem: "#9a9896",
        menuHoverTextItem: "#e8e4e3",
        // No Project
        noProjectTitle: "#615f5b",
        noProjectParagraph: "#807e7c",
        noProjectButton: "#322e2a",
        noProjectButtonHover: "#423f3a",
        noProjectButtonTextHover: "#e8e4e3",
        // Form
        formCancel: "#434342",
        formCancelHover: "#575756",
        formSave: "#1c1816",
        formSaveHover: "#161311",
        formLabel: "#5b5752",
        formInput: "#e3e0de",
        formInputBottomBorder: "#c6c5c3",
        formInputBottomBorderFocus: "#403e3c",
        formInputText: "#4c4948",
        // Project
        projectTitle: "#414141",
        projectDelete: "#454545",
        projectItemDeleteHover: "#d53939",
        projectDate: "#8e8f8c",
        projectDescription: "#5a5a5a",
        projectDescriptionBorderBottom: "#cbcbcb",
        projectInput: "#e1dfdd",
        projectAdd: "#1f1f1f",
        projectAddHover: "#454545",
        projectItems: "#f2f2f2",
        projectItemText: "#2a2a2a",
        projectItemClear: "#1b1b1b",
        projectItemClearHover: "#c83535",
      },
    },
  },
  plugins: [],
};
