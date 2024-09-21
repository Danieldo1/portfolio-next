export default function robots(){
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ['/api', '/api/*'],
            
        },
        sitemap: "https://www.dansper.com/sitemap.xml",
    };
}