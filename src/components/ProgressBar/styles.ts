import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    position: "absolute",
    bottom: 32,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#29292E",
    alignSelf: "center",
    borderRadius: 32,
  },
  progressText: {
    marginRight: 8,
    color: "#C4C4CC",
  },
  tracker: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#505059"
  },
  progress: {
    height: 3,
    backgroundColor: "#8257E5",
  },
  button: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 32,
  },
  progressContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  }
});
