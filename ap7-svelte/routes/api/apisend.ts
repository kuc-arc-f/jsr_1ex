const config = useRuntimeConfig();

export default defineEventHandler(async(event) => {
  const body = await readBody(event)
  console.log("userName=", config.userName);
  const url = config.apiUrl;
  const key = config.apiKey;
  body.api_key = key;
  //console.log(body);
  const targetPath = url + body.api_path;
  console.log("targetPath=", targetPath);

  const res = await fetch(targetPath, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},      
    body: JSON.stringify(body)
  });
  if (res.status !== 200) {
    console.error("Error, HTTP <> 200");
    event.node.res.statusCode = 400;
    return 'Bad Request';
  }        
  const resObj = await res.json();
  //return { hello: 'api-test3' }
  return resObj;
})
