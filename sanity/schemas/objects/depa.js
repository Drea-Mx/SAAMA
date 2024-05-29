export default {
    name: 'depa',
    title: 'Depa',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
        modal: {type: 'popover'} //Makes the modal type a popover
      },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'disponible',
            title: 'Disponible',
            type: 'boolean'
        },
        {
            name: 'precio',
            title: 'Precio',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'areas',
            title: 'Áreas',
            type: 'array',
            of: [
                {
                    name: 'area',
                    title: 'Área',
                    type: 'string'
                }
            ]
        },
        {
            name: 'nivel',
            title: 'Nivel',
            type: 'string'
        },
        {
            name:'interior',
            title: 'Interior',
            type: 'string'
        },
        {
            name:'terraza',
            title: 'Terraza',
            type: 'string'
        },
        {
            name:'piscina',
            title: 'Piscina',
            type: 'string'
        },
        {
            name:'terraza2',
            title: 'Terraza 2',
            type: 'string'
        },
        {
            name:'jacuzzi',
            title: 'Jacuzzi',
            type: 'string'
        },
        {
            name:'bodega',
            title: 'Bodega',
            type: 'string'
        },
        {
            name:'estacionamiento',
            title: 'Estacionamiento',
            type: 'string'
        },
        {
            name:'m2Habitables',
            title: 'm2 habitables',
            type: 'string'
        },
        
    ]
}