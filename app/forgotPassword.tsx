

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
import { useRouter } from "expo-router";


export default function ForgotPassword() {

    const { height, width } = useWindowDimensions();
    const [ email, setEmail ] = useState<string>(""); 
    const router = useRouter();

    return (
    <SafeAreaView style={styles.ScreenContainer}>
        <View style = {styles.HeaderContainer}>      
            <View style={{flex: 1 }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.HeaderButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.HeaderLogo}>Gathered</Text>
            <View style={{ flex: 1 }} />
        </View>
        <Image 
            style={{ width: width, height: height/2, position: 'absolute', top: height/6}}
            source={require('@/assets/images/forgotPassword/gathered-mobile-forgotPassword.png')} 
            contentFit='contain'
        />  
           <View>
           <KeyboardAvoidingView style={{ width: '100%'}} behavior="position" keyboardVerticalOffset={100}>
                <ScrollView scrollEnabled={false}>
                    <View
                        style={[{ height: height - 100, marginTop: height/2 - 25 }, styles.ForegroundContainer ]}>
                        <Text style={[ styles.TextHeader, { marginBottom: 25 }]}>
                            Forgot Password?
                        </Text>
                        <Text style={ styles.TextBody }>
                            Forgot your password? Enter your email, and we’ll send you instructions on how to securely reset it.
                        </Text>
                            <TextInput 
                                style={styles.TextInput }
                                placeholder="example@example.com"
                                placeholderTextColor={'#023047'}
                                value={email}
                                cursorColor={'#023047'}
                                onChangeText={(text) => setEmail(text)}
                            />
                        
                        <TouchableHighlight 
                            style={styles.ConnectButton}
                            onPress={() => router.push("/resetPassword")}
                            underlayColor={'#ffdda1'}
                            activeOpacity={0.6}
                        >
                            <Text style={styles.ConnectButtonText}>Send Email</Text> 
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
        marginTop: 25,
    },
    ConnectButton: {
        backgroundColor: '#ffb703', 
        height: 60, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 30,
    },
    ConnectButtonText: {
        color: '#023047',
        fontWeight: 'bold',
        fontSize: 16,
    }
});