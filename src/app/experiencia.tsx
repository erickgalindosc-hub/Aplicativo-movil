import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const Experiencia = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Ionicons name="briefcase" size={80} color="#2563eb" />
        <Text style={estilos.nombre}>Pepito Pérez Gómez</Text>
        <Text style={estilos.subtitulo}>Experiencia Laboral</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaExperiencia
          cargo="Desarrollador Junior (Práctica)"
          empresa="Empresa Tecnológica XYZ"
          periodo="Enero 2026 - Actualidad"
          descripcion="Desarrollo de aplicaciones móviles con React Native y consumo de APIs REST."
        />
        <TarjetaExperiencia
          cargo="Soporte Técnico"
          empresa="Soluciones Informáticas ABC"
          periodo="2023 - 2024"
          descripcion="Mantenimiento de equipos, instalación de software y atención a usuarios."
        />
        <TarjetaExperiencia
          cargo="Auxiliar Administrativo"
          empresa="Comercial Los Andes"
          periodo="2021 - 2022"
          descripcion="Manejo de inventarios, facturación y atención al cliente."
        />
      </View>
    </ScrollView>
  );
};

export default Experiencia;

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