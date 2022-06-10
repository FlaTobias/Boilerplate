module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'reactavancado'),
      user: env('DATABASE_USERNAME', 'flavio'),
      password: env('DATABASE_PASSWORD', '151083'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
