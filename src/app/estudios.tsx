
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.contenedor}>
        <Text style={styles.etiqueta}>MI FORMACIÓN</Text>
        <Text style={styles.titulo}>Estudios académicos</Text>
        <Text style={styles.subtitulo}>
          Mi trayectoria educativa y formación profesional.
        </Text>

        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="Servicio Nacional de Aprendizaje - SENA"
          periodo="2026 - Actualidad"
          descripcion="Formación en desarrollo de software, programación,
bases de datos, análisis de requerimientos y construcción de aplicaciones."
          enCurso={true}
        />

        <TarjetaEstudio
          titulo="Técnico en Programación de Software"
          institucion="Servicio Nacional de Aprendizaje - SENA"
          periodo="Finalizado en 2025"
          descripcion="Formación técnica en fundamentos de programación,
lógica computacional y desarrollo de soluciones de software."
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Educación básica y media"
          institucion="Completar institución educativa"
          periodo="Completar fechas"
          descripcion="Formación académica básica y media."
          enCurso={false}
        />

        <View style={styles.nota}>
          <Text style={styles.notaTexto}>
            Mi formación actual en el SENA está destacada con la
            insignia morada de En Curso.
          </Text>
        </View>
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
  },
  etiqueta: {
    color: '#F97316',
    fontWeight: 'bold',
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 10,
  },
  titulo: {
    color: '#172554',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subtitulo: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 8,
    marginBottom: 23,
  },
  nota: {
    padding: 15,
    backgroundColor: '#EDE9FE',
    borderRadius: 12,
    marginBottom: 20,
  },
  notaTexto: {
    color: '#5B21B6',
    fontSize: 12,
    lineHeight: 19,
  },
});
