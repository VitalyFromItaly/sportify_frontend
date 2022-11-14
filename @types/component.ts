export type TDataListRow = {
  left: string;
  right: string | number;
  type?: any;
};

export interface IForm {
  onValidate(): Promise<boolean>;
  onSubmit(): Promise<void>;
}

export type TStep = {
  routeName: string;
  name: string;
};
