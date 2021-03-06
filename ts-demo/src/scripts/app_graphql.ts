
// const delay = () => Math.floor(Math.random() * 1000) + 500;

async function getLaunches(limit: number, filter: string = "") {

  const res = await fetch('https://api.spacex.land/graphql/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      operationName: 'Query',
      query: `query Query($limit: Int) { launches: launchesPast(limit: $limit) {
        missionName: mission_name
      } }`,
      variables: { limit },    
    })
  })

  return (await res.json())
    .data
    .launches
    .filter(launch => launch.missionName.startsWith(filter));

}

getLaunches(30, 'Starlink')
  .then(starlinkLaunches => console.log(starlinkLaunches))


// Lab Exercise

// Using the example code above, write a function named `getLaunches` that meets the following requirements

// 1. Make the function an async function
// 2. The limit of total launches to query should be a function parameter
// 3. Add an optional function parameter where the returned list can be filtered by mission name (the filter should be starts with filter)
// 4. Display in the console the results of calling the function to request 30 launch records that match the starts with filter with the value 'Starlink'

export { }