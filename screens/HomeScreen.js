import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
      updateAttendance();
        nextScreen =({
  <TouchableOpacity
      style={styles.buttons}
      onPress={() => this.props.navigation.navigate('SummaryScreen')}>
  
        <Text style = {styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        })
    </View>
    )
  }
}

 var class_ref =  db.ref('/').on('value', data => {
        var all_students = []
        var class_a = data.val().class_A;
        for (var i in class_a){
          all_studnets.push(class_a[i]);
        }
        all_studnets.sort(function(a,b){
          return a.roll_no - b.roll_no;
        })
        this.setState({ all_students: all_students })
      })

  updateAttendance(roll_no, status){
    var id = '';
    if (roll_no <= 9) {
      id = '0' + roll_no;
    } else {
      id = roll_no;
    }

    var today = new Data();
    var dd = today.getData();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if(mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today]: status,
    });
  }

const styles = StyleSheet.create({
  displayText:{
    color: 'black',
    textAlign: 'center',
    fontSize: '40',
    fontWeight : 'bold'
  },
  button: {
    width:60,
    height: 60,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonText:{
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    alignText: 'center',
    alignSelf: 'center',
    marginTop: 10
  }
})