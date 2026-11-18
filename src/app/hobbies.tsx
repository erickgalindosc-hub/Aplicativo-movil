
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

const intereses = [
  {
    nombre: "Videojuegos",
    descripcion:
      "Me interesa el mundo de los videojuegos, sus mecánicas y las experiencias interactivas.",
    icono: "game-controller-outline" as const,
  },
  {
    nombre: "Programación",
    descripcion:
      "Disfruto aprender tecnologías, experimentar con código y crear soluciones digitales.",
    icono: "code-slash-outline" as const,
  },
  {
    nombre: "Desarrollo de videojuegos",
    descripcion:
      "Me llama la atención diseñar sistemas de juego, personajes y mecánicas.",
    icono: "rocket-outline" as const,
  },
  {
    nombre: "Tecnología",
    descripcion:
      "Me gusta explorar herramientas, aplicaciones y novedades del mundo tecnológico.",
    icono: "hardware-chip-outline" as const,
  },
];

export default function Hobbies() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>UN POCO MÁS DE MÍ</Text>
      <Text style={styles.heading}>Intereses personales</Text>
      <Text style={styles.subtitle}>
        Actividades y temas que despiertan mi curiosidad y creatividad.
      </Text>

      <View style={styles.grid}>
        {intereses.map((item) => (
          <View key={item.nombre} style={styles.card}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icono} size={29} color={C.orange} />
            </View>

            <Text style={styles.title}>{item.nombre}</Text>

            <Text style={styles.description}>
              {item.descripcion}
            </Text>

            <View style={styles.cardLine} />
          </View>
        ))}
      </View>

      <View style={styles.quote}>
        <Ionicons name="bulb-outline" size={25} color={C.orange} />
        <Text style={styles.quoteText}>
          La curiosidad es el comienzo de cada gran idea. Siempre hay algo
          nuevo por aprender y construir.
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
  subtitle: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 22,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    width: "48%",
    flexGrow: 1,
    minHeight: 205,
    backgroundColor: C.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: C.border,
    padding: 15,
  },
  iconBox: {
    width: 49,
    height: 49,
    borderRadius: 15,
    backgroundColor: "#332B25",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  title: {
    color: C.white,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 8,
  },
  description: {
    color: C.muted,
    fontSize: 11,
    lineHeight: 17,
    flex: 1,
  },
  cardLine: {
    height: 3,
    width: 28,
    borderRadius: 3,
    backgroundColor: C.orange,
    marginTop: 15,
  },
  quote: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 16,
    padding: 16,
    marginTop: 22,
  },
  quoteText: {
    color: "#C2CCDA",
    fontSize: 12,
    lineHeight: 19,
    flex: 1,
  },
});
