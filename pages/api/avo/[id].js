import DB from "database/db";

const allAvos = async (request, response) => {
  const db = new DB();
  const {
    query: { id },
  } = request;
  const item = await db.getById(id);

  response.statusCode = 200;
  response.setHeader("Context-type", "application/json");
  response.end(JSON.stringify({ data: item }));
};

export default allAvos;
