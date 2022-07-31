import MyProfile from './MyProfile'
import { connect } from "react-redux/es/exports";

let mapStateToProps = (state) => {
   let propsData = state.ProfilePage.myProfile[0];
   return {
      name: propsData.name,
      about: propsData.aboutText,
      avatar: propsData.avatar
   }
}

const MyProfileContainer = connect(mapStateToProps, null)(MyProfile)

export default MyProfileContainer;
