<!-- REPLACE ALL THE [USERNAME] TEXT WITH YOUR GITHUB PROFILE NAME & THE [PROJECTNAME] WITH THE NAME OF YOUR GITHUB PROJECT -->

<!-- Repository Information & Links-->
<br />

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Instagram][instagram-shield]][instagram-url]

<!-- HEADER SECTION -->
 <p align="center">
<h5 align="center" style="padding:0;margin:0;">Eddie Sosera 21100419  |  Ungerer Hattingh 221302</h5>
·
<!-- <h5 align="center" style="padding:0;margin:0;">Ungerer Hattingh 221302</h5> -->
</p>
</br>

<!-- Cover Image-->
 <a href="https://github.com/eddiesosera/dbhunt">
    <img src="./readmeAssets/skate-360-cover.png" alt="Cover Image">
  </a>

<!-- HEADER SECTION -->
<br />
<br />

<p align="center">

  <a href="https://github.com/eddiesosera/dbhunt-v1">
    <img src="./readmeAssets/skate-360-logo.png" alt="Logo" width="140">
  </a>
  
  <h3 align="center">Skate 360</h3>
  <p align="center">
   Skate All day, Everyday!
    <br>
    <br>
      <a href="https://github.com/eddiesoseradbhunt"><strong>Explore the docs »</strong></a>
   <br />
   <br />
   <a href="https://drive.google.com/drive/folders/1UVmXXdD3UPih2JOfLJc1vha8G8sXqz5x?usp=sharing">View Demo</a>
    ·
    <a href="https://github.com/eddiesosera/skate-360/issues">Report Bug</a>
    ·
    <a href="https://github.com/eddiesosera/skate-360/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Project Description](#project-description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [How to install](#how-to-install)
