import { View, Text, ImageBackground } from "react-native";
import { StyledButton } from "../StyledButton/StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          <Text style={styles.tagLineCTA}> {taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.btnsContainer}>
        <StyledButton
          type="primary"
          content="custom order"
          onPress={() => console.warn("custom order")}
        />
        <StyledButton
          type="secondary"
          content="existing inventory"
          onPress={() => console.warn("existing inventory")}
        />
      </View>
    </View>
  );
};

export { CarItem };
