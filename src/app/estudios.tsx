import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

const Estudios = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="phone-portrait-outline" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Pepito Pérez Gómez</Text>
        <Text style={estilos.subtitulo}>Estudios</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaEstudio
          titulo="Bachiller"
          institucion="Institución Educativa Municipal"
          anio={2015}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Técnico"
          institucion="Colegio ABC"
          anio={2015}
          enCurso={false}
        />
        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA"
          anio={2025}
          enCurso={true}
        />
      </View>
    </ScrollView>
  );
};

export default Estudios;

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