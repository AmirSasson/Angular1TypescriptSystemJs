System.config({
    baseURL: "/",
    defaultJSExtensions: true,
    transpiler: "typescript",
    paths: {
        "npm:*": "node_modules/*"
    },

    map: {
        "angular-ui-router": "npm:angular-ui-router/release/angular-ui-router.js",
        "angular": "npm:angular/angular.js",
        "components": "./app/components/some-component",
        "typescript": "npm:typescript/lib/typescript.js"
    },
    meta: {
        'angular-ui-router': {
            "deps": [
                "angular"
            ]
        },
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    }
});