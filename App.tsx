import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {QueryClient, QueryClientProvider} from "react-query";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";
import {MainContextProvider} from "./src/context/mainContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const queryClient = new QueryClient();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar style="light" />

        <MainContextProvider>
          <QueryClientProvider client={queryClient}>
            <Navigation />
          </QueryClientProvider>
        </MainContextProvider>
      </SafeAreaProvider>
    );
  }
}
