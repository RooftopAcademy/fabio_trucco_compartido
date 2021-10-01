import isChecked from "./isChecked";

export default function multipleChecks(ids: string[]) : string[] {

    let answer: string[];
    
    ids.forEach((id) => {
       if ( isChecked(id) ) { answer.push(id) } 
    })

    return answer;

}