/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["i.etsystatic.com","m.media-amazon.com","firebasestorage.googleapis.com"]
    },
    env:{
        DATABASE_URL:'mongodb://localhost:27017/e-shop'
    }
}

module.exports = nextConfig
