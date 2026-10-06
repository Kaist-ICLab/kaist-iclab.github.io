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

* Function: For the function that can be used to do formatting, loading data, and etc are defined in `/src/hooks`.

* UI: UI-related code can be found in the `/src/app` folder, which is used for Next.js's file system routing, and in the `/src/component` folder, where reusable components are located.

* CI & CD: `/.github` contains yaml file for Github Action.

## How to update/change the data?


## How to run locally?

* Please run following codes after cloning
```shell
npm install
npm run dev
```

## How to add data?

To add data, you can follow the instructions below directly on github, but I recommend you to run it locally to check whether it is added as you intended.

### Update/Add Research Project Cards

The research project cards in the main page are stored in the `projects` array in `/src/app/page.tsx`.
To update a card, edit its existing entry. To add a card, please (1) add an image in `/public/researchProjects/` and (2) add an entry to the `projects` array using the following format:
{
  title: "New Research Project",
  href: "(ICLab brunch article link)",
  image: "/researchProjects/new-project.png",
  description: "A short description of the project shown in the card overlay.",
},

* title: The project title displayed below the image.
* image: Use a 3:2 image ratio to match the existing cards (e.g. 1536 × 1024).
* description: The text displayed when hovering over the card. Please keep it short.

On a touch device, tapping the card opens or closes the overlay, and tapping `Learn more` opens the link.

### Adding Gallery Image

The metadata of gallery images are stored as a list in `/data/galleries.ts`.
Please (1) add image in `/public/galleries/[NAME]` and (2) add name and its path in `/data/galleries.ts`.
The path should be `/galleries/[Name]` (i.e., omit `/public`), and you should add the recent image as a first item of list because gallery will be displayed based on the order of list.

### Update Syllabus of Lecture

The metadata of lectures are stored as a list in `/data/lectures.ts`.
Please update syllabus of the recent semester of the course you want to update.
You should add the recent syllabus as a first item of list because syllabus will be displayed based on the order of list.
If number of syllabus is more than 3, delete oldest syllabus from list.

### Update/Add Members

The metadata of gallery images are stored as a list in `/data/members.ts`.
Please update members of the newcomer or changes in metadata there.
For updating image, please change the image in `/pulbic/members/`.

### Update/Add Publications

The metadata of publication will be processed from `/data/publication.bib`.
Please include bibtex for new publication on there.
The slide and paper should be located in `/public/publications/papers/` and `/public/publications/slides/` respectively named with citeKey.
The links of other supplementary materials (i.e., video and code) can be inserted in `/data/publicationSupplementary.ts` on `supplementaries` variable

Publication type is inferred from the BibTeX entry type (`@article`, `@inproceedings`, `@incollection`, and so on). To attach a publication to one or more research projects, add project IDs to the standard `keywords` field using the `project:` prefix:

```bibtex
keywords = {project:health-wellbeing}
```

The supported project IDs are defined in `/data/publicationMetadata.ts`. Ordinary topical keywords can remain in the same field alongside project IDs.
