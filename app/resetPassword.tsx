

import { 
    Text, 
    View, 
    StyleSheet, 
    ScrollView, 
    KeyboardAvoidingView, 
    TextInput
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useWindowDimensions } from 'react-native';
import { TouchableHighlight } from "react-native";
import { useState } from "react";
import { useRouter, Link } from "expo-router";


export default function ResetPassword() {

    const { height, width } = useWindowDimensions();
    const [ password1, setPassword1 ] = useState<string>("");
    const [ password2, setPassword2 ] = useState<string>("");
    const router = useRouter();

    return (
    <SafeAreaView style={styles.ScreenContainer}>
        <View style = {[styles.HeaderContainer, { zIndex: 2 }]}>      
            <View style={{flex: 1 }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.HeaderButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.HeaderLogo}>Gathered</Text>
            <View style={{ flex: 1 }} />
        </View>
        <Image 
            style={{ width: width, height: height/2, position: 'absolute', top: height/7}}
            source={require('@/assets/images/resetPassword/gathered-mobile-resetPassword.png')} 
            contentFit='contain'
        />  
           <View style={{ zIndex: 3 }}>
           <KeyboardAvoidingView style={{ width: '100%'}} behavior="position" keyboardVerticalOffset={100}>
                <ScrollView scrollEnabled={false}>
                    <View
                        style={[{ height: height - 100, marginTop: height/2 - 60}, styles.ForegroundContainer ]}>
                        <Text style={[ styles.TextHeader, { marginBottom: 10}]}>
                            Reset Password
                        </Text>
                        <Text style={[styles.TextBody, { marginBottom: 10 } ]}>
                            Create a new password to secure your account. Make sure it's unique and at least 8 characters long.
                        </Text>
                        <TextInput 
                            secureTextEntry
                            style={styles.TextInput }
                            placeholder="Password"
                            placeholderTextColor={'#023047'}
                            value={password1}
                            cursorColor={'#023047'}
                            onChangeText={(text) => setPassword1(text)}
                        />
                        <TextInput 
                            style={styles.TextInput }
                            secureTextEntry
                            placeholder="Confirm Password"
                            placeholderTextColor={'#023047'}
                            value={password2}
                            cursorColor={'#023047'}
                            onChangeText={(text) => setPassword2(text)}
                        />
                        <TouchableHighlight 
                            style={styles.ConnectButton}
                            onPress={() => console.log('login')}
                            underlayColor={'#ffdda1'}
                            activeOpacity={0.6}
                        >
                            <Text style={styles.ConnectButtonText}>Reset Password</Text> 
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView> 
            </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    ScreenContainer: { 
        backgroundColor: '#8ecAE6', 
        width: '100%', 
        height: '100%'
    },
    HeaderContainer: { 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        marginTop: 25
    },
    HeaderButtonText: { 
        fontWeight: 'bold', 
        fontSize: 16, 
        color: '#023047', 
        marginLeft: 30
    },
    HeaderLogo: { 
        fontWeight: 'bold', 
        fontSize: 22, 
        color: '#023047'
    },
    ForegroundContainer: { 
        backgroundColor: 'white', 
        width: '100%', 
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 1, height: -4 },
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    TextHeader: {
        color:'#023047',
        fontSize: 26,
        fontWeight: 'bold',
    },
    TextBody: {
        fontWeight: 'regular',
        fontSize: 16,
        color: '#023047',
        lineHeight: 25
    },
    TextInput: {
        color: '#023047',
        height: 50,
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#023047',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    ConnectButton: {
        backgroundColor: '#ffb703', 
        height: 60, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 20,
    },
    ConnectButtonText: {
        color: '#023047',
        fontWeight: 'bold',
        fontSize: 16,
    }
});