import sessions from 'express-session';
import MongoStore from 'connect-mongo';
import app from '../app';

declare module 'express-session' {
  export interface SessionData {
    userId: string,
  }
}

const thirdyDays = 1000 * 60 * 60 * 24 * 30;
const mongoStoreOptions = {
  mongoUrl: process.env.MONGO_URL,
};

const options = {
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create(mongoStoreOptions),
  saveUninitialized: false,
  cookie: { httpOnly: false, maxAge: thirdyDays, secure: process.env.NODE_ENV === 'production' },
  resave: false,
};

app.set('trust proxy', 1);

app.use(sessions(options));
