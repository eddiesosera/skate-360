<!-- REPLACE ALL THE [USERNAME] TEXT WITH YOUR GITHUB PROFILE NAME & THE [PROJECTNAME] WITH THE NAME OF YOUR GITHUB PROJECT -->

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/username/projectname?color=%000000)
![GitHub watchers](https://img.shields.io/github/watchers/username/projectname?color=%000000)
![GitHub language count](https://img.shields.io/github/languages/count/username/projectname?color=%000000)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/username/projectname?color=%000000)
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Instagram][instagram-shield]][instagram-url]
[![Behance][behance-shield]][behance-url]

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Eddie Sosera</h5>
<h5 align="center" style="padding:0;margin:0;">21100419</h5>
<h6 align="center">DV300 2024</h6>
</br>

<h5 align="center" style="padding:0;margin:0;">Ungerer Hattingh</h5>
<h5 align="center" style="padding:0;margin:0;">221302</h5>
<h6 align="center">DV300 2024</h6>
</br>

<p align="center">

  <a href="https://github.com/username/projectname">
    <img src="readmeAssets\LogoPlaceholder.png" alt="Logo" width="140" height="140">
  </a>
  
  <h3 align="center">Skate 360</h3>

  <p align="center">
    Short Project Slogan / Description <br>
      <a href="https://github.com/username/projectname"><strong>Explore the docs »</strong></a>
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/username/projectname/issues">Report Bug</a>
    ·
    <a href="https://github.com/username/projectname/issues">Request Feature</a>
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

<!--PROJECT DESCRIPTION-->

## About the Project

<!-- header image of project -->

<img src="readmeAssets\Cover.png">

### Project Description

We presnt to you an amazing inventory managment website for skateboards that allows the user to store stock and create to create unique and custom skateboard configurations.
The site features a fully functional inventory for each individual warehouse within the database as well as the ability to add, update, and delete items from the inventory.
Designed to fit every skater the site comes styled in only the best choice of theme for every skateboarder, that good'ol Grungy Punk theme to take you back into every skate park and make you feel right at home.

