import schema from "../data/schema.json";
import Schema from "../types/Schema";

const getSchema = (): Schema => JSON.parse(JSON.stringify(schema));

export default getSchema;
