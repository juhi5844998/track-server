import React from 'react'
import {Text,StyleSheet,View,Button} from 'react-native'


const TrackListscreen = ({ navigation }) => {
    return (
        <View>
            <Text>Track List Screen</Text>
            <Button title="Go to TrackDetails"  onPress={() => navigation.navigate("TrackDetail")}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default TrackListscreen