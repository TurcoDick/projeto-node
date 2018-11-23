module.exports = (application) =>{
    application.get("/login", (request, response) =>{
        response.send("LOGIN")
    });
};