export type GdFile = {
  className: string;
  properties: GdProperty[];
  methods: GdMethod[];
};

export type GdProperty = {
  name: string;
  type: string;
  intial?: string;
};

export type GdMethod = {
  name: string;
  parameters: GdVarIdentifier[];
  returnType: string;
};

export type GdVarIdentifier = {
  name: string;
  type: string;
};
