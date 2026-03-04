export const onRequest: PagesFunction = async (request) =>
{
    const response = await request.next();
    console.log("Middleware Headers:");
    console.log(response.headers);
    response.headers.append("X-Middleware-Headers", "1");
    return response;
};
