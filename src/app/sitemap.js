

export default async function sitemap() {
 
   const routes = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/work",
 ]
 
 
  return routes.map((route) => ({
    url: `https://www.dansper.com${route}`,
    lastModified: new Date(),
  }
))
}
    