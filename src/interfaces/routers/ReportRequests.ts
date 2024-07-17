export interface ICreateReportBody {
    newTitle: string;
    newContent: string;
    newAuthorId: number;
  }
  
  export interface IUpdateReportBody {
    reportId: number;
    newTitle: string;
    newContent: string;
  }
  
  export interface IDeleteReportBody {
    reportId: number;
  }
  