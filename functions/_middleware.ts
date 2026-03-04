export const onRequest: PagesFunction = async (request) =>
{
    const response = await request.next();
    console.log("Middleware Headers:");
    console.log(JSON.stringify(Array.from(response.headers), null, 2));
    response.headers.append("X-Middleware-Headers", "1");
    return response;
};
