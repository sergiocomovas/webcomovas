const config = {
    production: {
        name: 'squido',
        description: 'This is the blog description',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        templateEngine: 'hbs',
        templateConfig: {},
        sourceDir: 'source',
        buildDir: 'build',
<<<<<<< HEAD
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    },
    production: {
        name: 'COMOVAS |『CØMO』『VAS』.ES | ',
        description: '¿Cómo vas? Nosotros vamos tirando con NWO, GAMING, TECH, SALSEO, PODCASTS y mucho más...',
        twitterHandle: '@sergiocomovas',
        baseUrl: 'http://comovas.es',
        sourcesExt: 'markdown',
        templateEngine: 'hbs',
        templateConfig: {},
        sourceDir: 'source',
        buildDir: 'build',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8,
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
=======
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
    },
    development: {
        name: 'COMOVAS | 『CØMO』『VAS』.ES |',
        description: '¿Cómo vas? Nosotros vamos tirando con NWO, GAMING, TECH, SALSEO y PODCASTS',
        twitterHandle: '@sergiocomovas',
        baseUrl: 'https://web.comovas.es',
        sourcesExt: 'markdown',
        sourceDir: 'source',
        buildDir: 'docs',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 8
>>>>>>> 7011b9e312a236ec785c322ddc4f16dceedb5e0f
    }
};

module.exports = config;