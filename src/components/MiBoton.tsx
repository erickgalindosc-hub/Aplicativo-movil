import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton?: string;
  onPress: () => void;
};

const MiBoton = ({
  textoBoton,
  nombreIcono,
  colorBoton = "#2563eb",
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        estilos.boton,
        { backgroundColor: colorBoton },
        pressed && estilos.presionado,
      ]}
    >
      <Ionicons name={nombreIcono} size={20} color="#fff" />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </Pressable>
  );
};

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
    gap: 8,
  },
  presionado: { opacity: 0.7 },
  texto: { color: "#fff", fontSize: 15, fontWeight: "bold" },
});