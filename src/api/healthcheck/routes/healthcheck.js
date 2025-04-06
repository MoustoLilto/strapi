module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/healthcheck',
      handler: (ctx) => {
        ctx.response.status = 200;
        ctx.response.body = 'OK';
      },
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
