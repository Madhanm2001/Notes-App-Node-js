import express, { Application } from 'express';
import authRouter from './routes/auth.routes';
import cors from 'cors'
import profileRouter from './routes/profile.routes';
import folderRouter from './routes/folder.routes';
import notesRouter from './routes/notes.routes';

const app: Application = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/folder', folderRouter);
app.use('/note', notesRouter);

app.get('/', (req, res) => {
  res.send('Notes App API is running!');
});

export default app;
