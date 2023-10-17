import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
        {/* CreatePassword  */}
        {/* forget passowrd */}
        {/* login */}
        {/* sign-up */}
        {/* verify-otp */}
      </Box>
    </GluestackUIProvider>
  );
}
