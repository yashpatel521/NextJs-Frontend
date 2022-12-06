const APIurl = "http://localhost:5000";

export const GETAPI = async (URL: string) => {
  const res = await fetch(`${APIurl}${URL}`);
  const data = await res.json();

  return data;
};

export type responseData = {
  statusCode: number;
  success: boolean;
  data: any;
};
