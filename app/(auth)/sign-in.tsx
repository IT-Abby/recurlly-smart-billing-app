import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>Sign In</Text>
      <Link href="/(tabs)">Go to Tabs</Link>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </SafeAreaView>
  );
};

export default SignIn;
