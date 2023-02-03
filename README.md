# GIG PRINTS

> Welcome to Gig Prints- a web application where touring bands and poster designers are two different types of users that can both discover and connect with each other to create unique concert posters for a band's upcoming tour dates as well as manage the tasks related to seeing a poster idea to completion.

Please note all artwork, poster artist information, and band information are property of their rightful respective owner. Usage of band, poster artist, and poster images are for educational, non-commercial purposes only.

## Table of Contents
1. [Motivation](#Demo)
1. [Demo](#Demo)
1. [Tech](#Tech)
1. [Features](#Features)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Installing Dependencies](#installing-dependencies)

## Motivation
> I am an avid concert-goer and concert poster collector, and prior to becoming a software engineer, I spent my entire working career in different facets of the live music industry. As soon as I arrive at a concert, the first thing I do is check out the merch stands, hoping there is a beautiful and unique limited edition poster for sale. 8/10 times, there is isn't a poster for sale- which is a big missed opportunity for everyone involved- the independent poster artist who gets to share their artistic vision with a whole new fan base and see their name on a world-famous band's concert poster, the band (which in this day and age of streaming pretty much only makes money through touring) can add a new revenue stream and have unique pieces of art to commemorate their historic concerts, and the fan- who gets the opportunity to own a very special limited edition show of beauty and forever have a souvenir of a meaningful musical experience. 

> I decided to build a real-world web app to help bands discover the best poster designers from all over the world, to facilitate poster designers in showcasing their work and easily connect with bands on tour, and simplify and centralize the process of creating concert posters so that more poster designers are booked to create posters, and more bands recognize the talent that's available and feel encouraged to add concert posters to their merch booth offerings.

## Demo
![Gig Prints Demo](LINK HERE)

## Tech
* Front End
  * React
  * Semantic UI
* Backend
  * Ruby on Rails

## Features

* Secure auth signup and login functionality for band and designer models using Rails bcrypt gem.
* Utilized Semantic UI React components for user profile pages, band and designer homepages which include browsing, filtering and search features, and an updatable table for project and task management.
* Live search queries database developed from scratch for band and poster designer information.
* Bands can update whether they are on tour or not, and poster designers can update whether they are open to work or not.
* Bands can filter out designers not open to work and designers can filter out bands who aren't touring.
* To post any upcoming tour dates with open poster commissions to their profiles, Bands can create a new poster project on the "My Projects" page, add the relevant details such as concert date, location, and deadline, and mark the project as "unassigned" (only poster projects marked as "unassigned" will POST to the "Open Poster Commissions" section of the band's profile).
* After a band and poster designer get in touch via email and mutually-agree to a poster project, the band can update the "unassigned" poster project to "in progress" on the "My Projects" page, set the agreed-upon poster designer from a dropdown menu of all poster designers using the app, and add any other details needed to create the poster (dimensions, edition, budget, etc). Once the status of a project is changed from "unassigned", it will be removed from the "Open Poster Commissions" section of the band's profile.
* After a band has assigned a poster designer to a poster project, the designer has the capability to upload image links as drafts until the band agrees to the final draft.
* After the band has agreed to the final image draft uploaded by the poster designer, they will mark the status of the project as "complete" and the completed poster will POST to both band and designer profiles under the "recent concert posters" section.
* Both Bands and Designers have the ability to edit their profiles and edit a poster project, but only bands can create a new project or delete a project.

## Usage

* To start Rails server, rails s
* To start local React server, npm start

## Requirements

- react 18.2.0
- react-router-dom 6.6.2
- semantic-ui-react 2.1.4
- Ruby 2.7.4p191
- Rails 7.0.4
- npm 8.19.2

### Installing Dependencies

```sh
npm install
```