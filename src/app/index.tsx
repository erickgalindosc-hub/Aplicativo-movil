
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Linking,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from "react-native";

const C = {
  background: "#101827",
  card: "#1B2940",
  orange: "#FF8C00",
  white: "#F7F8FA",
  muted: "#9AA8BC",
  border: "#2A3A53",
};

const skills = [
  "JavaScript",
  "Python",
  "React Native",
  "SQL",
  "Git / GitHub",
  "Unity",
  "Scrum",
];

export default function Inicio() {
  const [shared, setShared] = useState(false);

  const compartirPerfil = async () => {
    try {
      await Share.share({
        title: "Perfil profesional - Erick Galindo",
        message:
          "Hola, soy Erick Santiago Galindo Cepeda, aprendiz de Tecnología en Análisis y Desarrollo de Software (ADSO) del SENA.\n\nConoce mis proyectos y código en GitHub:\nhttps://github.com/erickgalindosc-hub",
      });
      setShared(true);
    } catch (error) {
      console.log("Error al compartir el perfil:", error);
    }
  };

  const abrirGitHub = async () => {
    await Linking.openURL("https://github.com/erickgalindosc-hub");
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.topLine}>
          <Text style={styles.eyebrow}>PORTAFOLIO PROFESIONAL</Text>
          <View style={styles.status}>
            <View style={styles.dot} />
            <Text style={styles.statusText}>En formación</Text>
          </View>
        </View>

        <View style={styles.avatar}>
          <Ionicons name="code-slash" size={42} color={C.orange} />
        </View>

        <Text style={styles.name}>
          Erick Santiago{"\n"}Galindo Cepeda
        </Text>

        <Text style={styles.role}>
          Desarrollo de Software · ADSO
        </Text>

        <View style={styles.accentLine} />

        <Text style={styles.heroDescription}>
          Transformo ideas en soluciones digitales, combinando lógica,
          creatividad y tecnología.
        </Text>

        <Pressable
          onPress={compartirPerfil}
          style={({ pressed }) => [
            styles.shareButton,
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name="share-social-outline"
            size={19}
            color={C.background}
          />
          <Text style={styles.shareText}>
            {shared ? "Compartir nuevamente" : "Compartir mi perfil"}
          </Text>
        </Pressable>
      </View>

      <SectionTitle
        label="SOBRE MÍ"
        title="Perfil profesional"
      />

      <View style={styles.card}>
        <Text style={styles.body}>
          Soy aprendiz del SENA en el programa Tecnólogo en Análisis y
          Desarrollo de Software. Me interesa construir aplicaciones web y
          móviles, trabajar con bases de datos y explorar nuevas herramientas
          de desarrollo. Disfruto aprender, resolver problemas y convertir
          requerimientos en soluciones funcionales.
        </Text>
      </View>

      <SectionTitle
        label="HERRAMIENTAS"
        title="Tecnologías y habilidades"
      />

      <View style={styles.skillsContainer}>
        {skills.map((skill) => (
          <View key={skill} style={styles.skill}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>

      <SectionTitle
        label="CÓDIGO Y PROYECTOS"
        title="Explora mi trabajo"
      />

      <Pressable
        onPress={abrirGitHub}
        style={({ pressed }) => [
          styles.projectCard,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.projectIcon}>
          <Ionicons name="logo-github" size={27} color={C.orange} />
        </View>

        <View style={styles.projectInfo}>
          <Text style={styles.projectTitle}>Mi GitHub</Text>
          <Text style={styles.projectDescription}>
            Repositorios, prácticas y proyectos de desarrollo.
          </Text>
          <Text style={styles.projectLink}>
            github.com/erickgalindosc-hub ↗
          </Text>
        </View>

        <Ionicons
          name="arrow-up-outline"
          size={20}
          color={C.muted}
        />
      </Pressable>

      <View style={styles.footer}>
        <View style={styles.footerLine} />
        <Text style={styles.footerText}>
          Diseñado con intención · Desarrollado con React Native
        </Text>
        <Text style={styles.footerName}>ERICK GALINDO © 2026</Text>
      </View>
    </ScrollView>
  );
}

function SectionTitle({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <View style={styles.sectionTitle}>
      <Text style={styles.sectionLabel}>{label}</Text>
      <Text style={styles.sectionHeading}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: C.background,
  },
  content: {
    padding: 20,
    paddingBottom: 36,
  },
  hero: {
    backgroundColor: C.card,
    borderRadius: 26,
    padding: 24,
    borderWidth: 1,
    borderColor: C.border,
  },
  topLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },
  eyebrow: {
    color: C.muted,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "800",
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#263B3A",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#63D6A3",
  },
  statusText: {
    color: "#A5E6C8",
    fontSize: 10,
    fontWeight: "700",
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: "#332B25",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
    borderWidth: 1,
    borderColor: "#72502C",
  },
  name: {
    color: C.white,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "800",
    letterSpacing: -0.8,
  },
  role: {
    color: C.orange,
    fontSize: 14,
    fontWeight: "700",
    marginTop: 10,
  },
  accentLine: {
    width: 44,
    height: 3,
    borderRadius: 2,
    backgroundColor: C.orange,
    marginTop: 22,
    marginBottom: 16,
  },
  heroDescription: {
    color: "#C2CCDA",
    fontSize: 14,
    lineHeight: 22,
  },
  shareButton: {
    backgroundColor: C.orange,
    borderRadius: 13,
    paddingVertical: 14,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },
  shareText: {
    color: C.background,
    fontSize: 14,
    fontWeight: "800",
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }],
  },
  sectionTitle: {
    marginTop: 30,
    marginBottom: 14,
  },
  sectionLabel: {
    color: C.orange,
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "800",
    marginBottom: 6,
  },
  sectionHeading: {
    color: C.white,
    fontSize: 21,
    fontWeight: "800",
  },
  card: {
    backgroundColor: C.card,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: C.border,
  },
  body: {
    color: "#C2CCDA",
    fontSize: 14,
    lineHeight: 23,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },
  skill: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: "#34445B",
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  skillText: {
    color: "#E6EBF2",
    fontSize: 12,
    fontWeight: "700",
  },
  projectCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: C.card,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: C.border,
  },
  projectIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#332B25",
    alignItems: "center",
    justifyContent: "center",
  },
  projectInfo: {
    flex: 1,
  },
  projectTitle: {
    color: C.white,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },
  projectDescription: {
    color: C.muted,
    fontSize: 12,
    lineHeight: 18,
  },
  projectLink: {
    color: C.orange,
    fontSize: 11,
    fontWeight: "700",
    marginTop: 7,
  },
  footer: {
    alignItems: "center",
    marginTop: 34,
    gap: 10,
  },
  footerLine: {
    width: 42,
    height: 2,
    backgroundColor: C.orange,
    marginBottom: 5,
  },
  footerText: {
    color: C.muted,
    fontSize: 11,
    textAlign: "center",
  },
  footerName: {
    color: "#65748A",
    fontSize: 9,
    letterSpacing: 2,
    fontWeight: "800",
  },
});