### Built With
<!-- angular -->
- [Angular CLI](https://angular.io/cli)
<!-- 3JS -->
- [Three.js](https://threejs.org/)
<!-- other -->
- [Visual Studio Code](https://code.visualstudio.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [Software](path/to/where/they/can/download/software) installed on your machine. The [Plugin](path/to/where/they/can/download/plugin) plugin will also be required.

### How to install

1. Download the latest version of [Angular CLI](https://angular.io/cli) on your machie.
2. Download Postgres and set up a database.
3. Clone the github repository using the URL.
4. Clone the backend of For the site using the URL.
5. Launch the repo through [Visual Studio](https://code.visualstudio.com/).

### Installation

Here are a couple of ways to clone this repo:

1.  Software </br>
    `Android Studio` -> `File` -> `New` -> `From Version Control` -> `Git`</br>
    Enter `https://github.com/username/projectname.git` into the URL field and press the `Clone` button.

2.  Clone Repository </br>
    Run the following in the command-line to clone the project:

    ```sh
    git clone https://github.com/username/projectname.git
    ```

        Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3.  Install Dependencies </br>
    Run the following in the command-line to install all the required dependencies:

    ```sh
    npm install
    ```

4.  Get a free API Key at [https://example.com](https://example.com) and enter it in the `config.js` file:
    ```js
    const API_KEY = "ENTER YOUR API";
    ```

### How to Run the App

1. fist link your backend to your database by filling in the required data in the "***" fields in both your config file and the datasource file

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

2. Run your database ```npm run dev``` 

3. Open and run your front end project ``` ng serve --open``` 

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->

## Features and Functionality


### Feature 1 : Crafting In 3D

In this site you are able to view the skateboard you are crafting in a 3D space where you can change each part as you wish.

<img src="readmeAssets\Craft Page.png">


### Feature 2 : Drag'n Drop

You the user when crafting a skateboard will be able to drag and drop the parts you want into the craft view to apply them to the skateboard.

<img src="readmeAssets\Craft Page drag and drop.png">


### Feature 3 : Create New Inventory Items

When creating a new item to add to the inventory the user will have to fill out this form with the valid information to add the new item.

<img src="readmeAssets\addnew item function.png">

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->

## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

### Ideation

#### MoodBoard Segment

<img src="readmeAssets\Moodboard section.png">


### Wireframes

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
<img src="readmeAssets\Warehouse page Wire frame (no Rounded Corners).png">

<br>

### User-flow

The userflow diagram
<img src="readmeAssets\userJourney.png">

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

### Database Architecture

The database diagram we used to map out relational data
<img src="readmeAssets\database Architecture.png">

<!-- DEVELOPMENT PROCESS -->

## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Back-End

Setting Up the ```CRUD``` Functionality.
  >This is the crud functionality for the skateboards and their configuration. This being the most complicated example of the ```CRUD``` functionality

  Get all Items

    > [!NOTE]
    > The GET ALL Function in the route.ts file used to get all items in the specific array

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
  ```

<br>

### Front-End

Warehouse Page 
This is a function that loops through the location array to find the information that has been joined to the array and allow for it to be fetched.

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

### Implementation Process

<!-- stipulate all of the functionality you included in the project -->

- Made use of both `functionality` to implement a specific feature.
- `MVC/MVVM` design architecture implemented.
- `Plugin` for this.
- ETC.

#### Highlights

<!-- stipulated the highlight you experienced with the project -->

- Getting the 3D Js models to work and function properly.
- getting all the data to work properly.

#### Challenges

<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->

- Bugs.
- Bugs.

### Reviews & Testing

<!-- stipulate how you've conducted testing in the form of peer reviews, feedback and also functionality testing, like unit tests (if applicable) -->

#### Feedback from Reviews

`Peer Reviews` were conducted by my fellow students and lecturer. The following feedback I found useful:

- Feedback one.
- Feedback two.

#### Unit Tests

`Unit Tests` were conducted to establish working functionality. Here are all the tests that were ran:

- Test 1 of this functionality
- Test 2 of this functionality

### Future Implementation

<!-- stipulate functionality and improvements that can be implemented in the future. -->

- Future 1.
- Future 2.

<!-- MOCKUPS -->

## Final Outcome

### Mockups

![image9][image9]
<br>
![image10][image10]

<!-- VIDEO DEMONSTRATION -->

### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](path/to/video/demonstration)

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/username/projectname/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->

## Authors

- [eddiesosera](https://github.com/eddiesosera)
- [Ungerer221](https://github.com/Ungerer221)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

## Contact

- **Your Name & Surname** - [email@address](mailto:email@address) - [@instagram_handle](https://www.instagram.com/instagram_handle/)
- **Project Link** - https://github.com/eddiesosera/dv300-term1

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->

- [Resource Name](path/to/resource)
- [Resource Name](path/to/resource)
- [Resource Name](path/to/resource)
- [Resource Name](path/to/resource)
- [Resource Name](path/to/resource)

<!-- MARKDOWN LINKS & IMAGES -->

[image1]: /path/to/image.png
[image2]: /path/to/image.png
[image3]: /path/to/image.png
[image4]: /path/to/image.png
[image5]: /path/to/image.png
[image6]: /path/to/image.png
[image7]: /path/to/image.png
[image8]: /path/to/image.png
[image9]: /path/to/image.png
[image10]: /path/to/image.png

<!-- Refer to https://shields.io/ for more information and options about the shield links at the top of the ReadMe file -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nameonlinkedin/
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/instagram_handle/
[behance-shield]: https://img.shields.io/badge/-Behance-black.svg?style=flat-square&logo=behance&colorB=555
[behance-url]: https://www.behance.net/name-on-behance/
