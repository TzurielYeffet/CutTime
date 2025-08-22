//This handles the authentication of users with the supabase server

import {
    supabase
} from "../supabase/supabaseClientConnection.js";

export const authService = {
    async singUp(email, password, userData) {
        const {
            data,
            error
        } = await supabase.auth.singUp({
            email,
            password,
            options: {
                data: {
                    name: userData.name,
                    phone: userData.phone,
                    role: "customer" //userData.role
                }
            }
        })
        return {
            data,
            error
        }
    },


    async signIn(email, password) {
        const {
            data,
            error
        } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        return {
            data,
            error
        }
    },

    async singOut() {
        const {
            error
        } = await supabase.auth.singOut()
        return {
            error
        }
    },

    async onAuthStateChange(callbak) {
        return supabase.auth.onAuthStateChange(callbak)
    }



}