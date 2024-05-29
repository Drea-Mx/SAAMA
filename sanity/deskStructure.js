// deskStructure.js Reference -> Angular

export default (S) =>
  S.list()
    .title('General')
    .items([
        S.listItem()
          .title('Global Page')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('globalPage')
              .documentId('globalPage')
        ),
        S.listItem()
          .title('Home Page')
          .icon(() => '🏡')
          .child(
            S.document()
              .schemaType('homePage')
              .documentId('homePage')
        ),
        S.listItem()
          .title('Concepto')
          .icon(() => '📝')
          .child(
            S.document()
              .schemaType('conceptoPage')
              .documentId('conceptoPage')
        ),
        S.listItem()
          .title('Ubicacion')
          .icon(() => '🌏')
          .child(
            S.document()
              .schemaType('ubicacionPage')
              .documentId('ubicacionPage')
        ),
        S.listItem()
          .title('Numeralia')
          .icon(() => '📚')
          .child(
            S.document()
              .schemaType('numeraliaPage')
              .documentId('numeraliaPage')
        ),
        S.listItem()
          .title('Amenidades')
          .icon(() => '🎡')
          .child(
            S.document()
              .schemaType('amenidadesPage')
              .documentId('amenidadesPage')
        ),
        S.listItem()
          .title('Galería')
          .icon(() => '🏞️')
          .child(
            S.document()
              .schemaType('galeriaPage')
              .documentId('galeriaPage')
        ),
        S.listItem()
          .title('Cotizador')
          .icon(() => '💵')
          .child(
            S.document()
              .schemaType('financiamientoPage')
              .documentId('financiamientoPage')
        ),
        S.listItem()
          .title('Contacto')
          .icon(() => '☎️')
          .child(
            S.document()
              .schemaType('contactoPage')
              .documentId('contactoPage')
        ),
        ...S.documentTypeListItems().filter(listItem => !['globalPage', 'homePage', 'conceptoPage', 'ubicacionPage', 'numeraliaPage', 'amenidadesPage', 'galeriaPage', 'financiamientoPage', 'contactoPage'].includes(listItem.getId()))
    ])