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

    async fetchPageData(type, page, isWithImage, isNotFound)
    {
        const response = await fetch("https://swapi.dev/api/"+type+"/?page=" + page)
        const data = await response.json();

        if (data.detail === "Not found") return null;

        if (!isWithImage) return data

        if (isWithImage)
        {
            const dataWithImages = data.results.map((tempData, index) => {
                let totalIndex = index;

                if (page > 1) {
                    totalIndex = index + (page - 1) * 10;
                }

                if (isNotFound(totalIndex)) {
                    tempData.img = process.env.PUBLIC_URL + "/images/not-found-image-15383864787lu.jpg"
                } else {
                    tempData.img = process.env.PUBLIC_URL + "/images/" + type + "/" + (totalIndex + 1) + ".jpg"
                }

                return tempData
            })

            return {
                results: dataWithImages,
                next: data.next
            }
        }

    }


}

export default FetchApi
