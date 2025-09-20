import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },
  largeText: {
    fontWeight: "700",
    fontSize: 39,
  },
  smallText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#7E7B7B",
    marginTop: 10,
  },
  formGroup: {
    marginTop: 44,
    gap: 10,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#7B7B7B",
    marginBottom: 7,
  },
  inputField: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
  },
  passwordGroup: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#34967C",
    marginTop: 9,
  },
  button: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "300",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#e6e6e6",
  },
  dividerText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#C2C2C2",
  },
  socialMediaButtonGroup: {
    gap: 15,
    marginTop: 15,
  },
  socialMediaButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9E9E9",
  },
  socialMediaButtonText: {
    fontSize: 18,
    fontWeight: "400",
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    left: 77,
    right: 76,
    bottom: 33,
  },
  subText: {
    fontSize: 18,
    fontWeight: "400",
  },
  subTextJoin: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFA800",
  },
});