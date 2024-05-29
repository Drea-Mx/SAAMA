export default {
    //
    name: 'amenidadesPage',
    title: 'Amenidades',
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
            name: 'imagenAmenidades',
            title: 'Imagen Amenidades',
            type: 'imageType'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }


    ],
}