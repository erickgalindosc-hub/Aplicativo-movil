
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

const estudios = [
  {
    titulo: "Tecnólogo en Análisis y Desarrollo de Software",
    institucion: "Servicio Nacional de Aprendizaje - SENA",
    periodo: "En formación",
    estado: "EN CURSO",
    icono: "code-slash" as const,
  },
  {
    titulo: "Técnico en Programación de Software",
    institucion: "Servicio Nacional de Aprendizaje - SENA",
    periodo: "2025",
    estado: "FINALIZADO",
    icono: "laptop-outline" as const,
  },
];

export default function Estudios() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.label}>MI TRAYECTORIA</Text>
      <Text style={styles.heading}>Formación académica</Text>
      <Text style={styles.description}>
        Mi proceso de aprendizaje y preparación en el área de desarrollo de
        software.
      </Text>

      {estudios.map((item, index) => (
        <View key={item.titulo} style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icono} size={25} color={C.orange} />
            </View>
            <View
              style={[
                styles.badge,
                index === 0 ? styles.activeBadge : styles.doneBadge,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  index === 0 ? styles.activeText : styles.doneText,
                ]}
              >
                {item.estado}
              </Text>
            </View>
          </View>

          <Text style={styles.title}>{item.titulo}</Text>
          <Text style={styles.institution}>{item.institucion}</Text>

          <View style={styles.divider} />

          <View style={styles.period}>
            <Ionicons
              name="calendar-outline"
              size={16}
              color={C.orange}
            />
            <Text style={styles.periodText}>{item.periodo}</Text>
          </View>
        </View>
      ))}

      <View style={styles.note}>
        <Ionicons
          name="rocket-outline"
          size={22}
          color={C.orange}
        />
        <Text style={styles.noteText}>
          Mi objetivo es seguir fortaleciendo mis conocimientos y crecer
          profesionalmente en el sector tecnológico.
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: C.card,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: C.border,
    padding: 18,
    marginBottom: 15,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 17,
  },
  iconBox: {
    width: 49,
    height: 49,
    borderRadius: 15,
    backgroundColor: "#332B25",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  activeBadge: { backgroundColor: "#49351F" },
  doneBadge: { backgroundColor: "#263B3A" },
  badgeText: { fontSize: 9, fontWeight: "800", letterSpacing: 0.5 },
  activeText: { color: C.orange },
  doneText: { color: "#A5E6C8" },
  title: {
    color: C.white,
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 23,
  },
  institution: {
    color: C.muted,
    fontSize: 13,
    marginTop: 8,
    lineHeight: 19,
  },
  divider: {
    height: 1,
    backgroundColor: C.border,
    marginVertical: 15,
  },
  period: { flexDirection: "row", alignItems: "center", gap: 8 },
  periodText: { color: "#D4DCE7", fontSize: 12, fontWeight: "600" },
  note: {
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
  noteText: {
    color: "#C2CCDA",
    fontSize: 12,
    lineHeight: 19,
    flex: 1,
  },
});
