const fetchAllMovieData = async () => {
    try{
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=df3fd060c14dba67f024a7e474dd71bf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
        if(!response.ok) {
            console.log(response.status)
            throw new Error('An error has occurred!')
        }
        const data = await response.json()
        return data
    }
    catch (e) {
        console.log(e.message)
    }
}

const fetchSpecificDetails = async (id) => {
    try {
        const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        if(!response.ok) {
            console.log(response.status)
            throw new Error('An error has occurred!')
        }
        const data = await response.json()
        return data
    }
    catch (e) {
        console.log(e.message)
        return (e.message)
    }
}

export { fetchAllMovieData, fetchSpecificDetails }
