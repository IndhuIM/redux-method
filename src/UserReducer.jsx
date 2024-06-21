import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlices =createSlice({
    name:"users",
    initialState:userList,
    reducers:{

        addUser:(state,action) => {
            // console.log(action);
            state.push(action.payload)

        },

        updateUser:(state,action) => {
          const {id,name,email,MobileNo,mark} =action.payload;
          const uu = state.find (users=>users.id==id);
          if(uu){
            uu.name= name;
            uu.email = email;
            uu.MobileNo=MobileNo;
            uu.mark=mark;
          }
        },

        deleteUser:(state,action) => {
            const {id} =action.payload;
            const uu = state.find (users=>users.id==id);
            if(uu){
                return state.filter (f => f.id !==id)
            }
        }

    }
})


export const {addUser , updateUser ,deleteUser} = userSlices.actions
export default userSlices.reducer;