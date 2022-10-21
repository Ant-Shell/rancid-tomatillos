const API_KEY = process.env.REACT_APP_API_KEY

const fetchAllMovieData = async (pageNum) => {
    try{
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_watch_monetization_types=flatrate`)
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
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
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
