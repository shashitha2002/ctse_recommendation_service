import express, {type Application, type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';
import recommendationRoutes from './routes/recommendationRoute.js'

const app: Application = express();

// Middleware
app.use(helmet()); 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/recommendation', recommendationRoutes)
export default app;