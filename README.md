API endpoints
​
Club routes
Base URL /club
​
| HTTP Method | URL path    | Description                                |
|-------------|-------------|--------------------------------------------|
| GET         | /all        | Fetch all clubs                            |
| GET         | /${sport}   | Fetch all clubs by the type of sport       |
| GET         | /:id        | Find a club by ID, details                 |
| POST        | /create     | Create club                                |
| PUT         | /:id/edit   | Edit club                                  |
| DELETE      | /:id/delete | Delete club                                |
​
Field routes
Base URL /fields
​
| HTTP Method | URL path    | Description                                |
|-------------|-------------|--------------------------------------------|
| GET         | /all        | Fetch all fields                           |
| GET         | /${keyword} | Fetch all fields by the keyword            |
| GET         | /:id        | Find a field by ID, details                |
| GET         | /club/:club_id   | Find all fields by club id            |
| POST        | /create     | Create field                               |
| PUT         | /:id/edit   | Edit field                                 |
| DELETE      | /:id/delete | Delete field                               |
​
Events routes
Base URL /event
​
| HTTP Method | URL path    | Description                                |
|-------------|-------------|--------------------------------------------|
| GET         | all         | Fetch all events                           |
| GET         | /${sport}   | Fetch all events by the type of sport      |
| GET         | /:id        | Find a event by ID, details                |
| GET         | /:user_id   | Find  all events by user id (participants) |
| GET         | /:field_id  | Find all events by field id                |
| GET         | /:owner_id  | Find all events by owner id                |
| POST        | /create     | Create event                               |
| PUT         | /:id/edit   | Edit event                                 |
| PUT         | /:id/join   | Add player to event                        |
| DELETE      | /:id/delete | Delete event                               |
​
​
Auth routes
Base URL /auth
​
| HTTP Method | URL path    | Description                                |
|-------------|-------------|--------------------------------------------|
| POST        | /register   | Sign up new user                           |
| POST        | /login      | Login user                                 |
| GET         | /verify     | Verify Auth token                          |