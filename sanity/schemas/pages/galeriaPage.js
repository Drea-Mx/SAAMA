export default {
    //
    name: 'galeriaPage',
    title: 'Galeria',
    type: 'document',
    icon: () => '📝',
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'icono',
            title: 'Icono',
            type: 'imageType'
        },
        {
            name: 'galleria',
            title: 'Gallery',
            type: 'gallery'
        },
        
        
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}