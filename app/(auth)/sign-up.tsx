import { icons } from "@/constants/icons";
import { useKeyboard } from "@/hooks/useKeyboard";
import { Link, router } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const SignUp = () => {
  const { keyboardOpen } = useKeyboard();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        className="keyboard-view"
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={keyboardOpen}
          >
            <View className="auth-banner">
              <View className="auth-logo">
                <Image source={icons.banner} alt="banner"></Image>
                <View className="auth-title">
                  <Text className="auth-app-name">Recurlly</Text>
                  <Text className="auth-sub-name">SMART BILLING</Text>
                </View>
              </View>

              <View className="welcome-cont">
                <Text className="welcome-text">Create your Account</Text>
                <Text className="welcome-sub-text">
                  Start tracking your subscriptions and never miss a payment
                </Text>
              </View>

              <View className="auth-form">
                <Text className="auth-input-label">Email</Text>
                <TextInput
                  className="auth-input"
                  placeholder="name@example.com"
                ></TextInput>

                <Text className="auth-input-label">Password</Text>
                <TextInput
                  className="auth-input"
                  placeholder="Create a strong password"
                  secureTextEntry
                ></TextInput>

                <Text className="auth-input-label">Confirm Password</Text>
                <TextInput
                  className="auth-input"
                  placeholder="Enter your password"
                  secureTextEntry
                ></TextInput>

                <View className="auth-button-cont">
                  <TouchableOpacity
                    className="sign-in-button"
                    onPress={() => router.replace("/(tabs)")}
                  >
                    <Text className="sign-in-text">Create Account</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="footer">
                <Text className="sign-up-message">
                  Already have an account?
                </Text>
                <Link className="sign-up-text" href="/(auth)/sign-in">
                  Sign In
                </Link>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
