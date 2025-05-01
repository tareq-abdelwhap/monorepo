import mongoose from 'mongoose';

mongoose
  .connect(process.env.DATABASE as string, {
    serverApi: {
      version: '1',
      strict: true,
      deprecationErrors: true,
    },
  })
  .catch(error => console.log(error));

export default mongoose;
