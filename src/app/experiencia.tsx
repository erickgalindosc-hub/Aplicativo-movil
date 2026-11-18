
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const C = {
  background: "#101827",
  card: "#1B2940",
  orange: "#FF8C00",
  white: "#F7F8FA",
  muted: "#9AA8BC",
  border: "#2A3A53",
};

const actividades = [
  {
    titulo: "Desarrollo de aplicaciones móviles",
    tipo: "FORMACIÓN Y PRÁCTICA",
    descripcion:
      "Construcción de interfaces móviles, organización de componentes y navegación utilizando React Native y Expo.",
    icono: "phone-portrait-outline" as const,
  },
  {
    titulo: "Desarrollo de software",
    tipo: "PROYECTOS ACADÉMICOS",
    descripcion:
      "Aplicación de lógica de programación, estructuración de soluciones y trabajo con diferentes tecnologías.",
    icono: "code-slash-outline" as const,
  },
  {
    titulo: "Bases de datos",
    tipo: "CONOCIMIENTOS TÉCNICOS",
    descripcion:
      "Práctica con bases de datos relacionales, consultas SQL y organización de información.",
    icono: "server-outline" as const,
  },
  {
    titulo: "Desarrollo de videojuegos",
    tipo: "PROYECTOS PERSONALES",
    descripcion:
      "Exploración de mecánicas de juego, programación y desarrollo de experiencias interactivas.",
    icono: "game-controller-outline" as const,
  },
];

export default function Experiencia() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>MI RECORRIDO</Text>
      <Text style={styles.heading}>Experiencia y proyectos</Text>
      <Text style={styles.description}>
        Conocimientos y experiencias prácticas que he desarrollado durante
        mi formación en tecnología.
      </Text>

      <View style={styles.notice}>
        <Ionicons
          name="information-circle-outline"
          size={22}
          color={C.orange}
        />
        <Text style={styles.noticeText}>
          Esta sección presenta formación y práctica en proyectos; no
          corresponde a empleos formales.
        </Text>
      </View>

      {actividades.map((item, index) => (
        <View key={item.titulo} style={styles.card}>
          <View style={styles.timeline}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icono} size={24} color={C.orange} />
            </View>
            {index !== actividades.length - 1 && (
              <View style={styles.timelineLine} />
            )}
          </View>

          <View style={styles.info}>
            <Text style={styles.type}>{item.tipo}</Text>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.descriptionCard}>
              {item.descripcion}
            </Text>
          </View>
        </View>
      ))}

      <View style={styles.bottomCard}>
        <Ionicons name="trending-up-outline" size={25} color={C.orange} />
        <Text style={styles.bottomText}>
          En constante aprendizaje, buscando nuevos retos y oportunidades
          para aplicar mis conocimientos.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.background },
  content: { padding: 20, paddingBottom: 35 },
  label: {
    color: C.orange,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "800",
    marginTop: 8,
  },
  heading: {
    color: C.white,
    fontSize: 26,
    fontWeight: "800",
    marginTop: 7,
  },
  description: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 18,
  },
  notice: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#332B25",
    borderColor: "#72502C",
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    marginBottom: 20,
  },
  noticeText: {
    color: "#E5C9A6",
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
  },
  card: {
    flexDirection: "row",
    backgroundColor: C.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
    marginBottom: 13,
    gap: 14,
  },
  timeline: { alignItems: "center", width: 45 },
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#332B25",
    alignItems: "center",
    justifyContent: "center",
  },
  timelineLine: {
    width: 2,
    flex: 1,
    minHeight: 35,
    backgroundColor: "#4A5362",
    marginTop: 8,
  },
  info: { flex: 1 },
  type: {
    color: C.orange,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 7,
  },
  title: {
    color: C.white,
    fontSize: 16,
    fontWeight: "800",
    lineHeight: 22,
  },
  descriptionCard: {
    color: C.muted,
    fontSize: 12,
    lineHeight: 19,
    marginTop: 8,
  },
  bottomCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: C.border,
  },
  bottomText: {
    color: "#C2CCDA",
    fontSize: 12,
    lineHeight: 19,
    flex: 1,
  },
});
