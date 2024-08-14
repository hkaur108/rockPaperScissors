import { useState } from "react";

export default function useCheckWinner(){

    const [winner,setwinner] =useState("");



    return winner;
}