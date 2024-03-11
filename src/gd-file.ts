export type GdFile = {
  className: string;
  properties: GdProperty[];
};

export type GdProperty = {
  name: string;
  type: string;
  intial?: string;
};
