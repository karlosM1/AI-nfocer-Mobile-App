import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "#6B7280";
    case "danger":
      return "#EF4444";
    case "success":
      return "#10B981";
    case "outline":
      return "transparent";
    default:
      return "#0286FF";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "#000000";
    case "secondary":
      return "#F3F4F6";
    case "danger":
      return "#FEE2E2";
    case "success":
      return "#D1FAE5";
    default:
      return "#FFFFFF";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: getBgVariantStyle(bgVariant) },
        bgVariant === "outline" && styles.outline,
        props.style,
      ]}
    >
      {IconLeft && <IconLeft />}
      <Text
        style={[styles.buttonText, { color: getTextVariantStyle(textVariant) }]}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    padding: 15,
    shadowColor: "#A3A3A3",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 4,
  },
  outline: {
    borderWidth: 0.5,
    borderColor: "#D1D5DB",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
