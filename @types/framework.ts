type Dictionary<T> = { [key: string]: T };
export type TRawLocation = string | Location;

export type TLocation = {
  name?: string
  path?: string
  hash?: string
  query?: Dictionary<string | (string | null)[] | null | undefined>
  params?: Dictionary<string>
  append?: boolean
  replace?: boolean
};
