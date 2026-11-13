import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

const hobbies = [
  {
    nombre: "Videojuegos",
    icono: "game-controller-outline" as const,
    descripcion: "Me gusta jugar en mis tiempos libres.",
    detalle:
      "Juego videojuegos de estrategia y aventura desde hace más de 5 años, y también me interesa cómo se desarrollan.",
  },
  {
    nombre: "Música",
    icono: "musical-notes-outline" as const,
    descripcion: "Escuchar y descubrir nuevos artistas.",
    detalle:
      "Escucho música mientras programo. Mis géneros favoritos son el rock, el pop y la música electrónica.",
  },
  {
    nombre: "Deporte",
    icono: "football-outline" as const,
    descripcion: "Fútbol los fines de semana.",
    detalle:
      "Juego fútbol con amigos cada sábado. Me ayuda a desconectarme y a trabajar en equipo.",
  },
  {
    nombre: "Lectura",
    icono: "book-outline" as const,
    descripcion: "Libros de tecnología y ciencia ficción.",
    detalle:
      "Leo libros de programación, desarrollo personal y ciencia ficción para aprender y relajarme.",
  },
];

const Hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="heart" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Pepito Pérez Gómez</Text>
        <Text style={estilos.subtitulo}>Intereses / Hobbies</Text>
      </View>

      <View style={estilos.seccion}>
        {hobbies.map((hobby) => (
          <TarjetaHobby
            key={hobby.nombre}
            nombre={hobby.nombre}
            icono={hobby.icono}
            descripcion={hobby.descripcion}
            onPress={() => Alert.alert(hobby.nombre, hobby.detalle)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  subtitulo: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 1,
  },
});