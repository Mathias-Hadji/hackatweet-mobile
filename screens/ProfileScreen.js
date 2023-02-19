import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Button,
} from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <StatusBar style="dark" />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    enabled
                >
                    <View style={styles.container}>
                        <Text style={{ fontSize: 50, marginVertical: 20 }}>
                            Profile Screen.
                        </Text>

                        <TextInput
                            style={{
                                borderWidth: 1,
                                padding: 5,
                                borderRadius: 4,
                            }}
                            placeholder="useless placeholder"
                        />
                        <Button
                            title="Go to Home"
                            onPress={() => navigation.navigate("Home")}
                        />
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 50,
        backgroundColor: "#77daff"
    },
});
