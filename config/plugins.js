module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },

  // Cloudinary
  upload: {
    config: {
      provider: 'cloudinary',

      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },

      actionOptions: {
        upload: {
          folder: env('CLOUDINARY_FOLDER'),
          use_filename: true,
          unique_filename: true
        },
        uploadStream: {
          folder: env('CLOUDINARY_FOLDER'),
          use_filename: true,
          unique_filename: true
        },
        delete: {},
      },
    },
  },

  // Email
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'hello@example.com',
        defaultReplyTo: 'hello@example.com',
      },
    },
  },

  // Mailgun
  // email: {
  //   email: {
  //     config: {
  //       provider: 'mailgun',
  //       providerOptions: {
  //         key: env('MAILGUN_API_KEY'), // Required
  //         domain: env('MAILGUN_DOMAIN'), // Required
  //         url: env('MAILGUN_URL', 'https://api.mailgun.net'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
  //       },
  //       settings: {
  //         defaultFrom: 'myemail@protonmail.com',
  //         defaultReplyTo: 'myemail@protonmail.com',
  //       },
  //     },
  //   },
  // },

  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'), // env('NODE_ENV') === 'production' ? env('SENTRY_DSN') : null,
      sendMetadata: true,
    },
  },
});
