| HTTP Method  | URI path           | Description                 |
|--------------|--------------------|-----------------------------|
| CLUB Routes  |                    | Base URL /club              |
| GET          | /all               | Fetch all clubs             |
| GET          | /?sport=query      | Fetch all clubs by sport    |
| GET          | /details/:club_id  | Club details                |
| POST         | /create            | Create club                 |
| PUT          | /edit/:club_id     | Edit club                   |
| DELETE       | /delete/:club_id   | Delete club                 |

| FIELD Routes |                    | Base URL /field             |
| GET          | /all               | Fetch all fields            |
| GET          | /?keyword=query    | Fetch all fields by keyword |
| GET          | /?sport=query      | Fetch all fields by sport   |
| GET          | /details/:field_id | Field details               |
| GET          | /all/club_id       | Fetch all fields by club    |
| POST         | /create            | Create field                |
| PUT          | /edit/:field_id    | Edit field                  |
| DELETE       | /delete/:field_id  | Delete field                |

| EVENT Routes |                    | Base URL /event             |
| GET          | /all               | Fetch all events            |
| GET          | /?sport=query      | Fetch all fields by sport   |
| GET          | /details/:event_id | Event details               |
| POST         | /create            | Create event                |
| PUT          | /join/:event_id    | Join event                  |
| PUT          | /edit/:event_id    | Edit event                  |
| DELETE       | /delete/:event_id  | Delete event                |

| AUTH Routes  |                    | Base URL /auth              |
| POST         | /register          | Register User               |
| POST         | /login             | log in User                 |
| GET          | /verify            | Verify Auth token           |