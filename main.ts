import {MongoClient} from "mongodb";

//Acceso a las claves 
const MONGO_URL = Deno.env.get("MONGO_URL");
if(!MONGO_URL){
  console.log("MONGO_URL not set");
  Deno.exit(1);
}

//Conexion cliente con mongo
const client = new MongoClient(MONGO_URL);
await client.connect();
console.info("Connected to MongoDB");


//Información de mongo
const dbName = "parcialdb";
const db = client.db(dbName);
const personasCollection = db.collection("personas");

//hanlder y metodos
const handler = async (req:Request): Promise<Response> => {
  const method = req.method;
  const url = new URL(req.method);
  const path = url.pathname;

  if(method === "GET"){
    const nombre = url.searchParams.get("nombre");
    if(path === "/personas"){

    }
    else if(path === "/persona"){
      
    }

  }
  else if(method === "POST"){

  }
  else if(method === "PUT"){

  }
  else if(method === "DELETE"){

  }



  return new Response("Endpoint not defined", {status: 404});
};

Deno.serve({port:3000}, handler);