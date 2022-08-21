# Pokedex app
## Description:
App that catalogs and displays pokemon, similar to a pokedex found in the games

## Stack:
App created using:
- React
- [The pokemon API](https://pokeapi.co)

## Getting Started:
To get this project working you will need to:
1. Git clone or download this repo
2. Run ```npm install``` to get the node modules
3. Create a file called ```.env``` in the root directory
4. Add the PokeAPI endpoint, ```REACT_APP_API_URL = https://pokeapi.co/api/v2/```
5. Run ```npm run start```
6. (Optional) You can run ```npm run test``` for the testing

## Libraries:
No libraries were used for this project everything was coded from scratch

## Challenges:
Lots of weird React based issues, ```LocalStorage``` doesn't seem to persist, which means the favourites are buggy, also the API was a bit difficult to work with initially as it returns tons of nested data. I mainly got through by trial and error and googling

## Extra features:
There's a search bar with built in autocomplete, and I generated a logo

## Future features:
- Fix favourites page
- I originally planned to have infinite scrolling on the "All Pokemon" page, but I didn't have time to implement this
- Mobile reactive styling
- Dark mode theme