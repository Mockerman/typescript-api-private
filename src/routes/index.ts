import { Router } from 'express';
import TodosRouter from './todos';
import ReportsRouter from './reports/ReportsRouter';
import StatisticsRouter from './stats/StatisticsRouter';

const AppRouter = Router();

AppRouter.use('/todos', TodosRouter);
AppRouter.use('/reports', ReportsRouter);
AppRouter.use('/stats', StatisticsRouter);

export default AppRouter;
