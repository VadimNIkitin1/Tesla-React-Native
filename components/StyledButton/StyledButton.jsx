import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const color = type === "primary" ? "white" : "#171a20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.btnText, { color: color }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export { StyledButton };
