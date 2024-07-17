import { Request, Response } from 'express';
import ReportsService from '../services/ReportsService';
import { ICreateReportBody, IUpdateReportBody, IDeleteReportBody } from '../interfaces/routers/ReportRequests';

class ReportsController {
  public async getAllReports(req: Request, res: Response): Promise<Response> {
    try {
      const reports = await ReportsService.getAllReports();
      return res.status(200).json(reports);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching reports', error });
    }
  }

  public async createReport(req: Request<{}, {}, ICreateReportBody>, res: Response): Promise<Response> {
    try {
      const newReport = await ReportsService.createReport(req.body);
      return res.status(201).json(newReport);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating report', error });
    }
  }

  public async updateReport(req: Request<{}, {}, IUpdateReportBody>, res: Response): Promise<Response> {
    try {
      const updatedReport = await ReportsService.updateReport(req.body);
      return res.status(200).json(updatedReport);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating report', error });
    }
  }

  public async deleteReport(req: Request<{}, {}, IDeleteReportBody>, res: Response): Promise<Response> {
    try {
      await ReportsService.deleteReport(req.body.reportId);
      return res.status(200).json({ message: 'Report deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting report', error });
    }
  }
}

export default new ReportsController();
