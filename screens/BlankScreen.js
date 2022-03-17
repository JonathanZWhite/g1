import React from "react";
import { ScreenContainer, withTheme } from "@draftbit/ui";
import { StyleSheet, Text } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";

const BlankScreen = (props) => {
  const { theme } = props;
  const { confirmPayment } = useStripe();

  return (
    <ScreenContainer>
      <Text style={{ color: theme.colors.strong }}>Hello world</Text>
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          console.log("cardDetails", cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log("focusField", focusedField);
        }}
      />
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
