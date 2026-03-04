export const onRequest: PagesFunction = async (request) =>
{
    const response = new Response("Hello!");
    response.headers.append("X-Function-Headers", "1");
    console.log("Function Headers:");
    console.log(response.headers);
    return response;
};
