
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const COLORS = {
  background: "#101827",
  card: "#1B2940",
  orange: "#FF8C00",
  muted: "#9AA8BC",
  border: "#2A3A53",
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: "#F7F8FA",
        headerTitleStyle: {
          fontWeight: "800",
          fontSize: 17,
        },
        headerShadowVisible: false,

        tabBarStyle: {
          backgroundColor: COLORS.card,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          height: 68,
          paddingTop: 8,
          paddingBottom: 8,
        },

        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.muted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "700",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "Mi portafolio",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={focused ? COLORS.orange : COLORS.muted}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="estudios"
        options={{
          title: "Estudios",
          headerTitle: "Formación académica",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={size}
              color={focused ? COLORS.orange : COLORS.muted}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          headerTitle: "Experiencia y proyectos",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "briefcase" : "briefcase-outline"}
              size={size}
              color={focused ? COLORS.orange : COLORS.muted}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="hobbies"
        options={{
          title: "Intereses",
          headerTitle: "Intereses personales",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={focused ? COLORS.orange : COLORS.muted}
            />
          ),
        }}
      />
    </Tabs>
  );
}
