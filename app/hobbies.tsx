
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TarjetaHobby from '../components/TarjetaHobby';

export default function Hobbies() {
  const mostrarDetalle = (titulo: string, detalle: string) => {
    Alert.alert(titulo, detalle, [{ text: 'Entendido' }]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.contenedor}>
        <Text style={styles.etiqueta}>TIEMPO LIBRE</Text>
        <Text style={styles.titulo}>Mis intereses</Text>
        <Text style={styles.subtitulo}>
          Actividades que disfruto y que hacen parte de mi vida.
        </Text>

        <TarjetaHobby
          titulo="Videojuegos"
          descripcion="Jugar y descubrir nuevos videojuegos."
          icono="game-controller-outline"
          onPress={() => mostrarDetalle(
            'Videojuegos',
            'Me gusta jugar videojuegos, explorar mundos virtualesy conocer nuevas experiencias de juego.'
          )}
        />

        <TarjetaHobby
          titulo="Programación"
          descripcion="Crear proyectos y aprender tecnologías."
          icono="code-slash-outline"
          onPress={() => mostrarDetalle(
            'Programación',
            'Disfruto desarrollar aplicaciones, resolver problemasy experimentar con diferentes lenguajes de programación.'
          )}
        />

        <TarjetaHobby
          titulo="Tecnología"
          descripcion="Conocer herramientas y novedades tecnológicas."
          icono="hardware-chip-outline"
          onPress={() => mostrarDetalle(
            'Tecnología',
            'Me interesa aprender sobre hardware, software,inteligencia artificial y nuevas herramientas digitales.'
          )}
        />

        <TarjetaHobby
          titulo="Música"
          descripcion="Escuchar música en mi tiempo libre."
          icono="musical-notes-outline"
          onPress={() => mostrarDetalle(
            'Música',
            'Disfruto escuchar música para relajarme y acompañarmis actividades diarias.'
          )}
        />

        <TarjetaHobby
          titulo="Aprendizaje"
          descripcion="Investigar y adquirir nuevos conocimientos."
          icono="book-outline"
          onPress={() => mostrarDetalle(
            'Aprendizaje',
            'Me gusta investigar, estudiar y fortalecer misconocimientos para crecer personal y profesionalmente.'
          )}
        />
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
});