- [Features and Functionality](#features-and-functionality)
- [Concept Process](#concept-process)
  - [Ideation](#ideation)
  - [Wireframes](#wireframes)
  - [User-flow](#user-flow)
- [Development Process](#development-process)
  - [Implementation Process](#implementation-process)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Reviews and Testing](#peer-reviews)
    - [Feedback from Reviews](#feedback-from-reviews)
    - [Unit Tests](#unit-tests)
  - [Future Implementation](#peer-reviews)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
  - [Video Demonstration](#video-demonstration)
- [Conclusion](#conclusion)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<br />
<br />

<!--PROJECT DESCRIPTION-->

## Project Description

    <img src="./readmeAssets/skate-360-logo.png" alt="Logo" width="140">

Skate360 is an inventory management website for skateboards that allows the user to store stock and create unique and custom skateboard configurations with a touch of that good Grungy Punk theme to take you back into every skate park and make you feel right at home.

<br />
<br />

## Built With

<!-- angular -->

- [Angular CLI](https://angular.io/cli)
<!-- Angular Material -->
- [Angular Material](https://material.angular.io/)
<!-- 3JS -->
- [Three.js](https://threejs.org/)
<!-- other -->
- [Visual Studio Code](https://code.visualstudio.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequisite technologies the user would need and also the steps to install your project on their own machines -->

<br />
<br />

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing.

<br />
<br />

### Prerequisites

Please ensure you have the latest version of [Angular](https://angular.io/guide/setup-local) installed on your machine. The [Plugin](path/to/where/they/can/download/plugin) plugin will also be required.

**The `Backend` for the Website**
[Backend repository](https://github.com/eddiesosera/dv300-term1-backend)

<br />

### How to install

1. Download the latest version of [Angular CLI](https://angular.io/cli).

- use this command in your terminal. `npm install -g @angular/cli`

2. Download Postgres (pgAdmin4) and set up a database.
3. Clone the GitHub repository using the URL.
4. Clone the backend of the site using the URL.
5. Launch the repo through [Visual Studio](https://code.visualstudio.com/).

<br />
<br />

## Installation

Here are a couple of ways to clone this repo:

1.  Open any IDE.

2.  Clone Repository </br>
    Run the following in the command line to clone the project:

    ```sh
    git clone https://github.com/eddiesosera/skate-360
    ```

        Open `Software` and select `File | Open...` from the menu. Select the cloned directory and press `Open` button.

3.  Install Dependencies </br>
    Run the following in the command line to install all the required dependencies:

    ```sh
    npm install
    ```

<br />
<br />

## How to Run the App

1. First, link your backend to your database by filling in the required data in the "\*\*\*" fields in both your config file and the data source file:

```
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "***",
  "synchronize": true,
  "entities":["src/models/**/*"],
  "database":"****"
}
```

2. Run your database `npm run dev`

3. Open and run your front-end project ` ng serve --open`

4. See the site, open it in your Defulat browser, and enjoy.

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->

<br />
<br />

## Features and Functionality

### Feature 1: Crafting In 3D

In this site you are able to view the skateboard you are crafting in a 3D space where you can change each part as you wish.

<img src="readmeAssets\Craft Page.png">

### Feature 2: Drag'n Drop

When crafting a skateboard, you, the user, can drag and drop the parts you want into the craft view to apply them to the skateboard.

<img src="readmeAssets\Craft Page drag and drop.png">

### Feature 3: Create New Inventory Items

When creating a new item to add to the inventory, the user must fill out this form with valid information.

<img src="readmeAssets\addnew item function.png">

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->

<br />
<br />

## Concept Process

The `Conceptual Process` is the set of actions, activities, and research that were undertaken when this project was started.

### Ideation

#### MoodBoard Segment

<img src="readmeAssets\Moodboard section.png">

<!-- ### Wireframes

Home Page Wireframe
<br>
<img src="readmeAssets\homeideation.png">

<br>

The Inventory Page Wireframe
<br>
<img src="readmeAssets\Inventory List Page wire frame.png">

<br>

The warehouse page wireframe
<br>
<img src="readmeAssets\Warehouse page Wireframe (no Rounded Corners).png"> -->

<br>

### User Flow Diagram

<img src="readmeAssets\userJourney.png">

<br />

### Page Designs

Onboarding Page

<img src="readmeAssets\Onboarding.png">

Home Page

<img src="readmeAssets\Homefinaldesign.png">

Inventory Page

<img src="readmeAssets\Inventory List Page.png">

Skateboard Page

<img src="readmeAssets\Skateboard List.png">

Craft Page

<img src="readmeAssets\Craft Page.png">

Account Page

<img src="readmeAssets\Account.png">

<br />

### Database Architecture

See Backend Repo For more!
[Backend repository](https://github.com/eddiesosera/dv300-term1-backend)

<!-- <img src="readmeAssets\database Architecture.png"> -->

<br />
<br />

<!-- DEVELOPMENT PROCESS -->

## Development Process

The `Development Process` refers to the technical implementations and functionality in the application's frontend and backend.

### Backend

[Backend repository](https://github.com/eddiesosera/dv300-term1-backend)

<!-- Setting Up the ```CRUD``` Functionality.
  >This is the crud functionality for the skateboards and their configuration. This is the most complicated example of the ```CRUD``` functionality.

  Get all Items

    > [!NOTE]
    > The GET ALL Function in the route.ts file is used to get all items in the specific array

  ```
    // Get All Skateboards
    skateboardRouter.get('/', async (req, res) => {
        try {
            console.log('Im being requested: Skateboard')
            const items = await appDataSource
                .getRepository(Skateboard)
                .createQueryBuilder('skateboards')
                .leftJoinAndSelect('skateboards.configuration', 'configuration')
                .leftJoinAndSelect('configuration.board_type', 'board_type')
                .leftJoinAndSelect('skateboards.location', 'location')
                .leftJoinAndSelect('skateboards.stockNeeded', 'stockNeeded')
                .leftJoinAndSelect('skateboards.craftedBy', 'users')
                .getMany();
            res.json(items)
        } catch (error) {
            console.log('Error fetching: ', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    });
  ```

  Get Singal Item

  > [!NOTE]
  > The GET SINGLE Function to get a single item by calling the item ID

  ```
    // Get Single Skateboards
    skateboardRouter.get('/:id', async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const skateboard = await appDataSource.getRepository(Skateboard)
                .createQueryBuilder("skateboards")
                .leftJoinAndSelect('skateboards.configuration', 'configuration')
                .leftJoinAndSelect('skateboards.location', 'location')
                .leftJoinAndSelect('skateboards.stockNeeded', 'stockNeeded')
                .leftJoinAndSelect('skateboards.craftedBy', 'users')
                .where("skateboards.id = :id", { id: id })
                .getOne()

            if (!skateboard) {
                return res.status(404).json({ error: 'Skateboard not found' });
            }

            res.json(skateboard);

        } catch (error) {
            console.log('Error fetching: ', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    });
  ```

  Add an Item

  > [!NOTE]
  > The Function to add new items to your database

  ```
    // Insert Single Skateboard
    skateboardRouter.post('/', async (req, res) => {
        try {

            const { configuration, userId, locationId, stockNeeded, ...newSkateboard } = req.body
            // const {configuration} = req.body
            let configId: any = null;

            // Create Configuration of Skateboard first to get the ID after the item is recorded
            await appDataSource
                .createQueryBuilder()
                .insert()
                .into(Configuration)
                .values([configuration])
                .execute()
                .then((configItem: any) => {
                    configId = configItem.identifiers[0]?.id
                }).catch((error) => {
                    console.log('Error creating Configuration: ', error)
                    res.status(500).json({ error: 'Configuration could not be saved.' })
                })

            // If the Configuration has been created then create Skateboard item
            if (configId) {
                console.log("AFTER CONFIG SUCCESS ENTER SKATEBOARD, CONFID ID: ", configId)

                await appDataSource
                    .createQueryBuilder()
                    .insert()
                    .into(Skateboard)
                    .values([
                        {
                            craftedBy: userId!,
                            location: locationId!,
                            stockNeeded: stockNeeded!,
                            avatar: newSkateboard.avatar,
                            price: newSkateboard.price,
                            craftedOn: Date(),
                            configuration: configId
                        }
                    ])
                    .execute().then((sktbd) => {
                        let skateboardNewId = sktbd.identifiers[0].id
                        console.log("Created New Skateboard ID: ", skateboardNewId)
                        res.json(sktbd)
                    })
            }
        } catch (error) {
            console.log('Error fetching: ', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    })
  ```

  Update Item

  > [!NOTE]
  > The UPDATE Function in the route.ts file

  ```
    // Update Single Skateboard
    skateboardRouter.put('/:id', async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const { price } = req.body;
            const { avatar } = req.body;
            const { configuration } = req.body;

            // Find Single Skateboard Item
            const skateboardItem = await
                appDataSource
                    .getRepository(Skateboard)
                    .createQueryBuilder("skateboards")
                    .leftJoinAndSelect('skateboards.configuration', 'configuration')
                    .where("skateboards.id = :id", { id: id })
                    .getOne()

            // Find Single Configuration Item
            const configurationItem = await
                appDataSource
                    .getRepository(Configuration)
                    .createQueryBuilder("configuration")
                    .where("configuration.id = :id", { id: skateboardItem?.configuration?.id })
                    .getOne()

            if (!skateboardItem) {
                res.status(400).json({ message: 'No Item found' })
            }

            // Update Skateboard Properties
            skateboardItem!.price = price
            skateboardItem!.avatar = avatar

            // Update Configuration Properties
            configurationItem!.board_type = configuration?.board_type
            configurationItem!.board_skin = configuration?.board_skin
            configurationItem!.trucks = configuration?.trucks
            configurationItem!.wheels = configuration?.wheels
            configurationItem!.bearings = configuration?.bearings

            console.log("Updated Skateboard", skateboardItem, "Updated Skateboard", configurationItem)

            const updatedItem = await appDataSource
                .getRepository(Skateboard)
                .save(skateboardItem!)

            await appDataSource
                .getRepository(Configuration)
                .save(configurationItem!).then((config) => {
                    res.json("Update Config: " + JSON.stringify(config))
                    res.json(updatedItem)
                })

        } catch (error) {
            console.log('Error fetching: ', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    })
  ```

  Delete Item

  > [!NOTE]
  > The DELETE Function in the route.ts file

  ```
    // Delete Single Skateboard
    skateboardRouter.delete('/:id', async (req, res) => {
        try {
            const id = parseInt(req.params.id);

            // Get Skateboard
            await appDataSource.getRepository(Skateboard)
                .createQueryBuilder("skateboards")
                .leftJoinAndSelect('skateboards.configuration', 'configuration')
                .where("skateboards.id = :id", { id: id })
                .getOne().then(async (sktbd: any) => {
                    console.log("DELETE SKTBD: ", sktbd)

                    // Delete Skateboard
                    const skateboardDelete = await appDataSource.getRepository(Skateboard)
                        .createQueryBuilder()
                        .delete()
                        .from(Skateboard)
                        .where("id = :id", { id: id })
                        .execute()

                    res.json("Successfully removed Skateboard. " + JSON.stringify(skateboardDelete))

                    // Delete Configuration
                    await appDataSource.getRepository(Configuration)
                        .createQueryBuilder()
                        .delete()
                        .from(Configuration)
                        .where("id = :id", { id: sktbd.configuration.id })
                        .execute()

                })

        } catch (error) {
            console.log('Error fetching: ', error)
            res.status(500).json({ error: 'Internal server error' })
        }
    });
  ``` -->

### Frontend

**CRUD Functionality**

Using the Openstock-Form To add a new item to the designated warehouse

```
  constructor(private newStockService: NewStockService) { }
```

**Warehouse Page**

This is a function that loops through the location array to find the information that has been joined to it and allows it to be fetched.

```
  filterSkateboardsByBoardType(boardTypeName: string, locations: any): any[] {
    const filteredSkateboards: any[] = [];

    for (const location of locations) {
      for (const skateboard of location.skateboards) {
        if (skateboard.configuration.board_type.name === boardTypeName) {
          filteredSkateboards.push(skateboard);
        }
      }
    }

    return filteredSkateboards;
  }
```

After the Looping function, we have an ``ngOnInit`, so in site init, we call all the relevant data that will be displayed in the warehouse card.

```
    // to get all the location data
    ngOnInit() {
      // the "any" was LocationModel but it is acting weird
      this.service.getAllLocations().subscribe((data: any) => {
        console.log(data);
        console.log(this.filterSkateboardsByBoardType("ramsy", data).length)
        this.classicboardsLength = this.filterSkateboardsByBoardType("ramsy", data).length // for the classic board length
        console.log(this.filterSkateboardsByBoardType("Long", data).length)
        this.longboardsLength = this.filterSkateboardsByBoardType("Long", data).length // fot the long board length
        console.log(this.filterSkateboardsByBoardType("Oldschool", data).length)
        this.oldschoolboardsLength = this.filterSkateboardsByBoardType("Oldschool", data).length // for the oldschool length
        this.locationList = data
        // this.findItemByType(data[0].skateboards[0].boardtype)
        this.wheelsLength = this.filterLocationForWheels.length
        this.trucksLength = this.filterLocationForTrucks.length
      })
    }
```

To display the data on the `warehouse-card-component` we call the variable listed in the `.ts` file

```
  <div class="warehouse-card-container">
    <app-warehouse-card *ngFor="let item of locationList"
      [location]="item"
      [id]="item.id"
      [numberOfClassicBoards]="classicboardsLength"
      [numberOfLongBoards]="longboardsLength"
      [numberOfOldschoolBoards]="oldschoolboardsLength"
      [numberOfWheels]="wheelsLength"
      [numberOfTrucks]="trucksLength"
      ></app-warehouse-card>
  </div>
```

**Skateboard Service Code**

This is an example of the code used in the skateboard service file for the `CRUD` functionality.

```
  getAllSkateboards(): Observable<Skateboard[]> {
      return this.http.get<any>(this.baseUrl)
  }
```

> To get all the skateboards

<br>

```
  getSingleSkateboard(id: number): Observable<Skateboard> {
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }
```

> To get a single skateboard

<br>

```
  createSkateboard(body: Skateboard): Observable<Skateboard> {
    return this.http.post<Skateboard>(this.baseUrl, body)
  }
```

> To Create a new skateboard

<br>

```
  updateSkateboard(id: number, body: Skateboard): Observable<Skateboard> {
    return this.http.put<Skateboard>(`${this.baseUrl}/${id}`, body)
  }
```

> To Update a specific skateboard

<br>

```
  deleteSkateboard(id: number): void {
    this.http.delete<Skateboard>(`${this.baseUrl}/${id}`).subscribe(itemDeleted => console.log("deleted: " + itemDeleted))
  }
```

> To Delete a specific Skateboard

<br>

**Account Page**

```
    {
        path: 'account',
        component: AccountComponent,
        canActivate: [(state: RouterStateSnapshot) => {
            // to check for data existing in the local storage
            if (localStorage.getItem('userData')) {
                return true; // to allow acces to the route
            } else {
                // redirects user to the onboarding page if data doesnt exist
                // return state.router.createUser(['/onboarding']);
                return state.url !== '/onboarding' ? state.url : '/onboarding'; // to avoid redirect looping
            }
        }]
    },
    {
        path: '', redirectTo: '/account', pathMatch: 'full'
    }, // defualt route
```

> To redirect the user to the login page if they haven't been logged in

<br />
<br />

## Implementation Process

<!-- stipulate all of the functionality you included in the project -->

<!-- - Made use of both `functionality` to implement a specific feature.
- `MVC/MVVM` design architecture implemented.
- `Plugin` for this.
- ETC. -->

<!-- <br /> -->

#### Highlights

<!-- stipulated the highlight you experienced with the project -->

- Getting the 3D.js models to work and function properly.
- getting all the data to work properly.

<!-- <br /> -->

#### Challenges

<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->

- Bugs.
- Looping through the skateboard array within the location database to get the number of each different board type and the total number of boards **(Ungerer)**.
- Inject other information from one table into another and then call that information **(Ungerer)**.
- Get the warehouse cards for the home page **(Ungerer)**.
- Populating the account page with the logged-in user's information and Calling in the skateboards that the user has made **(Ungerer)**.

<!-- <br /> -->

### Responsibilities

Eddie :

**Frontend**

- three.js and the 3D Interface
- Craft Page
- User Authentication
- Inventory page filters and sorting
- Adding Item Form and Function
- Home page
- Home page animated background
- home page skateboard section
- Navbar component
- Login form and authentication quiz

**Backend**

- Skateboard Route and Model
- Configuration Route and Model
- Location Route and Model
- User Model Route
- ormConfig
- Backend Authentication Route

Ungerer :

**Frontend**

- Warehouse Page
- warehouse card component
- inventory Page
- accounting page
- Home page warehouse section
- Side-Navbar component
- Frontend Readme file
- Mockup Photos

**Backend**

- Wheel Route and model
- Truck Route and model
- Bearing Route and model
- Board-Skin Route and model
- Board-type Route and model
- backend Readme file

Shared :

- General Desing
- Site Layout
- Populating the Site
- Redirecting an un-logged User to the login page when navigating to the account page
- Inventory New Stock item Form

<br />

<!-- ### Reviews & Testing

<!-- stipulate how you've conducted testing in the form of peer reviews, feedback and also functionality testing, like unit tests (if applicable) -->

<!-- #### Feedback from Reviews

`Peer Reviews` were conducted by my fellow students and lecturer. The following feedback I found useful:

- Feedback one.
- Feedback two. -->

<!-- <br /> -->

#### Unit Tests

`Unit Tests` were conducted to establish working functionality. Here are all the tests that were run:

> [!Note]
> Postman and insomnia were both used to test all backend CRUD functionality.

**Test 1** of Create User functionality :

- We tested the back of the user-create function using Postman to test the CRUD

**Test 2** of Login Authentication Quiz functionality :

To test the Authentication quiz, we purposely got the answer wrong to see if it was working properly and then selected the right answer.
- We also tried logging in without completing the quiz to test if you could bypass the quiz.

**Test 3** of Warehouse inventory route

- When clicking on the warehouse inventory, you are taken to the inventory linked to that specific warehouse, which shows all items that match that specific location.

<br />

### Future Implementation

<!-- stipulate functionality and improvements that can be implemented. -->

- Refining The crafting process.
- Improving the responsiveness of the website.

<br />
<br />

## Final Outcome

<!-- MOCKUPS -->

### Mockups

<!-- <h5>Mockup 1</h5> -->
<!-- <img src="readmeAssets\Mockup01.jpeg"> -->
<img src="readmeAssets\NewMockup01.png">

<!-- <h5>Mockup 2</h5> -->
<img src="readmeAssets\MockUp02.png">

<br>

<!-- VIDEO DEMONSTRATION -->

### Video Demonstration

To see a run-through of the application, click below:

[View Demonstration Video](https://drive.google.com/drive/folders/1UVmXXdD3UPih2JOfLJc1vha8G8sXqz5x?usp=sharing)
·
[View Cool Promo Video](https://www.instagram.com/p/C51WRk8NO8z/?next=%2F)

<br />
<br />

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br />
<br />

<!-- AUTHORS -->

## Authors

<div style="display: flex; justify-content: space-between;">
  <div style="text-align: center;">
    <a href="https://github.com/eddiesosera/">
      <img src="https://github.com/eddiesosera.png" alt="eddie Sosera" width="100px">
    </a>
    <br>
    <sub>Eddie Sosera</sub>
  </div>

  <br />

 <div style="text-align: center;">
    <a href="https://github.com/Ungerer221">
      <img src="https://github.com/Ungerer221.png" alt="eddie Sosera" width="100px">
    </a>
    <br>
    <sub>Ungerer Hattingh</sub>
  </div>
  </div>
<!-- - [Ungerer221](https://github.com/Ungerer221) -->

<!-- LICENSE -->

<br />
<br />

## License

Distributed under the MIT License. See [`License`](https://opensource.org/license/mit/) for more information
<br />
<br />

<!-- CONTACT -->

## Contact

- **Eddie Sosera** - [email@address](mailto:21100419@virtualwindow.co.za) - [@instagram_handle](https://www.instagram.com/engineeredimagination)
- **LinkedIn** - [@eddiesosera](https://www.linkedin.com/in/eddiesosera/), or
  [Visit website](https://engineeredimagination.co.za).
- **Ungerer Hattingh** - [email@address](mailto:221302@virtualwindow.co.za) - [@instagram_handle](https://www.instagram.com/ungererhattingh/)
- **Project Link** - https://github.com/eddiesosera/dv300-term1
- **Backend Link** - https://github.com/eddiesosera/dv300-term1-backend

<br />
<br />

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->

- [Angular](https://angular.io/tutorial/first-app)
- [Tutorial Video](path/to/resource)
- [Mockup image 1](https://www.pexels.com/photo/a-person-using-a-laptop-6372918/)
- [Mockup Image 4](https://www.pexels.com/photo/computer-monitor-with-on-table-4499765/)
- [Mockup Backgroung Image 5](https://www.pexels.com/photo/turned-on-grey-table-lamp-1643280/) Photo by Dorran
- [Death Icon](https://www.flaticon.com/free-icons/skull) Flaticon
- [classic Skateboard Model]()
- [Longboard Skateboard Model]()
- [Old School Skateboard Model]()
- [Three.js]()
- [Images 01]()
- [Image 02]()
- [background video]()
- [Grunge Texture Ovelay]()
<!-- MARKDOWN LINKS & IMAGES -->

<!-- [image1]: /path/to/image.png
[image2]: /path/to/image.png
[image3]: /path/to/image.png
[image4]: /path/to/image.png
[image5]: /path/to/image.png
[image6]: /path/to/image.png
[image7]: /path/to/image.png
[image8]: /path/to/image.png
[image9]: /path/to/image.png
[image10]: /path/to/image.png -->

<!-- Refer to https://shields.io/ for more information and options about the shield links at the top of the ReadMe file -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/eddiesosera/
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/engineeredimagination/
