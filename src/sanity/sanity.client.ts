import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  apiVersion: "2023-07-16",
  useCdn: false,

  projectId: "ifclduo9",
  dataset: "production",
};

const client = createClient(config);

export default client;
