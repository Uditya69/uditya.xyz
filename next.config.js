
require('dotenv').config();

const nextConfig = {
    env: {
        
        INSTAGRAM_ACCESS_TOKEN: process.env.INSTAGRAM_ACCESS_TOKEN,
      },
  webpack: (config) => {
    // Additional webpack configurations go here
    return config;
  },
};

module.exports = nextConfig;
