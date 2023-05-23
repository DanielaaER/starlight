import React, { useState } from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from '@react-pdf/renderer';

import 'typeface-poppins';
import Barcode from 'react-barcode';

Font.register({
  family: 'Poppins',
  fonts: [
    { src: 'ruta/a/poppins-regular.ttf', fontWeight: 'normal' },
    { src: 'ruta/a/poppins-bold.ttf', fontWeight: 'bold' },
  ],
});

const styles = StyleSheet.create({
  page: {
    family: 'Poppins',

    fontSize: 12,
    padding: '1cm',
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
    marginTop: '0.5cm',
    marginBottom: '0.1cm',
  },
  text: {
    fontSize: 11,
    marginTop: '0.2cm',
  },
  section: {
    marginTop: '0.5cm',
  },
  header: {
    fontSize: 8,
    marginBottom: '0.5cm',
    left: '0cm',
    right: '0cm',
  },

  important: {
    fontSize: 10,
    marginBottom: '0.5cm',
    marginTop: '0.5cm',
    marginLeft: '1cm',
  },
  sectionimportant: {
    marginTop: '0.5cm',
    border: '0.8 solid blue',
  },

  instructions: {
    fontSize: 10,
    marginBottom: '0.5cm',
    marginTop: '0.5cm',
  },
  etiqeuta: {
    fontSize: 10,
    marginBottom: '0.5cm',
  },
  bulletList: {
    marginTop: '0cm',
    marginLeft: '1cm',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: '0.2cm',
  },
  bullet: {
    width: '0.5cm',
    fontSize: 10,
  },
  listItemText: {
    fontSize: 10,
    marginRight: '1cm',
  },
  footer: {
    position: 'absolute', // Establecer posición absoluta para que el footer se fije en la parte inferior
    bottom: '1cm',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'justify',
    marginTop: '0.5cm',
    marginLeft: '1cm',
    left: '0cm',
    right: '0cm',
  },
  shippingLabel: {
    backgroundColor: 'white',
    padding: '0.3cm',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
    position: 'relative',
    borderStyle: 'dashed', // Agregar línea punteada
    borderLeftWidth: 1, // Ancho de la línea punteada
    marginLeft: '1cm', // Margen izquierdo
    paddingLeft: '0.5cm', // Espacio a la izquierda del contenido
  },
  stripePattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(to right, black 0.2cm, transparent 0.2cm)',
    backgroundSize: '0.4cm 100%',
  },
  labelContent: {
    marginBottom: '0.5cm',
  },
  labelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '0.3cm',
  },
  labelAddress: {
    fontSize: 12,
    lineHeight: 16,
  },
  ImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
  },
  table: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000', paddingBottom: 5 },
  firstCell: { flexGrow: 3, padding: 3 }, // Adjusted flexGrow value for the first column
  secondCell: { flexGrow: 1, padding: 2 }, // Adjusted flexGrow value for the second column
});

const Header = () => (
  <View style={styles.header}>
    <Text>starlight.com - Centro de devoluciones                                                                             https://starlight.com/account/devolucion/ed4eeab3-d08b-4339-96</Text>
  </View>
);



