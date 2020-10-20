# 451

## Overview

**451** is a social media app to share your favourite books and audiobooks with your friends and family. It is a full-stack MERN app that combines the power of Ruby on Rails and React.


<br>

## MVP

The **451** MVP should provide full CRUD capability on the back and front ends. The fully-styled front end will include the ability to register, login, see a dashboard of RENDERED books from the Ruby on Rails API, CREATE new books, UPDATE/DELETE existing books, as well as make comments to other users.

<br>

### Goals

- Back end CRUD
- Front end CRUD
- Authentication
- User-friendly interface on all screens

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Used to build the main interface. |
|   React Router   | Used to route between provided screens. |
| React Material UI | Used to provide layout components and assets. |
|     Rails     | Framework used for app development. |
|     PostgreSQL    | Used for relational database management. |
|     Rails Rack CORS    | Used to ensure cross-origin resource sharing. |
|  Gem BCrypt  | Used for Active Model has_secure_password. |
|  Gem JWT  | Used for token-based authentication. |

<br>

### Client (Front End)

#### Wireframes

![Desktop, Tablet, Mobile Wireframes](https://whimsical.com/ScSeu6rPJAHmDJwh9CWr8G)

#### Component Tree

![Whimsical](https://whimsical.com/9eqjb1KmT8xjaoRw1EcRsp)

#### Component Hierarchy

``` structure

src
|__ screens/
      |__ BookContainer/
            |__ BookLibrary.jsx
            |__ BookDetail.jsx
            |__ BookCreate.jsx
            |__ BookEdit.jsx
            |__ AudioBooks.jsx
|__ components/
      |__ Sort.jsx
      |__ Layout.jsx
            |__ Header.jsx
            |__ SideNav.jsx
      |__ Carousel.jsx
      |__ FriendFaves.jsx
      |__ BookCard.jsx
|__ services/
|__ utilities/

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    BookContainer    | functional |   y   |   y   | The BookContainer will pass props to the BookLibrary. |
|    BookLibrary    | functional |   y   |   y   | The BookLibrary will render users saved books (that link to BookDetails).       |
|    BookDetail    |   functional    |   y   |   n   | BookDetails will render book info.      |
|    BookCreate    | functional |   y   |   n   | Screen to create new book. |
|    BookEdit    | functional |   y   |   n   | Screen to edit existing book. |
|    AudioBooks    | functional |   y   |   y   | Screen to show books to add. |
|    Layout    | functional |   y   |   y   | Component passes props to Header/SideNav |
|    FriendFeed    | functional |   y   |   y   | Shows what friends are reading/listening to. |
|    Carousel    | functional |   y   |   y   | Shows recently read books. |
|    BookCard    | functional |   y   |   y   | Renders individual book card. |
|    Header    | functional |   y   |   y   | Contains search bar and audio player. |
|    SideNav    | functional |   n   |   n   | Contains navigation buttons. |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| ERD / Wireframes / Whimsical    |    M     |     4 hrs      |     4 hrs     |    4 hrs    |
| Create Skeleton / DL Dependencies    |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| Authentication    |    L     |     2 hrs      |     2 hrs     |    2 hrs    |
| Back End CRUD |    H     |     4 hrs      |     4 hrs     |     4 hrs     |
| Front End Skeleton / DL Dependencies |    H     |     1 hrs      |     1 hrs     |     1 hrs     |
| BookContainer: Render Books in BookLibrary |    H     |     2 hrs      |     2 hrs     |     2 hrs     |
| Layout: Header / SideNav |    H     |     4 hrs      |     4 hrs     |     4 hrs     |
| BookCreate, BookEdit, BookDelete |    H     |     3 hrs      |     3 hrs     |     3 hrs     |
| Render Audiobooks on AudioBook |    L     |     2 hrs      |     2 hrs     |     2 hrs     |
| FriendFeed |    L     |     2 hrs      |     2 hrs     |     2 hrs     |
| Carousel |    M     |     2 hrs      |     2 hrs     |     2 hrs     |
| BookCard |    H     |     1 hrs      |     1 hrs     |     1 hrs     |
| CSS / Styling |    M     |     3 hrs      |     3 hrs     |     3 hrs     |
| Debugging |    H     |     2 hrs      |     2 hrs     |     2 hrs     |
| TOTAL               |          |     33 hrs      |     333 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![ERD Model fro 451](https://drive.google.com/file/d/1UymCL81Em1NH3RK7E4hr3E0-DhQyjj4h/view?usp=sharing)

<br>

***

## Post-MVP

- Friend Recommendations page
- User's favorite quotes from a book
- Purchase/Store functionality
- Suggested books

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
