# FxPriceTicker
After downloading the files:
1. Run `npm install`.
2. Run `npm run api`.
3. Run `npm start`.
4. Go to [http://localhost:4200](http://localhost:4200).

Because i used JSON Server to mimic actual data fetching, in `fx-prices-service.ts:65` there is data mapping so the response matches `Price` interface instead of `Price[]`. This is due to that JSON Server returns an array for `GET` request with query parameters.


## Angular
I've decided to use Angular for that project mostly because the subject of it indicates that it could grow fast with various features added for interacting with table of prices. Angular provides a set of tools to work with these types of projects e.g. RxJS, TypeScript, HttpClient.


## JSON Server
For better development experience I've decided to use JSON Server. It allowed me to create fake api which is way more comfortable to work with than hard-coded values. Especially when it comes to think about data flow management.


## Completed
- Basic configuration of new Angular project.
- Create service and methods methods that will connect to specified endpoints.
- Create service and methods that component will call to get the data.
- Setup JSON Server so the service can actually fetch the data.
- Add `dashoard` module.
- Setup routing.
- Implement table component with basic styling (Angular Material UI Components) and its responsive version.
- Implement ticking stream of prices (wait for api call to complete before executing another request for the same instrument).


## Some To-Dos
- Handle possible errors + tests.
- Create dedicated `not-found` component.
- Create shared module - to keep shared things in the right place (e.g. move Angular Material modules to it).
- Add loader while navigating.
- Setup `paths` in `tsconfig.json` (e.g. @features, @core).
- Think about sorting the data in any way before it gets displayed.
- Add custom styling.


## Some Ideas
- Indicate to the user that latest prices are being fetched.
- Add table row details to show more information about instrument and its prices.
- Add component that would allow filtering table data.
- Add table pagination.
