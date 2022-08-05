# Project REST-Rant

REST-Rant is a resturant rating app where users can upload images of resturants the have visted. The user can also rate and leave their review of those restaurants. Users are able to edit any details they posted about the resturant such as the name, location, year found, and type of cuisines served at the resturant. The user can also delete the entire post if desired.    

![Home Page](public/images/rest-Rant.png)


## Technologies
- ran on **localhost:3000**
- dependencies used for project are **mongoose React** and **express** 

### Routes

| Method |    Path                     | Purpose     |
| :----: | :---------:                 | :---------: |
| GET    | /                           | Home page |
| GET    | /places                     | Places index page|
| POST   | /places                     | Create new place |
| GET    | /places/new                 | Form page for creating a new place |
| GET    | /places/:id                 | Details about a particular place |
| PUT    | /places/:id                 | Update a particular place |
| GET    | /places/:id/edit            | Form page for editing an existing place |
| DELETE | /places/:id                 | Delete a particular place |
| POST   | /places/:id/rant            | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantid    | Delete a rant (comment) about a particular place |
| GET    |  *                          | 404 page (matches any route not defined above) |


Places

| Field     | Type     |
| :-------  | :------: |
| Name      | string   |
| City      | string   |
| State     | string   | 
| Cuisines  | string   |
| Pictues   | string   |