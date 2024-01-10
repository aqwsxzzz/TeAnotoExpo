export const sequelizeConfig = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.postgresUsername,
  password: process.env.postgresPassword,
  database: process.env.postgresDB,
  autoLoadModels: true,
  synchronize: true,
};
