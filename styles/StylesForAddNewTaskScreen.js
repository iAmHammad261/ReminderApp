import { StyleSheet } from 'react-native';
const StylesForAddNewTaskScreen = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#CBC0AD",
        padding: '5%'
    },
    mainTextHeading: {
        fontSize: 36,
        fontFamily: 'Poppins-SemiBold',
        color: '#2A0800',
        textAlign: 'center'
    },
    viewForMainHeading: {
    },
    textInputStyle: {
        backgroundColor:'white',
        // flex:1,
        // width: '100%',
        padding: '3%',
        borderRadius: 20,
        paddingLeft: '10%'
        // paddingStart: '10%',
    },
    textInputStyleForDate: {
        backgroundColor:'white',
        flex:1,
        // width: '100%',
        padding: '3%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingLeft: '10%'
        // paddingStart: '10%',
    },
    textForValue: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        color: '#2A0800'
    },
    viewForFormSection: {
        marginTop: '5%',
        marginBottom: '5%',
        flex: 0.15,
        justifyContent: 'space-between'
    },
    containerForForm: {
        flex: 1,
        // borderWidth: 2,
        // gap: 10
        // justifyContent: 'space-between'
    },
    viewForTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    forCalenderButton: {
        backgroundColor: 'white',
        padding: '3.45%',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    textInputForNotes: {
        backgroundColor: 'white',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        height: 120,
        // paddingBottom: '10%',
        // paddingBottom: '50%',
        borderRadius:20
    },
    viewForFormSectionOfNotes: {
        // height
        // marginBottom: 30,
        marginTop: '5%',
        flex: 0.27,
        // marginBottom: '5%',
        justifyContent: 'space-between'

    },
    viewForRepeat: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    forFrequency: {
        // marginTop: '35%'

    }
})
export default StylesForAddNewTaskScreen;