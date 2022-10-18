const fetchAllMovieData = async () => {
    try{
        const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
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
    }
}

export { fetchAllMovieData, fetchSpecificDetails }
