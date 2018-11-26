module.exports.sair = (application, request, response) =>{
    console.log("SAIR")
    request.session.destroy(function (err) {
        response.render("/home/index")
    });

};