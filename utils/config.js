import { createClient } from "@rocketgraphql/rocketgraph-js-sdk";
import Cookies from 'js-cookie';

const config = {
  baseURL: "https://backend-L4UPPPG.rocketgraph.app/api",
};

const { auth } = createClient(config);

export { auth };
