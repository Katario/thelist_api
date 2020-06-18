The List

This app purpose is to easily create lists.
Also represent an example of a Node API architecture. Check here for the full detailled example : https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf

- API: contains all the controllers / routes. NO BUSINESS LOGIC IN HERE
- config: self-explanatory
- Loaders: Contains every loaders in order to clean the app.js file
- Models: self-explanatory
- Services: contains every services. No HTTP logic in here!


Start:
- docker-compose build --no-cache
- docker-compose up