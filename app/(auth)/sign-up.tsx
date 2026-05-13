import { icons } from "@/constants/icons";
import { Link, router } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
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
            placeholder="Enter your email"
          ></TextInput>

          <Text className="auth-input-label">Password</Text>
          <TextInput
            className="auth-input"
            placeholder="Create a strong password"
          ></TextInput>

          <Text className="auth-input-label">Confirm Password</Text>
          <TextInput
            className="auth-input"
            placeholder="Enter your password"
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
          <Text className="sign-up-message">Already have an account?</Text>
          <Link className="sign-up-text" href="/(auth)/sign-in">
            Sign In
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
