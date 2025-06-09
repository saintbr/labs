import express from 'express';
import helloRouter from './routes/hello';

const app = express();
app.use(express.json());

app.use('/hello', helloRouter);

export function startServer() {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`✅ API rodando em http://localhost:${port}`);
  });
}
