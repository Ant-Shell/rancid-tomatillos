const fetchAllMovieData = async () => {
    const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    const data = await response.json()
    return data
}

const fetchSpecificDetails = async (details) => {
    const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${details}`)
    const data = await response.json()
    return data
}

export { fetchAllMovieData, fetchSpecificDetails }
