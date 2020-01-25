const responseFormat = (
  msg: string | null,
  data: {} | null,
  errors: [] | null
): {} => {
  return { msg, data, errors };
};

export default responseFormat;
