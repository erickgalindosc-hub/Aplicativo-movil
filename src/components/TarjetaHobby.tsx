import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  nombre: string;
  icono: keyof typeof Ionicons.glyphMap;
  descripcion: string;
  onPress: () => void;
};

const TarjetaHobby = ({ nombre, icono, descripcion, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [estilos.tarjeta, pressed && estilos.presionada]}
    >
      <View style={estilos.iconoContenedor}>
        <Ionicons name={icono} size={28} color="#2563eb" />
      </View>
      <View style={estilos.textos}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Text style={estilos.descripcion}>{descripcion}</Text>
      </View>
    </Pressable>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    gap: 14,
  },
  presionada: { opacity: 0.7 },
  iconoContenedor: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#eef2ff",
    alignItems: "center",
    justifyContent: "center",
  },
  textos: { flex: 1 },
  nombre: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  descripcion: { fontSize: 13, color: "#475569" },
});