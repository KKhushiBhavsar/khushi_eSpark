<template lang="en">
<div class="parent-container">
    <center>
        <h1>JOB APPLICATION FORM</h1>
        <form @submit.prevent="submitData">
            <fieldset>
                <legend>Basic Information</legend>
                <table>
                    <tr>
                        <td>First Name: </td>
                        <td><input type="text"  v-model="userData.basicDetails.fname"></td>
                        <td>Last Name: </td>
                        <td><input type="text" v-model="userData.basicDetails.lname"></td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td> <input type="text" v-model="userData.basicDetails.designation"></td>
                        <td>Address 1:</td>
                        <td><input type="text"  v-model="userData.basicDetails.address_one"></td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td><input type="text"  v-model="userData.basicDetails.email"></td>
                        <td>Address2: </td>
                        <td><input type="text"  v-model="userData.basicDetails.address_two"></td>
                    </tr>
                    <tr>
                        <td>Phone No:</td>
                        <td><input type="text" v-model="userData.basicDetails.phoneno"></td>
                        <td>City</td>
                        <td><input type="text"  v-model="userData.basicDetailscity"></td>
                    </tr>
                    <tr>
                        <td colspan="2">Gender: <input type="radio"  name="radio_gen" value="male" v-model="userData.basicDetails.gender">Male
                            <input type="radio"  name="radio_gen" value="female" v-model="userData.basicDetails.gender">Female
                            <input type="radio" name="radio_gen" value="other" v-model="userData.basicDetails.gender">Other
                        </td>
                        <td>State: </td>
                        <td>
                            <select name="state" v-model="userData.basicDetails.selectedStates">
                                <option v-for="state in states" :key="state">{{state}}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Relationship Status: </td>
                        <td><select name="relation_status"  v-model="userData.basicDetails.relation_status">
                                <option name="single" value="single">Single</option>
                                <option name="married" value="married">married</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td>Zip Code: </td>
                        <td><input type="text"  v-model="userData.basicDetails.zipcode"></td>
                        <td>Date of Birth:</td>
                        <td><input type="date" v-model="userData.basicDetails.dob"></td>
                    </tr><br>
                </table>
            </fieldset><br>
            <fieldset>
                <legend>Education Details</legend>
                <table id="education_details">
                    <tr v-for="(eduDetails,index) in userData.educationDetails" :key="eduDetails">
                        <td>Cerification Name:
                            <select name="course"  v-model="userData.educationDetails[index].Selectedcourse">
                                <option v-for="edu in course" :key="edu">{{edu}}</option>
                            </select>
                        </td>
                        <td>Board/University Name: </td>
                        <td><input type="text" v-model="userData.educationDetails[index].university"></td>
                        <td>Passing Year: </td>
                        <td><input type="text" v-model="userData.educationDetails[index].passing_year"></td>
                        <td>Percentage: </td>
                        <td><input type="text"  v-model="userData.educationDetails[index].percentage"></td>
                    </tr>
                    <tr>
                        <td><input type="button" class="btn"   value="+ADD" @click="addEducation()"></td>
                        <td><input type="button" class="btn"   value="-RMV" @click="removeEducation()"></td>
                    </tr>
                </table>
            </fieldset>
            <fieldset>
                <legend>Experience Details</legend>
                <table id="experience_table">
                    <tr v-for="(experience,index) in userData.experienceDetails" :key="experience">
                        <td>Company Name: </td>
                        <td><input type="text"  v-model="userData.experienceDetails[index].company_name"></td>
                        <td>Designation</td>
                        <td><input type="text" v-model="userData.experienceDetails[index].designation"></td>
                        <td>From: </td>
                        <td><input type="date"  v-model="userData.experienceDetails[index].from_date"></td>
                        <td>TO:</td>
                        <td><input type="date"  v-model="userData.experienceDetails[index].to_date"></td>
                    </tr>
                    <tr>
                    <td><input type="button" class="btn" value="+ADD" @click="addExperience()"> </td>
                    <td><input type="button" class="btn"  value="-RMV" @click="removeExperience()"> </td>

                    </tr>
                       
                </table>
            </fieldset>
            <fieldset>
                <legend>Known Language:</legend>
                <table>
                    <tr v-for="lang in language" :key="lang">
                        <td>
                            <input type="checkbox" :value="lang" v-model="userData.knownLanguage.selectLanguage">{{lang}}
                            <input type="checkbox" :value="lang" v-model="userData.knownLanguage.read">read
                            <input type="checkbox" :value="lang" v-model="userData.knownLanguage.write">Write
                            <input type="checkbox" :value="lang" v-model="userData.knownLanguage.speak">Speak
                        </td>
                    </tr>
                </table>
            </fieldset>
            <fieldset>
                <legend>Technologies You Know: </legend>
                <table id="technology">
                    <tr v-for="(tech,index) in technology" :key="tech">
                        <td>
                            <input type="checkbox" :value="tech" v-model="userData.technologyKnown.selectedTechnology">{{tech}}
                            <input type="radio" :value="tech" :name="tech" v-model="userData.technologyKnown.beginer[index]">Beginer
                            <input type="radio" :value="tech" :name="tech" v-model="userData.technologyKnown.mediator[index]">Mediator
                            <input type="radio" :value="tech" :name="tech" v-model="userData.technologyKnown.expert[index]">Expert
                        </td>

                    </tr>

                </table>
            </fieldset>
            <fieldset>
                <legend>Reference Contact</legend>
                <table>
                    <tr>
                        <td> Name: </td>
                        <td><input type="text"  v-model="userData.reference.refNameO"></td>
                        <td>contact no: </td>
                        <td><input type="text"  v-model="userData.reference.refCnO"></td>
                        <td>Relation </td>
                        <td><input type="text"  v-model="userData.reference.refRelationO"></td>
                    </tr>
                    <tr>
                        <td> Name: </td>
                        <td><input type="text"  v-model="userData.reference.refNameT"></td>
                        <td>contact no: </td>
                        <td><input type="text" v-model="userData.reference.refCnT"></td>
                        <td>Relation </td>
                        <td><input type="text"  v-model="userData.reference.refRelationT"></td>
                    </tr>
                </table>
            </fieldset>
            <fieldset>
                <legend>Preferences</legend>
                <table>
                    <tr>
                        <td>Prefered Location: </td>
                        <td><select name="location"  v-model="userData.preference.location">
                                <option name="ahmedabad" value="ahmedabad">Ahmedabad</option>
                                <option name="surat" value="surat">Surat</option>
                                <option name="mahesana" value="mahesana">Mahesana</option>
                                <option name="gandhinagar" value="gandhinagar">Gandhinagar</option>
                                <option name="vadodara" value="vadodara">vadodara</option>
                            </select>
                        </td>
                        <td>Notice Period: <input type="text"  v-model="userData.preference.notice_period"><br>
                            Expected CTC: <input type="text"   v-model="userData.preference.expected_ctc"><br>
                            Current CTC: <input type="text"  v-model="userData.preference.current_ctc"></td>
                        <td>Department:
                            <select name="dept" id="dept" v-model="userData.preference.dept">
                                <option value="digital Marketing">Digital Marketing</option>
                                <option value="devloper">Developer</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </fieldset>
            <button id="submit">Submit</button>
        </form>
    </center>
