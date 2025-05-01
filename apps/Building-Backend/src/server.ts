import 'dotenv/config';
import 'dotenv-expand/config';
import './config/database';
import app from './app';

const port = process.env.PORT || 8000;
export const server = app.listen(port, () => {
  console.log(`Server is up and running on port ${port}.`);
  console.log(`Access the server via: http://localhost:${port}`);
});
