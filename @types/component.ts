export type TDataListRow = {
  left: string;
  right: string | number;
  type?: any;
};

export interface IForm {
  onSubmit(): Promise<boolean>;
}
