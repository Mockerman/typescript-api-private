import { Router } from 'express';
import ReportsController from '../../controllers/ReportsController';

const ReportsRouter = Router();

ReportsRouter.get('/all', ReportsController.getAllReports);
ReportsRouter.post('/create', ReportsController.createReport);
ReportsRouter.put('/update', ReportsController.updateReport);
ReportsRouter.delete('/delete', ReportsController.deleteReport);

export default ReportsRouter;
