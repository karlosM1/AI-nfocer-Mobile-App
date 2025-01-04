import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
} from "react-native";

import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container]}>
          <Text style={[styles.label]}>{label}</Text>
          <View style={[styles.inputContainer]}>
            {icon && <Image source={icon} style={[styles.icon]} />}
            <TextInput
              style={[styles.input]}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: "100%",
  },
  label: {
    fontSize: 18,
    fontFamily: "JakartaSemiBold",
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#F5F5F5",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  input: {
    borderRadius: 50,
    padding: 16,
    fontFamily: "JakartaSemiBold",
    fontSize: 15,
    flex: 1,
    textAlign: "left",
  },
});

export default InputField;
