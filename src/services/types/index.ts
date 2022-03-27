export interface IDataUsers {
  id: number;
  email: string | null;
  avatar: string;
  last_name: string;
  first_name: string;
}

export interface IUsers {
  users: IDataUsers[];
  total_pages: number;
  page: number;
  userid: number | null;
  user: Partial<IDataUsers>;
}

export interface ISUser {
  users: IDataUsers[];
  total_pages: number;
}

export interface IProfile {
  profile: Partial<IDataUsers>;
  token: string | null;
  id: number | string | null;
}

export interface IFormProps {
  email: string;
  password: string;
}
