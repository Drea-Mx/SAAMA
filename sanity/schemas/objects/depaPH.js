export default {
    name: 'depaPH',
    title: 'Depa PH',
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
            name: 'plantaAlta',
            title: 'Planta Alta',
            type: 'image'
        },
        {
            name: 'plantaBaja',
            title: 'Planta Baja',
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
            name:'interiorPlantaAlta',
            title: 'Interior planta alta',
            type: 'string'
        },
        {
            name:'terraza1PlantaAlta',
            title: 'Terraza 1 planta alta',
            type: 'string'
        },
        {
            name:'terraza2PlantaAlta',
            title: 'Terraza 2 planta alta',
            type: 'string'
        },
        {
            name:'interiorPlantaBaja',
            title: 'Interior planta baja',
            type: 'string'
        },
        {
            name:'terraza1PlantaBaja',
            title: 'Terraza 1 planta baja',
            type: 'string'
        },
        {
            name:'terraza2PlantaBaja',
            title: 'Terraza 2 planta baja',
            type: 'string'
        },
        {
            name:'estacionamiento',
            title: 'Estacionamiento',
            type: 'string'
        },
        {
            name:'bodega',
            title: 'Bodega',
            type: 'string'
        },
        {
            name:'piscina',
            title: 'Piscina',
            type: 'string'
        },
        {
            name:'m2Habitables',
            title: 'M2 Habitables',
            type: 'string'
        },
        {
            name:'noTechados',
            title: 'No Techados',
            type: 'string'
        },
        
        
    ]
}