const ShippingLabel = ({ address, client }) => (
  <View style={styles.shippingLabel}>
    <View style={styles.stripePattern} />

    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.subtitle}>Remitente:</Text>
        <Text style={styles.text}>{client}</Text>
        <Text style={styles.text}>{address.address}</Text>
        <Text style={styles.text}>{address.city} {address.estate} {address.cp} {address.country}</Text>
        <Text style={styles.text}>{address.telephone}</Text>

        <Text style={styles.subtitle}>Destinatario:</Text>
        <Text style={styles.text}>Starlight, Avenida 5, 24</Text>
        <Text style={styles.text}>Cordoba, Veracruz, 94190, México </Text>
        <Text style={styles.text}>REF:REF_STARLIGHT</Text>


      </View>

      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Image style={styles.image} src="https://cdn.discordapp.com/attachments/1082030358297591850/1109647624090431620/logo-1_2.png" />
        <br></br>

        <View style={{ flex: 1, padding: "1cm", alignItems: 'center' }}>
          <Text style={styles.title}>LOGÍSTICA</Text>
          <Text style={styles.title}>INVERSA</Text>
        </View>
      </View>


    </View>
    <Text style={styles.text}>.......................................................................................</Text>
    <Text style={styles.text}>STARLIGHT MX CO STARLIGHT LOGISTICA SRL</Text>
    <Text style={styles.text}>Observaciones:</Text>
    <Text style={styles.text}>.......................................................................................</Text>

    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 4 }}>
        <Text style={styles.text}>Código Bulto: ASJ66212GJAS1261BAS9F0AS</Text>

        <Text style={styles.text}></Text>
        <Image style={{ width: 280 }} src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-10/futuro-codigo-de-barras.png" />
      </View>

      <View style={{ flex: 1, right: '1cm', alignItems: 'flex-start' }}>
        <Text style={styles.text}>Bulto:</Text>
        <Text style={styles.text}>1 de 1 </Text>
        <Text style={styles.text}>Peso:</Text>
        <Text style={styles.text}>3 kgs</Text>
        <Text style={styles.text}>Peso vol:</Text>
        <Text style={styles.text}>0.85 kgs</Text>
        <Text style={styles.text}>Fecha Etiquetado:</Text>

        <Text style={styles.text}>13/06/2023</Text>
      </View>
    </View>
    <View style={{ justifyContent: 'center', left: '2cm' }}>
      <Text style={styles.text}>66212GJAS1261BAS9F0AS</Text>

      <Image style={{ width: 150 }} src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-10/futuro-codigo-de-barras.png" />
    </View>
  </View>
);



const ReturnReport = ({ product, shippingAddress, cliente }) => (

  <Document>
    <Page
      size="A4"
      style={styles.page}

    >
      <Header />
      <View>
        <View style={styles.sectionimportant}>
          <Text style={styles.important}>Todos los productos deben devolverse antes del 20/06/23</Text>
        </View>


        <Text style={styles.instructions}>Instrucciones adicionales para el envío del paquete:</Text>


        <View style={styles.bulletList}>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listItemText}>Imprime la autorización de devolución con el código de barras y la etiqueta de envío. Están diseñadas
              para ser imprimidas en formato A4.</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listItemText}>Empaqueta los productos cuidadosamente en su embalaje original si aún lo conservas</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listItemText}>Introduce la autorización de devolución (código de barras) en el paquete. Recorta la etiqueta de
              devolución y pégala en el exterior del mismo</Text>
          </View>
        </View>




        <Text style={styles.subtitle}>Etiqueta de devolucion</Text>
        <Text style={styles.etiqeuta}>Recorta esta etiqueta y pégala en el exterior del paquete que vas a devolver</Text>


        <ShippingLabel address={shippingAddress} client={cliente} />

      </View>
      <View style={styles.footer}>
        <Text style={styles.header} render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}                                                                                                                                                                                   Fecha: ${new Date().toLocaleString()}`
        }
          fixed
        />
      </View>
    </Page>


    <Page
      size="A4"
      style={styles.page}

    >
      <Header />
      <View>



        <Text style={styles.subtitle}>Etiqueta de autorizacion de devolucion</Text>
        <Text style={styles.etiqeuta}>Recorta esta etiqueta e introdúcela en el paquete que vas a devolverr</Text>
      </View>
      <View>
        <Text style={styles.text}>   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.subtitle}>66212GJAS1261BAS9F0AS</Text>

          <Image style={{ width: 300 }} src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-10/futuro-codigo-de-barras.png" />
        </View>
        <View>
          <View style={styles.table}>
            <Text style={styles.firstCell}>Descripcion del producto</Text>
            <Text style={styles.secondCell}>Cantidad:</Text>
          </View>
          <View style={styles.table}>
            <Text style={styles.firstCell}>{product.name}</Text>


            <View style={styles.secondCell}>
              <Text>{product.quantity}</Text>
            </View>
          </View>

        </View>

      </View>


      <View style={styles.footer}>
        <Text style={styles.header} render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}                                                                                                                                                                                   Fecha: ${new Date().toLocaleString()}`
        }
          fixed
        />
      </View>
    </Page>
  </Document>
);

export default ReturnReport;