
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MiBoton from '../components/MiBoton';

export default function Inicio() {
  const correo = 'TU_CORREO@gmail.com';
  const telefono = 'TU_NUMERO';
  const github = 'https://github.com/TU_USUARIO';

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.contenedor}>
        <View style={styles.encabezado}>
          <Text style={styles.etiqueta}>HOJA DE VIDA DIGITAL</Text>

          <View style={styles.avatar}>
            <Ionicons name="person" size={55} color="#F97316" />
          </View>

          <Text style={styles.nombre}>
            Erick Santiago Galindo Cepeda
          </Text>

          <Text style={styles.profesion}>
            Tecnólogo en Análisis y Desarrollo de Software
          </Text>

          <View style={styles.estado}>
            <View style={styles.punto} />
            <Text style={styles.textoEstado}>Formación en curso</Text>
          </View>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Sobre mí</Text>
          <Text style={styles.descripcion}>
            Aprendiz del SENA en el área de desarrollo de software,
            con conocimientos en programación, bases de datos y
            desarrollo de aplicaciones. Me interesa crear soluciones
            tecnológicas, aprender nuevas herramientas y fortalecer
            mis habilidades como desarrollador.
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Mis habilidades</Text>

          <View style={styles.habilidades}>
            {[
              'Python',
              'JavaScript',
              'SQL',
              'Unity',
              'Bases de datos',
              'Git',
              'Desarrollo de software',
            ].map((habilidad) => (
              <View key={habilidad} style={styles.chip}>
                <Text style={styles.textoChip}>{habilidad}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Contacto</Text>

          <MiBoton
            titulo="Enviar correo"
            icono="mail-outline"
            onPress={() => Alert.alert('Correo electrónico', correo)}
          />

          <MiBoton
            titulo="Mi teléfono"
            icono="call-outline"
            onPress={() => Alert.alert('Teléfono', telefono)}
          />

          <MiBoton
            titulo="Mi GitHub"
            icono="logo-github"
            onPress={() => Alert.alert('Repositorio GitHub', github)}
          />
        </View>

        <Text style={styles.pie}>
          © 2026 Erick Santiago · Hoja de vida digital
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  contenedor: {
    padding: 20,
    paddingBottom: 35,
  },
  encabezado: {
    backgroundColor: '#172554',
    borderRadius: 22,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  etiqueta: {
    color: '#FDBA74',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 20,
  },
  avatar: {
    width: 105,
    height: 105,
    backgroundColor: '#FFFFFF',
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  nombre: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profesion: {
    color: '#CBD5E1',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  estado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17,
    backgroundColor: '#263B69',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 20,
  },
  punto: {
    width: 8,
    height: 8,
    backgroundColor: '#4ADE80',
    borderRadius: 5,
    marginRight: 8,
  },
  textoEstado: {
    color: '#FFFFFF',
    fontSize: 11,
  },
  seccion: {
    backgroundColor: '#FFFFFF',
    padding: 19,
    borderRadius: 17,
    marginBottom: 16,
  },
  tituloSeccion: {
    color: '#172554',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 13,
  },
  descripcion: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 23,
  },
  habilidades: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#FFF1E6',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 20,
  },
  textoChip: {
    color: '#C2410C',
    fontSize: 12,
    fontWeight: '600',
  },
  pie: {
    color: '#94A3B8',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 10,
  },
});
