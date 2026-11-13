import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#2563eb" }}>
      {/* Pestaña de Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "Datos Personales",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={focused ? "#2563eb" : "#64748b"}
            />
          ),
        }}
      />

      {/* Pestaña de Estudios */}
      <Tabs.Screen
        name="estudios"
        options={{
          title: "Estudios",
          headerTitle: "Formación Académica",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={size}
              color={focused ? "#2563eb" : "#64748b"}
            />
          ),
        }}
      />

      {/* Pestaña de Experiencia */}
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          headerTitle: "Experiencia Laboral",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "briefcase" : "briefcase-outline"}
              size={size}
              color={focused ? "#2563eb" : "#64748b"}
            />
          ),
        }}
      />

      {/* Pestaña de Hobbies */}
      <Tabs.Screen
        name="hobbies"
        options={{
          title: "Hobbies",
          headerTitle: "Intereses / Hobbies",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={focused ? "#2563eb" : "#64748b"}
            />
          ),
        }}
      />
    </Tabs>
  );
}