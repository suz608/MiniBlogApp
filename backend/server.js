import { dirname} from 'path'; 
import { fileURLToPath } from 'url';
import express from 'express'; 
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js'; 
import postRoutes from './routes/postRoutes.js'; 
import userRoutes from './routes/userRoutes.js'; 
import errorHandler from './middleware/errorMiddleware.js';
import cors from "cors";

const port = process.env.PORT || 3000;

// Get the current directory using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connectDB();

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  const path = await import('path'); 
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
