class FetchApi {

    async fetchCommonData(urls, type) {
        if (urls === undefined) return
        if (type === undefined) return

        return Promise.all(await urls.map(async starship => {
            const id = starship.match(/\d+/)[0]
            const response = await fetch("https://swapi.dev/api/" + type + "/" + id)
            const data = await response.json()

            const name = data[Object.keys(data)[0]]

            return {
                name: name,
                img: process.env.PUBLIC_URL + "/images/" + type + "/" + id + ".jpg",
                type: type,
                id: id
            }
        }))
    }

    async fetchAllData(id, type, isWithImage) {
        if (type === undefined) return


        const response = await fetch("https://swapi.dev/api/" + type + "/" + id)
        const data = await response.json();
        if (isWithImage) {
            data.img = process.env.PUBLIC_URL + "/images/" + type + "/" + id + ".jpg";
        }
        else
        {
            data.img = process.env.PUBLIC_URL + "/images/not-found-image-15383864787lu.jpg"
        }
        return data;
    }



}

export default FetchApi
