const getHeader = (headerOptions?: {
  [key: string]: string;
}): { [key: string]: string } => {
  const _headerOptions: { [key: string]: string } = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_Token}`,
    ...headerOptions,
  };
  return _headerOptions;
};

export default getHeader;
