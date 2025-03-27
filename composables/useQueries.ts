import type { Query } from "~/types/common";

export const useQueries = () => {

    const cleanQuery = (query: Query) => {
        for (const key in query) {
            if (!query[key]) {
                delete query[key];
            }
        }
    }

    const updateQuery = (newQuery: Query) => {
        const route = useRoute()
        const query = Object.assign({}, route.query, newQuery)
        cleanQuery(query)
        if (query !== route.query) replaceUrl(query) 
    }

    const replaceUrl = (query: Query) => {
        const route = useRoute()
        const { path } = route
        const router = useRouter()

        if (query) router.replace({ path, query })
        else router.push(path)
    }

    return {
        updateQuery,
    }

}