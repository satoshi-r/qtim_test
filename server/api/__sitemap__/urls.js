
export default defineEventHandler( async () => {

    const query = "?page_size=1000000";
    const { public: config }= useRuntimeConfig()
    const baseURL = `${config.baseUrl}${config.locale}/`;
    const [flatPages, products, categories, articles, newsCat, solutions] = await Promise.all([
        $fetch(baseURL + 'pages/flat/', { params: { query } }),
        $fetch(baseURL + 'catalog/products/sitemap/', { params: { query } }),
        $fetch(baseURL + 'catalog/categories/', { params: { query } }),
        $fetch(baseURL + 'press/articles/', { params: { query } }),
        $fetch(baseURL + 'press/categories/', { params: { query } }),
        $fetch(baseURL + 'solutions/cards/', { params: { query } }),
    ]);

    let res = [];
    res = res.concat(
        ...flatPages.results.map(p  => `pages/${p.slug}`),
        ...products.map((p) => `product/${p.slug}`),
        ...categories.results.map((p) => `catalog/${p.slug}`),
        ...articles.results.map((p) => `news-material/${p.slug}`),
        ...newsCat.results.map((p) => `news/${p.slug}`),
        ...solutions.results.map((p) => `solutions/${p.slug}`),
    );
    return res.map(item => { return { loc: item }})
})