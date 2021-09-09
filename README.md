# Getting Started with Create React App


Open [https://lotuswalking.github.io/react-app/](https://lotuswalking.github.io/react-app/) to view it in the browser.

About publish a react project to GitHub Page

1. publish code to github

2. install gp-pages by  `npm install gp-pages -- save-dev `

3. change package.json
    "homepage": "https://[Username].github.io/[repositories]/"

    in Script: 2 lines

        `"predeploy": "npm run build",`
        
        `"deploy": "gh-pages -d build",`


