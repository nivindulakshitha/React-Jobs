import react from "react";
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const tabs = ["About", "Qualifications", "Responsibilities"];

const jobDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    });
    
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => { };

    const [activeTab, setActiveTab] = useState(tabs[0]);

    const displayTabContent = (tab, job) => {
        switch (tab) {
            case "About": {}
            case "Qualifications": {
                return (
                    <Specifics
                        title='Qualifications'
                        points={job.job_highlights?.Qualifications??['No data available']}  
                    />
                );
            }
            case "Responsibilities": {}
            default: break;
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension='60%'
                        handlePress={() => router.back()}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.share}
                        dimension='60%'
                    />
                ),
                headerTitle: ''
            }}>
            </Stack.Screen>

            <>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    {isLoading ?
                        (<ActivityIndicator size='large' color={COLORS.primary} />)
                        : error ?
                            (<Text>Something went wrong</Text>)
                            : data.length === 0 ?
                                (<Text>No data available</Text>)
                                : (<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                                    <Company 
                                        logo={data[0].employer_logo}
                                        jobTitle={data[0].job_title}
                                        companyName={data[0].employer_name}
                                        location={data[0].job_country}
                                    />
                                    <JobTabs
                                        tabs={tabs}
                                        activeTab={activeTab}
                                        setActiveTab={setActiveTab}
                                    />
                                    {displayTabContent(activeTab, data[0])}
                                </View>)
                    }
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default jobDetails;