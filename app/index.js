import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES, FONTS } from '../constants';
import { Nearbyjobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
            }} />
        </SafeAreaView>
    );
};

export default Home;