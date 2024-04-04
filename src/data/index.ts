export interface BlogPost {
  contentTypeId: "tsdNews";
  fields: {
    newsTitle: string;
    newsDate: string;
    newsContent: string;
  };
  sys: {
    id: string;
  };
}
