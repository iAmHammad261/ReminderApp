import { StyleSheet } from 'react-native';
const StylesForAddNewTaskScreen = StyleSheet.create({
    container: {
        // flexGrow:1,
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
        marginTop: '3%',
        marginBottom: '3%',
        // flex: 0.30,
        gap: 10,
        justifyContent: 'space-between'
    },
    containerForForm: {
        flex: 1,
        paddingBottom: '10%'
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
        gap: 10,
        // flex: 1,
        // marginBottom: '5%',
        justifyContent: 'space-between'

    },
    viewForRepeat: {
        marginTop: '7%',
        // flex: 0.25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 2,
    },
    ViewForChipsOnFirstLine: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    ViewForChipsOnSecondLine: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textStyleForChip: {
        color: 'white'

    },
    forOption: {
        backgroundColor: '#CBC0AD',
        borderWidth: 2,
        padding: '2%',
        paddingHorizontal: '6%',
        borderRadius: 20,
    },
    forOptionSelected: {
        backgroundColor: '#2A0800',
        borderWidth: 2,
        padding: '2%',
        paddingHorizontal: '6%',
        borderRadius: 20,

    },
    styleForTextOfChips: {
        color: 'black'
    },
    styleForTextOfChipsIfPressed: {
        color: 'white'
    },
    viewForChips: {
        // marginTop: '3%',
        flex: 0.1

    },
    viewForPressablesOfCancelAndAdd: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginTop: '6%',
        // borderWidth: 5,
    },
    pressableOfSave: {
        paddingHorizontal: '15%',
        paddingVertical: '2%',
        backgroundColor: '#FC5007',
        borderWidth:2,
        borderColor: '#FC5007',
        borderRadius: 20,
    },
    pressableOfCancel: {
        paddingHorizontal: '15%',
        paddingVertical: '2%',
        // borderWidth: 4 ,
        borderWidth:2,
        borderColor: '#FC5007',
        // backgroundColor: '#FC5007',
        borderRadius: 20,
    },
    textOfPressableOfSave: {
        color: 'white',
        fontWeight: 'Poppins-SemiBold',
        fontSize: 16,
        letterSpacing: 1,
    },
    textOfPressableOfCancel: {
        color: '#FC5007',
        fontFamily: 'Poppins-SemiBold',
        // fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1
    }
})
export default StylesForAddNewTaskScreen;