import ReportModel from '../database/models/ReportsModel';
import { ICreateReportBody, IUpdateReportBody } from '../interfaces/routers/ReportRequests';

class ReportsService {
  public async getAllReports(): Promise<ReportModel[]> {
    return await ReportModel.findAll();
  }

  public async createReport(reportData: ICreateReportBody): Promise<ReportModel> {
    return await ReportModel.create({
      title: reportData.newTitle,
      content: reportData.newContent,
      authorId: reportData.newAuthorId,
    });
  }

  public async updateReport(reportData: IUpdateReportBody): Promise<ReportModel | null> {
    const report = await ReportModel.findByPk(reportData.reportId);
    if (report) {
      report.title = reportData.newTitle;
      report.content = reportData.newContent;
      await report.save();
      return report;
    }
    return null;
  }

  public async deleteReport(reportId: number): Promise<void> {
    const report = await ReportModel.findByPk(reportId);
    if (report) {
      await report.destroy();
    }
  }
}

export default new ReportsService();
