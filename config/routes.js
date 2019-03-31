var routes = [
	{path: "/", controller: "pages_controller"},
	{path: "/subscribers", controller: "subscribers_controller"},
	{path: "/c29afd5f57ab4232e54156f66b833ac9460936579dd53cd602fe5805010adee6c0512f9b", controller: "prizes_controller"}
]

exports.activate = function(app){
	routes.forEach(function(route) {
		controller = require("../controllers/" + route.controller)
		app.use(route.path, controller);
	});	
}
