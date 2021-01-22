import React, { useContext } from 'react'
import {StyleSheet,View} from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SignUpscreen = () => {
    const {state, signup} = useContext(AuthContext)
    

    console.log(state)
    return (
        <View style={styles.container}>
        <AuthForm 
        headerText="Sign Up For tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit = {signup}    
        />
        <NavLink />
        </View>
    )
        
}
        {/* <Spacer>
        <Text h3>SignUp for Tracker</Text>
        </Spacer>
        <Spacer>
        <Input label="Email"
         value={email} 
         onChangeText={setEmail}
         autoCapitalize='none'
         autoCorrect={false}
         />
        </Spacer>
        <Spacer>
        <Input label="Password"
        secureTextEntry
         value = {password}
         onChangeText={setpassword}
         autoCapitalize='none'
         autoCorrect={false}
          />
        </Spacer>
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null} */}
        {/* <Spacer>
        <Button title = "Sign Up" onPress={() => signup({ email, password})} />
        </Spacer> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
        <Text style={styles.link}>Already have an account? Sign in instead</Text>
        </Spacer>
        </TouchableOpacity> */}
        
        // <View>
        //     <Text>Signup Screen</Text>
        //     <Button title = "Go to SignIn" onPress={() => navigation.navigate("Signin")}/><br/>
        //     <Button title = "Go to Bottom" onPress={() => navigation.navigate("Bottomtab")}/>
        // </View>
    
SignUpscreen.navigationOptions = () => {
    return {
        header:null
    }
}

const styles = StyleSheet.create({
    container:{
        borderColor:'red',
        borderWidth:10,
        flex:1,
        justifyContent:'center',
        marginBottom:200
    },
   
   
})

export default SignUpscreen