// TODO: Determine what we still need.
// TODO: Make organized request to Mark or SC19 via Melyssa.
// TODO: Use Node.
// TODO: Sort data.

const API = {
	schedule: './data.json',
	// FAQ: Got CORS error… "Ain't nobody got time for that!" So, I downloaded the data.
	// schedule: 'https://submissions.supercomputing.org/?webserv=program_eventbase&event=sc19&feed=schedule'
};

/**
 * Get JSON from a given API URL
 * @param {string} url - The URL from which to get data
 * @return JSON
 */
async function get ( url ) {
	const response = await fetch( url );
	const json = await response.json();

	return json;
}

/**
 * Get the schedule API data
 * @return JSON
 */
async function getSchedule () {
	return await get( API.schedule );
}

(async function () {
	const data = await getSchedule();
	const keys = Object.keys( data );

	console.log( 'keys', keys );
	console.log( 'schedule', data.schedule );
}());