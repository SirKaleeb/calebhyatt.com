module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/6xc7TtvhxY",
        permanent: true,
      },
      {
        source: "/podcast",
        destination: "https://anchor.fm/CoffeeWithCaleb",
        permanent: true,
      },
    ];
  },
};
