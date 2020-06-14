const requestHandler = async (req, res) => {
  const body = {};

  if (res.locals.data || res.locals.data === false) body.data = res.locals.data;

  res.status(res.locals.status || 200).json(body);
};

export default requestHandler;
