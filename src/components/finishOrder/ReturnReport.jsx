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
        <Text style={styles.subtitle}>Destinatario:</Text>
        <Text style={styles.text}>{client}</Text>
        <Text style={styles.text}>{address.address}</Text>
        <Text style={styles.text}>{address.city} {address.estate} {address.cp} {address.country}</Text>
        <Text style={styles.text}>{address.telephone}</Text>


      </View>

      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Image style={styles.image} src="https://cdn.discordapp.com/attachments/1082030358297591850/1109647624090431620/logo-1_2.png" />
        <br></br>
      </View>


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

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.subtitle}>Destinatario:</Text>
            <Text style={styles.text}>{cliente}</Text>
            <Text style={styles.text}>{shippingAddress.address}</Text>
            <Text style={styles.text}>{shippingAddress.city} {shippingAddress.estate} {shippingAddress.cp} {shippingAddress.country}</Text>
            <Text style={styles.text}>{shippingAddress.telephone}</Text>


          </View>

          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Image style={styles.image} src="https://cdn.discordapp.com/attachments/1082030358297591850/1109647624090431620/logo-1_2.png" />
            <br></br>
          </View>


        </View>
        <View>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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