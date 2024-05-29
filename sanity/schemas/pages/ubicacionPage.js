export default {
    //
    name: 'ubicacionPage',
    title: 'Ubicación',
    type: 'document',
    icon: () => '📝',
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'headline1',
            title: 'Headline 1',
            type: 'string'
        },
        {
            name: 'headline2',
            title: 'Headline 2',
            type: 'string'
        },
        {
            name: 'puntosDeInteres',
            title: 'Puntos de Interés',
            type: 'array',
            of: [
                {
                    name: 'punto',
                    title: 'Punto',
                    type: 'string'
                }
            ]
        },
        {
            name: 'mapa',
            title: 'Mapa link',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageType'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}