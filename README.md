# Pet Adoption Agency Gallery

## Description
An sample image gallery of the available dogs up for adoption. Site loads in a collection of thumbnails and has the ability to paginate back and forth to see more pets. Sample includes only one collection of dogs.data however the app can change the request url to collect a new list of dogs.

## How to Run

After cloning the repo, within the root directory run `npm install`. Then `node server.js` to start the server, site is availabe on `localhost:3000`.

Reason for running a node server was to emmulate the fetch api of the dogs.json data. This can be later expanded apon by offering more info in the response such as page number, total number of pages or even supply a delay and/or error response for testing purposes.

## Future Feature

Incorporate page numbers in the getJson function, allowing the UI to identify which page the user is currently on and prevent the user from paginating too far or too few page numbers than the total.

Pet descriptions and a request to adopt form.

Information about the agency and the ability to contact them for questions.