</div>
</template>

<script>
export default {
  name: "jobApplication",
  props: {
    editData: {
      type: Object,
    },
  },
  data() {
    return {
      states: ["Gujarat", "Maharashtra", "Rajasthan", "Telangana"],
      course: ["BE", "ME", "diplome", "10th", "12th"],
      language: ["hindi", "english", "gujarati", "german"],
      technology: ["php", "MySql", "laravel", "oracle"],

      userData: {
        id: Date.now().toString(36),
        basicDetails: {
          fname: null,
          lname: null,
          designation: null,
          address_one: null,
          email: null,
          address_two: null,
          phoneno: null,
          selectedStates: [],
          gender: null,
          city: null,
          relation_status: null,
          zipcode: null,
          dob: null,
        },
        educationDetails: [
          {
            Selectedcourse: null,
            university: null,
            passing_year: null,
            percentage: null,
          },
        ],
        experienceDetails: [
          {
            company_name: null,
            designation: null,
            from_date: null,
            to_date: null,
          },
        ],
        knownLanguage: {
          read: [],
          write: [],
          speak: [],
          selectLanguage: [],
        },
        technologyKnown: {
          beginer: [],
          mediator: [],
          expert: [],
          selectedTechnology: [],
        },
        reference: {
          refNameO: null,
          refCnO: null,
          refRelationO: null,
          refNameT: null,
          refCnT: null,
          refRelationT: null,
        },
        preference: {
          location: null,
          notice_period: null,
          expected_ctc: null,
          current_ctc: null,
          dept: null,
        },
      },
      user: null,
    };
  },
  created() {
    // console.log("userData edited", this.editData);
    if (this.editData.length) {
      this.userData = this.editData[0];
    }
    this.user = JSON.parse(localStorage.getItem("user")) || [];
  },
  methods: {
    addEducation() {
      this.userData.educationDetails.push({
        Selectedcourse: null,
        university: null,
        passing_year: null,
        percentage: null,
      });
    },
    removeEducation() {
      if (this.userData.educationDetails.length > 1) {
        this.userData.educationDetails.pop();
      }
      console.log(this.userData.educationDetails.length);
    },
    addExperience() {
      this.userData.experienceDetails.push({
        company_name: null,
        designation: null,
        from_date: null,
        to_date: null,
      });
    },
    removeExperience() {
      if (this.userData.experienceDetails.length > 1) {
        this.userData.experienceDetails.pop();
      }
    },
    submitData() {
      //   console.log(this.userData.id);

      const indexUser = this.user.findIndex((user) => {
        console.log("user", user);
        return user.id === this.userData.id;
      });
      if (indexUser === -1) {
        this.user.push(this.userData);
      } else {
        this.user.splice(indexUser, 1, this.userData);
      }
      localStorage.setItem("user", JSON.stringify(this.user));
      //   console.log("index", indexUser);

      this.$emit("userData", false);
    },
  },
};
</script>

<style scoped>
.parent-container {
  /* resize: none; */
  background-color: rgb(191, 227, 228);
}

legend {
  resize: none;
  border: 3px solid;
  border-radius: 10%;
  color: darkmagenta;
  background-color: cornsilk;
}

fieldset {
  resize: none;
  border: 3px solid;
  border-radius: 15px;
  padding: 2%;
  margin: 15px;
  /* width:max-content; */
  background-color: floralwhite;
}

#submit {
  width: 30%;
  height: 30px;
  background-color: darkgreen;
  font-weight: bolder;
}

.btn {
  background-color: cadetblue;
  font-weight: bolder;
}
</style>
