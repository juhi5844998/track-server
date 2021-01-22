import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from '@react-navigation/native';



const NavLink = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
        <Text style={styles.link}>Already have an account? Sign In instead!</Text>
        </Spacer>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    link:{
        color:'blue'
    },
})

export default NavLink