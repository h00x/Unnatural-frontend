async function fetchAPI(param) {
    const res = await fetch(process.env.API_URL + param)
    const json = await res.json()

    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}

export async function getHomeData() {
    const data = await fetchAPI('/home?populate=*')

    return data.attributes
}

export async function getHomeProjects() {
    return await fetchAPI('/projects?pagination[pageSize]=2&sort=createdAt:desc&populate[thumbnail]=*')
}

export async function getAboutData() {
    const data = await fetchAPI('/about?populate=*')

    return data.attributes
}

export async function getAllProjectsUnpopulated() {
    return await fetchAPI('/projects')
}

export async function getAllProjectsWithThumbnail() {
    return await fetchAPI('/projects?populate=thumbnail')
}

export async function getProject(slug) {
    const data = await fetchAPI('/projects?filters[slug][$eq]=' + slug + '&populate[project_content][populate]=*&populate[intro_image][populate]=*');

    return data[0]?.attributes
}
