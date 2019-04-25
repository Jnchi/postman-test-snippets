// Extract x-auth-token and set as environment variable.
var headers = pm.response.headers.all()
for (var i = 0; i < headers.length; i++) {
    if (headers[i].key == 'x-auth-token') {
        pm.environment.set("x-auth-token", headers[i].value);
    }
}
