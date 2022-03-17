import * as React from "react";
import AppLoading from "expo-app-loading";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Provider as ThemeProvider } from "@draftbit/ui";
import { QueryClient, QueryClientProvider } from "react-query";
import { StripeProvider } from "@stripe/stripe-react-native";

import AppNavigator from "./AppNavigator";
import DraftbitTheme from "./themes/DraftbitTheme.js";
import cacheAssetsAsync from "./config/cacheAssetsAsync";
import { GlobalVariableProvider } from "./config/GlobalVariableContext";

const queryClient = new QueryClient();

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const fontsLoaded = true;

  if (!isReady || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={cacheAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={DraftbitTheme}>
            <StripeProvider
              publishableKey={"pk_test_Pw5bYnKYO43nNN0x7J9wBBMC00aQZn1GRW"}
              merchantIdentifier="merchant.identifier"
            >
              <AppNavigator />
            </StripeProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
