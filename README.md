# KAIST Interactive Computing Lab Homepage

![Typescript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

## How it was build?
The website is build based on [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [FlowBite](https://flowbite.com/), and [Github Action](https://docs.github.com/ko/actions)

* Next.js: The React framework for the web that allows intuitive file-system based router and static site rendering.
* Tailwind CSS: The CSS framework that allows easy configuration of CSS through `className`.
* FlowBite: The Tailwind CSS component library. 
* Github Action: The continuous deploy (CD) tool that is provided by Github. We used it for deploying website as github-page.

## Repository Structure

This website keeps data, features, and UI as separate as possible for code management.

* Data: For data that is easier to manage in a json or markdown file, such as keywords, paths, descriptions, etc are located in `/data`, and the images and files (i.e., pdf) are located in `/public`.
    * Some data is preprocessed in `utils/preprocess.ts`

* Type: For the data, we defined types on `/src/types`

* Function: For the function that can be used to do formatting, loading data, and etc are defined in `/src/utils` and `/src/hooks`.

* UI: UI-related code can be found in the `/src/app` folder, which is used for Next.js's file system routing, and in the `/src/component` folder, where reusable components are located.
    * `/src/components`: We haven't added any margin or padding to the top tag of the component to handle spacing among components only in `/src/app`.
    * `/src/app`: In most cases, layout and spacing among components are defined.  


* CI & CD: `/.github` contains yaml file for Github Action

## How to update/change the data?


## How to run locally?

* Please run following codes after cloning
```shell
npm install
npm run dev
```

## Things to do

- [ ] Add 2024 Fall Newcomers' profile
- [ ] Refactoring Main page
- [ ] Refactoring Publication page
- [ ] Use Bibtex and 7th APA style for publication
  - [ ] supplementary will be maintained using current format
- [ ] Refactoring Members page
- [ ] Refactoring Galleries page
- [ ] Refactoring Lectures page
- [ ] Adding Post page
  - [ ] Post Layout
  - [ ] Post List Page