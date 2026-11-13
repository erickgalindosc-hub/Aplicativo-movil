
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.contenedor}>
        <Text style={styles.etiqueta}>MI TRAYECTORIA</Text>
        <Text style={styles.titulo}>Experiencia y proyectos</Text>
        <Text style={styles.subtitulo}>
          Proyectos académicos y experiencias de aprendizaje.
        </Text>

        <TarjetaExperiencia
          cargo="Desarrollador en formación"
          empresa="Proyecto académico SENA - VEXTOR"
          periodo="2026"
          descripcion="Participación en el desarrollo de una solución
de gestión de transporte, trabajando con tecnologías como React,
FastAPI y bases de datos PostgreSQL."
        />

        <TarjetaExperiencia
          cargo="Desarrollador de aplicaciones"
          empresa="Proyectos personales y académicos"
          periodo="2025 - Actualidad"
          descripcion="Práctica de programación mediante proyectos
con Python, JavaScript, desarrollo web, bases de datos y herramientas
de desarrollo de software."
        />

        <View style={styles.nota}>
          <Text style={styles.notaTexto}>
            Estas experiencias corresponden a proyectos de formación
            y desarrollo personal, no a empleos formales.
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
    fontSize: 24,
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
    backgroundColor: '#FFF1E6',
    padding: 15,
    borderRadius: 12,
  },
  notaTexto: {
    color: '#9A3412',
    fontSize: 12,
    lineHeight: 19,
  },
});
