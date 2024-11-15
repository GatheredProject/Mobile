import { Text, StyleSheet,   View, TouchableHighlight} from 'react-native';
import { Link, useRouter} from 'expo-router';
import { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, {  
    ICarouselInstance,
} from "react-native-reanimated-carousel";
import { Image } from 'expo-image';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Page() {

    const carouselRef = useRef<ICarouselInstance>(null);
    
    const [ currSlideIndex, setCurrSlideIndex] = useState<number>(0);
    const onPressNext = () => {
        carouselRef.current?.next();
    };
    const onPressBack = () => {
        carouselRef.current?.prev();
    }

    const carouselScreenInfo = [
        { 
            imageSrc: require('@/assets/images/welcome/gathered-mobile-welcome-1.png'),
            title: "Post Prayer Requests & Praise Reports",
            body: "Share your prayer needs and blessings on the app so that your community can join you in prayer and celebrate with you."
        },
        { 
            imageSrc: require('@/assets/images/welcome/gathered-mobile-welcome-2.png'),
            title: "Create Prayer Groups with your Friends and Family",
            body: "Create Prayer Groups with your Friends and Family to keep your prayer requests and praise reports organised."
        },
        { 
            imageSrc: require('@/assets/images/welcome/gathered-mobile-welcome-3.png'),
            title: "Pray and Praise Together with your Community",
            body: "Pray over your community's prayer requests and celebrate praise reports with them."
        }
    ]


    const router = useRouter();

    return (
        <SafeAreaView style={styles.ScreenContainer}> 
            <View style={styles.HeaderContainer}>
                <TouchableOpacity onPress={onPressBack}>
                    <Text style={[styles.HeaderButton, { opacity: currSlideIndex === 0 ? 0 : 1 }]}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.HeaderLogo}>Gathered</Text>
                <TouchableOpacity onPress={onPressNext}>
                    <Text style={[styles.HeaderButton, { opacity: currSlideIndex ===  2 ? 0 : 1 }]}>Next</Text>
                </TouchableOpacity>
            </View> 
            <View style={styles.CarouselContainer}>
                <Carousel
                    ref={carouselRef}
                    width={375}
                    height={450}
                    loop={false}
                    data={carouselScreenInfo}
                    style={styles.Carousel}
                    onScrollEnd={(index : number) => {
                        setCurrSlideIndex(index) 
                    }}
                    renderItem={({ item }) => <CarouselItem imgSrc={item.imageSrc} title={item.title} body={item.body} />}
                />
                <View style={ styles.CarouselDotsContainer }>
                    { carouselScreenInfo.map((_, index) => (
                        <View key={index} style={[ styles.CarouselDot, { backgroundColor: currSlideIndex === index ? 'black' : 'gray'}]} />
                    ))}
                </View>
            </View>
            <View style={styles.Footer}>
            <TouchableHighlight 
                style={styles.GetStartedButton}
                onPress={() => router.push('/domain')}
                underlayColor={'#ffdda1'}
                activeOpacity={0.6}
            >
                <Text style={styles.GetStartedButtonText}>Get Started</Text> 
            </TouchableHighlight>
            <Text style={styles.TextBody} >Don't have an account? <Link href={"/domain"} style={{ fontWeight: 'bold'}}>Register</Link></Text>
        </View>
        </SafeAreaView>
    );
}

type ImageSource = 'string | number | ImageSource | ImageSource[] | string[] | null | undefined';
const CarouselItem = ({ imgSrc, title, body } : { imgSrc : ImageSource, title : string, body: string }) => {
    return (
        <View style={ styles.CarouselItemContainer}>
            <Image
                source={imgSrc}
                contentFit='contain'
                style={ styles.CarouselItemImage}
            />
            <Text style={[styles.TextTitle, { textAlign: 'center'}]}>
                { title }
            </Text>
            <Text style={[styles.TextBody, { textAlign: "center", paddingVertical: 20}]}>
                {body}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    ScreenContainer: {
        backgroundColor: 'white',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    HeaderContainer: { 
        height: 60, 
        width: '100%', 
        flexDirection: 'row',   
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,  
    },
    HeaderLogo: {
        fontWeight: 'bold', 
        fontSize: 22,
        color: '#023047'
    },
    HeaderButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#023047'
    },
    CarouselContainer: { 
        width: '100%', 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    Carousel: {
        marginTop: 50
    },
    CarouselDotsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 90,
        marginBottom: 15,   
    },
    CarouselDot: {
        width: 25, 
        height: 5, 
        borderRadius: 5
    },
    Footer: { 
        height: 100 ,
        width: '100%', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingBottom: 10,
    },
    GetStartedButton: { 
        backgroundColor: '#ffb703', 
        height: 60, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        borderRadius: 10,
        marginBottom: 15,
    },
    GetStartedButtonText: {
        fontWeight: 'bold',
        color: '#023047'
    },
    TextBody: {
        fontSize: 16,
        color: '#023047',
        fontWeight: 'regular',
        lineHeight: 25,
    },
    TextTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#023047'
    },
    CarouselItemContainer: {    
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    CarouselItemImage: { 
        width: '100%', 
        height: 275
    }

});