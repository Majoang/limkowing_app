import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>


            <Text style={styles.tittle}>LIMKOKWING UNIVERSITY OF CREATIVE </Text>
            <Text style={styles.tittle}>TECHOLOGY</Text>
            <Image 
              style={styles.logo}
              source={require('./limkoss.png')}/>
            <ScrollView>
          <View style={styles.rec1}>
            <Text style={styles.text1}>
                  Limkoking university creative technology is a private university that has a presense 
                  across Africa, Europe and Asia. With it's main campus in Malaysia this university has 
                  over 30 000 students from more than 150 countries. It was estabilished in 1991, it's 
                  president is Tan Sri Dato. It's motto is : "DRIVING INNOVATION FOR EDUCATION".
            </Text>
          </View>
           <View style={styles.rec0}>
             <Text style={styles.tittle2}>COURSES AND CONTENTS </Text>

           </View>
            <View style={styles.rec2}>
              <Text style={styles.tittle3}>1. Faculty of Information & Communication Technology </Text>
              <Text style={styles.text1}>- Bachellor of Science(Hons) in Software Engineering with Multimedia</Text>
              <Text style={styles.text1}>- Bachellor of Science(Hons) in Information Technology</Text>
              <Text style={styles.text1}>- Bachellor of Science(Hons) in Business Information Technology</Text>
            </View>
           <View style={styles.rec4}>
             <Text style={styles.tittle3}>1. Bachellor of Science(Hons) in Software Engineering with Multimedia</Text>
             
             <Image
              style={styles.image1}
              source={require('./13-Courses-and-Resources-to-Establish-a-Career-in-Software.jpg')}/>

             <Text style={styles.text1}>This course is meant to direct students to the development and use of Multimediasystems. In this program students are trained in the relevant programming skills with the aid of available Multimedia applications</Text>
           </View> 
           
           <View style={styles.rec3}>
             <Text style={styles.tittle3}>2. Bachellor of Science(Hons) in Information Technology</Text>
              <Image
              style={styles.image1}
              source={require('./blog-image-9.17.jpg')}/>
             <Text style={styles.text1}>This program typically takes three to four year. This degree is primarily focused on subjects such as Software, database and networking. It aims to acguaint students with a wide range of problems that arise in computing and Information technology, together with different methods and technologies availableas solutions,</Text>
           </View>
           <View style={styles.rec4}>
           <Text style={styles.tittle3}>3. Bachellor of Science(Hons) in Business Information Technology</Text>
           <Image
              style={styles.image1}
              source={require('./information-technology_680.jpg')}/>

             <Text style={styles.text1}>This program is meant to provide students with expertise in the development and use of cumputer systems and guantitative modelling techniques fro solving some of business problems and making managerial decisions.</Text>
           </View>
          <StatusBar style="auto" />
          </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent:'flex-start',
    borderRadius:8,
    borderStyle:'groove',
    borderWidth:1
  },
  
  tittle:
  {
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  color: 'white',
  fontStyle: 'normal',
  marginLeft: 10,
  marginTop:8,
  },
  tittle2:
  {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: 'white',
    fontStyle: 'normal',
    marginLeft: 70,
    marginTop:8,
  },
  tittle3:
  {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    color: '#00008B',
    fontStyle: 'italic',
    marginLeft: 10,
    marginTop:8,
    },
  rec0:
  {
    width:'100%',
    height:35,
    backgroundColor:'#0000FF',
    marginTop:5,
    borderRadius:8
  },
  rec1:
  {
    width:'100%',
    height:150,
    backgroundColor:'#AFEEEE',
    borderRadius:8
  },
  rec2:
  {
    width:'100%',
    height:168,
    backgroundColor:'#AFEEEE',
    marginTop:5,
    borderRadius:8
  },
  rec3:
  {
    width:'100%',
    height:390,
    backgroundColor:'#AFEEEE',
    marginTop:5,
    borderRadius:8
  },
  rec4:
  {
    width:'100%',
    height:370,
    backgroundColor:'#AFEEEE',
    marginTop:5,
    borderRadius:8
  },
  text1:
  {
   marginTop:5,
   fontSize:15,
   marginLeft:4
  },
  logo:
  {
    alignItems:'center',
    width:250,
    height:153,
    marginBottom:5,
    borderRadius:5
  },
  image1: {
    width: '100%',
    height: 200,
    borderRadius: 7,
    marginTop:10
  },
  
});
