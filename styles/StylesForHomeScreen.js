import { StyleSheet } from 'react-native';
const StylesForHomeScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CBC0AD',
        padding: '5%'
    },
    taskTextHeading: {
        fontSize: 36,
        color: '#2A0800',
        fontFamily: 'Poppins-SemiBold'
    },
    viewForSettingIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    textInput: {
        padding: '3%',
        paddingHorizontal: '5%',
        width: '87%'
        // borderWidth: 1.5
        // borderRadius: 40,
    },
    viewForsearch: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 40,
        // padding: '3%',
        paddingHorizontal: '4%', 
        borderWidth: 2,
    },
    viewForSearchIcon: {
        // borderTopLeftRadius: 40,
        // borderBottomLeftRadius: 40,
    },
    viewForFilterIcon: {
        // borderTopRightRadius: 40,
        // borderBottomRightRadius: 40,
    },
    viewForTask: {
        backgroundColor: '#FAFAFF',
        // height: 200,
        borderRadius: 20,
        padding: '3%',
        height: '85%',
        marginBottom: '6%',
        paddingHorizontal: '6%',
        justifyContent: 'space-between'
    },
    viewForFlashList: {
        flex: 1,
        marginTop: '8%'

    },
    taskText: {
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
        color: '#2A0800'
    },
    textOfDueHeading: {
        color: '#2A0800',
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold',
    },
    pressableForAddingTask: {
        
    },
    viewForAddTaskPressable: {
        position: 'absolute',
        bottom: '5%',
        left: '85%'
    }


})
export default StylesForHomeScreen;
