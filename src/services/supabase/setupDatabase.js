import { supabase } from "./supabaseClientConnection";

export const setUpdatabase = async()=>{
    console.log("Checking database ....");

    const {data:shops,error} = await supabase.from("barbershops").select("id").limit(1);

    if(error){
        console.error("Database error: ",error);
        return {success:false}
    }

    //this is for POC ONLY!!!
    if(!shops || shops.length === 0){
        console.log("initiating DEMO barber");
        const {error:insertError} = await supabase.from("barbershops").insert([{
            name:"DEMO shop", address:"DEMO address"
        }])

        if (insertError) {
            console.error("Failed to seed:", insertError.message);
            return {success:false}
          } else {
            console.log("Default data inserted");
    }

    }else{
        console.log("Database ready");
        return {success:true}
    }

}