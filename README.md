![Gig Prints Logo](./client/src/readme-logo.png)

# GIG PRINTS

Welcome to Gig Prints- a single-page web application where touring bands and poster designers are two different types of users that can both discover and connect with each other to create unique concert posters for a band's upcoming tour dates as well as manage the tasks related to seeing a poster idea to completion.

> Please note all artwork, poster artist information, and band information are property of their rightful respective owner. Usage of band, poster artist, and poster images are for educational, non-commercial purposes only.

## Table of Contents
1. [Motivation](#Motivation)
2. [Demo](#Demo)
3. [Features](#Features)
4. [How To Use](#How-To-Use)
5. [Tech Stack & Requirements](#Tech-Stack-&-Requirements)
6. [Getting Started](#Getting-Started)

## Motivation
I am an avid concert-goer and poster collector, and prior to becoming a software engineer, I spent my entire working career in different facets of the live music industry. As soon as I arrive at a concert, the first thing I do is visit the merch stand, hoping there is a cool limited edition poster for sale. Most concerts I attend do not have a poster for sale, which is a huge missed opportunity for everyone involved: the independent poster designer, who would have a chance to share their artistic vision with a whole new audience, the band, who would add a new revenue stream, and the fans, who would be able to own a unique, tangible piece of that special concert experience forever.

I decided to build a real-world web application to help bands discover the best poster designers from all over the world, to facilitate poster designers in showcasing their work and easily connecting with bands on tour, and to simplify and centralize the process of creating concert posters so that more poster designers are booked for poster projects and more bands recognize the supply of talent that's available and feel compelled to respond to the demand by adding concert posters to their merch offerings.

## Demo
[Watch me demo the entire app here!](https://vimeo.com/798881890)

**Landing Page**

![Landing Page Slideshow Gif](public/LandingPageGif-Gig Prints-low.gif)

**Band Login / Band Home Page**

![Band Login Gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/6a343da5-3c58-4cad-933a-77ab2eac1d66.gif?ClientID=vimeo-core-prod&Date=1685055687&Signature=f34232e8821f6e46b1f1c354b591947b773ba1c6)

**Band Profile**

![Band Profile Gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/375de5fa-3277-4495-b2e6-5d37ca71bd9a.gif?ClientID=vimeo-core-prod&Date=1685055716&Signature=fa156449f6a0614920f3c5ea6fb9f46a9d143c3e)

**My Projects**

![My Projects Gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/aee928fa-d0b4-44ef-addf-c160e9aa56da.gif?ClientID=vimeo-core-prod&Date=1685055733&Signature=ab9bcb3b1b995322ecb704615570cce5ae29b798)

**Designer Login / Designer Home Page**

![Designer Login Gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/e67b28ea-fa9c-4885-965c-b0ea8bd2fca0.gif?ClientID=vimeo-core-prod&Date=1685055752&Signature=dcebd62e5e5afdca04dc2ceb49bf72ab3ea80628)

**Designer Profile**

![Designer Profile Gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/e03a58e5-7d20-4ec3-ae26-50aa8bcb0281.gif?ClientID=vimeo-core-prod&Date=1685055768&Signature=41a0ccaf9d71dd8c6fc83a8c38e82f9a21bd7dff)

**Edit Profile**

![Edit Profile Gif](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/0560bab7-fab4-4c81-bfd1-fe329b6a4621.gif?ClientID=vimeo-core-prod&Date=1685055783&Signature=601756cb71f0a7649c5cf418ad3d8fe93f6d6449)


## Features

* Secure authenticated & authorized signup/login/logout functionality for band and designer models using Rails bcrypt gem and sessions.
* Semantic UI React components for user profile pages, band and designer homepages which include browsing, filtering and search features, and an editable table for project and task management.
* CRUD actions for three models including a joiner, facilitated on the frontend and harnessed on the backend.
* Live search queries the database, which is developed from scratch for band and poster designer data.
* Carousel slideshow on Homepage showcasing site's main features.
* Custom backend routes and react-router client-side routes.

## How To Use

* Bands can update whether they are on tour or not, and poster designers can update whether they are open to work or not.
* Bands can filter out designers not open to work and designers can filter out bands who aren't touring.
* To post any upcoming tour dates with open poster commissions to their profiles, Bands can create a new poster project on the "My Projects" page, add the relevant details such as concert date, location, and deadline, and mark the project as "unassigned" (only poster projects marked as "unassigned" will POST to the "Open Poster Commissions" section of the band's profile).
* After a band and poster designer get in touch via email and mutually-agree to a poster project, the band can update the "unassigned" poster project to "in progress" on the "My Projects" page, set the agreed-upon poster designer from a dropdown menu of all poster designers using the app, and add any other details needed to create the poster (dimensions, edition, budget, etc). Once the status of a project is changed from "unassigned", it will be removed from the "Open Poster Commissions" section of the band's profile.
* After a band has assigned a poster designer to a poster project, the designer has the capability to upload image links as drafts until the band agrees to the final draft.
* After the band has agreed to the final image draft uploaded by the poster designer, they will mark the status of the project as "complete" and the completed poster will POST to both band and designer profiles under the "recent concert posters" section.
* Both Bands and Designers have the ability to edit their profiles and edit a poster project, but only bands can create a new project or delete a project.

## Tech Stack & Requirements

> **Languages:** JavaScript | Ruby | HTML5 | CSS

> **Frameworks:** React.js | Ruby on Rails

> **Libraries:** React Router | Semantic UI

- react 18.2.0
- react-router-dom 6.6.2
- semantic-ui-react 2.1.4
- ruby 2.7.4p191
- rails 7.0.4
- npm 8.19.2

## Getting Started

1. Install dependencies:
```sh
npm install
```

2. Start rails server: 
```sh
rails s
```

3. Start local react server: 
```sh
cd client
```
```sh
npm start
```